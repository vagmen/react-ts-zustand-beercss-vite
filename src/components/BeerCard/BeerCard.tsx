import { IBeer } from "../../interfaces";
import styles from "./BeerCard.module.css";

interface IBeerCard {
  beer: IBeer;
}

export const BeerCard = ({ beer }: IBeerCard) => {
  return (
    <article className="border round primary-container">
      <img
        className={`responsive medium top-round ${styles["beer-card-image"]}`}
        src={beer.image_url}
        loading="lazy"
        alt={beer.name}
      />
      <div>
        <h5>{beer.name}</h5>
        <p className={styles.description}>{beer.description}</p>
      </div>
    </article>
  );
};
