import { useStore } from "../../store";
import { BeerCard } from "../BeerCard/BeerCard";
import styles from "./Beers.module.css";

export const Beers = () => {
  const { beers, allElementsReceived } = useStore();

  return (
    <div>
      <div className="grid">
        {beers.map((beer) => (
          <div className="s12 m6 l3" key={beer.id}>
            <BeerCard beer={beer} />
          </div>
        ))}
      </div>
      {!allElementsReceived && (
        <div className={styles.loaderContainer}>
          <a className="loader large"></a>
        </div>
      )}
    </div>
  );
};
