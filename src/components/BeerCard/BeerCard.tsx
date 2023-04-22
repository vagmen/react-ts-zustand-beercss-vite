import { IBeer } from "../../interfaces";
import styles from "./BeerCard.module.css";

interface IBeerCard {
  beer: IBeer;
}

export const BeerCard = ({ beer }: IBeerCard) => {
  return (
    <article className="no-padding round fill ">
      <img
        className={`responsive small top-round ${styles["beer-card-image"]}`}
        src={beer.image_url}
        loading="lazy"
        alt={beer.name}
      />
      <div className="padding">
        <h5>{beer.name}</h5>
        <p>{beer.description}</p>
      </div>
    </article>
  );
};
