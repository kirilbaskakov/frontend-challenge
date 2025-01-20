import { useCallback, useEffect, useRef, useState } from "react";

import getCats from "@/api/getCats";
import ICat from "@/types/ICat";

import CatList from "../CatLIst/CatList";
import Loader from "../Loader/Loader";

const LIMIT = 15;

const LazyList = () => {
  const [cats, setCats] = useState<ICat[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const observerRef = useRef(null);

  const loadMoreCats = useCallback(() => {
    setIsLoading(true);
    const newPage = Math.ceil(cats.length / LIMIT) + 1;
    getCats(LIMIT, newPage)
      .then((newCats) => setCats((cats) => [...cats, ...newCats]))
      .finally(() => setIsLoading(false));
  }, [cats.length]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !isLoading) {
        loadMoreCats();
      }
    });

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => {
      if (observerRef.current) {
        observer.unobserve(observerRef.current);
      }
    };
  }, [isLoading, loadMoreCats]);
  return (
    <>
      <CatList cats={cats} />
      {isLoading && <Loader />}
      <div
        ref={observerRef}
        style={{ height: "20px", background: "transparent" }}
      />
    </>
  );
};

export default LazyList;
