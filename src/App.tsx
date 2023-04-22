import "./App.css";
import { Beers } from "./components/Beers/Beers";
import { EndlessScrollContainer } from "./components/EndlessScrollContainer/EndlessScrollContainer";
import { Header } from "./components/Header/Header";
import { Toast } from "./components/Toast/Toast";
import { MIN_REQUEST_INTERVAL, SCROLL_DISTANCE_TO_END } from "./constants";
import { useStore } from "./store";

function App() {
  const { beers, error, getBeersIfNeeded } = useStore();

  return (
    <div className="container">
      <Header />
      <EndlessScrollContainer
        onLoadItems={getBeersIfNeeded}
        count={beers.length}
        minRequestInterval={MIN_REQUEST_INTERVAL}
        scrollDistanceToEnd={SCROLL_DISTANCE_TO_END}
      >
        <Beers />
      </EndlessScrollContainer>
      <Toast type="error" message={error} />
    </div>
  );
}

export default App;
