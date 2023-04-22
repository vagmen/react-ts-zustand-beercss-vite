import { useEffect } from "react";
import { useStore } from "../../store";
import { IBeer } from "../../interfaces";
import styles from "./BeerCard.module.css";
// import "./../../App.css";

interface IBeerCard {
  beer: IBeer;
}

export const BeerCard = ({ beer }: IBeerCard) => {
  return (
    <article className="no-padding round fill ">
      <img
        className={`responsive small top-round ${styles["beer-card-image"]}`}
        src={beer.image_url}
      />
      <div className="padding">
        <h5>{beer.name}</h5>
        <p>{beer.description}</p>
      </div>
    </article>
  );
};
