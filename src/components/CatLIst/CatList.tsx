import ICat from "@/types/ICat";

import CatCard from "../CatCard/CatCard";
import styles from "./CatList.module.css";

const CatList = ({ cats }: { cats: ICat[] }) => {
  return (
    <div>
      <div className={styles.grid}>
        {cats.map((cat) => (
          <CatCard cat={cat} key={cat.id} />
        ))}
      </div>
    </div>
  );
};

export default CatList;
