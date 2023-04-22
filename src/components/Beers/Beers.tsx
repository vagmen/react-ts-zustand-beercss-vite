import { useEffect } from "react";
import { useStore } from "../../store";
import { BeerCard } from "../BeerCard/BeerCard";

export const Beers = () => {
  const { beers, getBeers, loading, error, page } = useStore();

  useEffect(() => {
    getBeers({ page });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="grid">
      {beers.map((beer) => (
        <div className="s12 m6 l3" key={beer.id}>
          <BeerCard beer={beer} />
        </div>
      ))}
    </div>
  );
};
