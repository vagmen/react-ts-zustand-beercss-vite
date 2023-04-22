import { useStore } from "../../store";
import { BeerCard } from "../BeerCard/BeerCard";
import { Empty } from "../Empty/Empty";
import { Grid } from "../Grid/Grid";
import { Loader } from "../Loader/Loader";

export const Beers = () => {
  const { beers, allElementsReceived } = useStore();

  return (
    <>
      <Grid items={beers} buildGridItem={(beer) => <BeerCard beer={beer} />} />
      {!allElementsReceived && <Loader />}
      {allElementsReceived && beers.length === 0 && <Empty />}
    </>
  );
};
