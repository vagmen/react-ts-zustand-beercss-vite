import { useStore } from "../../store";
import { BeerCard } from "../BeerCard/BeerCard";
import { Grid } from "../Grid/Grid";
import styles from "./Beers.module.css";

export const Beers = () => {
  const { beers, allElementsReceived } = useStore();

  return (
    <div>
      <Grid items={beers} buildGridItem={(beer) => <BeerCard beer={beer} />} />
      {!allElementsReceived && (
        <div className={styles.loaderContainer}>
          <a className="loader large"></a>
        </div>
      )}
    </div>
  );
};
