import { IBeer } from "../../interfaces";
import styles from "./BeerCard.module.css";

interface IBeerCard {
  beer: IBeer;
}

export const BeerCard = ({ beer }: IBeerCard) => {
  return (
    <article className="no-padding border round primary-container">
      <img
        className={`padding responsive extra round ${styles["beer-card-image"]}`}
        src={beer.image_url}
        loading="lazy"
        alt={beer.name}
      />
      <div className="padding">
        <h5>{beer.name}</h5>
        <p className={styles.description}>{beer.description}</p>
      </div>
      <div className="padding absolute top right right-align">
        {beer.abv && (
          <>
            <div>
              <span className="badge none primary ">{beer.abv}</span>
              <div className="tooltip bottom">Крепость</div>
            </div>
            <div className="tiny-padding"></div>
          </>
        )}
        {beer.ibu && (
          <>
            <div>
              <span className="badge none primary ">{beer.ibu}</span>
              <div className="tooltip bottom">Горечь</div>
            </div>
            <div className="tiny-padding"></div>
          </>
        )}
        {beer.ebc && (
          <>
            <div>
              <span className="badge none primary ">{beer.ebc}</span>
              <div className="tooltip bottom">
                Цвет (чем больше, тем темнее)
              </div>
            </div>
            <div className="tiny-padding"></div>
          </>
        )}
      </div>
    </article>
  );
};
