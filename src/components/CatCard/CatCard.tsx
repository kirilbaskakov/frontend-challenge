import Like from "@/assets/favorite.png";
import LikeOutlined from "@/assets/favorite_border.png";
import useFavorites from "@/hooks/useFavorites";
import ICat from "@/types/ICat";

import styles from "./CatCard.module.css";

const CatCard = ({ cat }: { cat: ICat }) => {
  const { toggleFavorite, isFavorite } = useFavorites();

  const onLikeClick = () => {
    toggleFavorite(cat);
  };

  return (
    <div className={styles.card}>
      <img src={cat.url} />
      <button className={styles.likeBtn} onClick={onLikeClick}>
        <img src={isFavorite(cat.id) ? Like : LikeOutlined} />
      </button>
    </div>
  );
};

export default CatCard;
