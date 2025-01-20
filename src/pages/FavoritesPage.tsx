import CatList from "@/components/CatLIst/CatList";
import useFavorites from "@/hooks/useFavorites";

const FavoritesPage = () => {
  const { favorites } = useFavorites();
  return <CatList cats={favorites} />;
};

export default FavoritesPage;
