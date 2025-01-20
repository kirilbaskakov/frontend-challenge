import React, { createContext, ReactNode, useCallback,useState } from "react";

import ICat from "@/types/ICat";

interface FavoritesContextType {
  favorites: ICat[];
  toggleFavorite: (cat: ICat) => void;
  isFavorite: (id: string) => boolean;
}

export const FavoritesContext = createContext<FavoritesContextType | undefined>(
  undefined,
);

export const FavoritesProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [favorites, setFavorites] = useState<ICat[]>(() => {
    const storedFavorites = localStorage.getItem("favoriteCats");
    return storedFavorites ? JSON.parse(storedFavorites) : [];
  });
  const isFavorite = useCallback(
    (id: string) => {
      return favorites.some((cat) => cat.id === id);
    },
    [favorites],
  );

  const toggleFavorite = useCallback(
    (cat: ICat) => {
      setFavorites((prevFavorites) => {
        let newFavories = [];
        if (isFavorite(cat.id)) {
          newFavories = prevFavorites.filter(({ id }) => id !== cat.id);
        } else {
          newFavories = [...prevFavorites, cat];
        }
        localStorage.setItem("favoriteCats", JSON.stringify(newFavories));
        return newFavories;
      });
    },
    [isFavorite],
  );
  return (
    <FavoritesContext.Provider
      value={{ favorites, toggleFavorite, isFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};
