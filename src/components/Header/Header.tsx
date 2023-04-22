import { useEffect } from "react";
import { useStore } from "../../store";
import styles from "./Header.module.css";

export const Header = () => {
  const { beerName, reset, setName } = useStore();

  useEffect(() => {
    reset();
  }, [beerName]);

  const handleNameChange = (name: string) => setName(name);

  const clearName = () => setName("");

  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <i className="extra primary-text">sports_bar</i>
        <h1>AppName</h1>
      </div>
      <div className="field label prefix suffix round border">
        <i>search</i>
        <input
          type="text"
          value={beerName}
          onChange={(event) => handleNameChange(event.target.value)}
        />
        <label>Поиск по названию</label>
        {beerName && (
          <button
            className="transparent circle absolute right top large"
            onClick={clearName}
          >
            <i>clear</i>
          </button>
        )}
      </div>
    </div>
  );
};
