import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useStore } from "./store";

function App() {
  const { count, increment, decrement } = useStore();

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={decrement}>Меньше</button>
        <p>count is {count}</p>
        <button onClick={increment}>Больше</button>
      </div>
    </>
  );
}

export default App;
