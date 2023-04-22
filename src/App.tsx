import "./App.css";
import { Beers } from "./components/Beers/Beers";
import { EndlessScrollContainer } from "./components/EndlessScrollContainer/EndlessScrollContainer";

function App() {
  return (
    <div className="container">
      <h1>Test project</h1>
      {/* <a className="chip border round small">React</a>
      <a className="chip border round small">Typescript</a>
      <a className="chip border round small">Zustand</a>
      <a className="chip border round small">Beercss</a>
      <a className="chip border round small">Vite</a>
      <h2>By Vagiz Akhmetov</h2> */}
      <EndlessScrollContainer>
        <Beers />
      </EndlessScrollContainer>
    </div>
  );
}

export default App;
