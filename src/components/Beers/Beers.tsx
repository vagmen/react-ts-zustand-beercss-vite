import { useEffect } from "react";
import { useStore } from "../../store";

export const Beers = () => {
  const { beers, getBeers, loading, error } = useStore();

  useEffect(() => {
    getBeers();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      {beers.map((beer) => (
        <p key={beer.id}>{beer.name}</p>
      ))}
    </>
  );
};
