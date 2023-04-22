import { useEffect } from "react";
import { useStore } from "../../store";

export const Header = () => {
  const { beerName, reset, setName } = useStore();

  useEffect(() => {
    reset();
  }, [beerName]);

  const handleNameChange = (name: string) => setName(name);

  return (
    <nav className="padding">
      <i className="extra primary-text">sports_bar</i>
      <h1>Test project</h1>
      <div className="max"></div>
      <div className="field label prefix round border">
        <i>search</i>
        <input
          type="text"
          onChange={(event) => handleNameChange(event.target.value)}
        />
        <label>Поиск по названию</label>
      </div>
      <button className="transparent circle large">
        <i>filter_list</i>
      </button>
    </nav>
  );
};
