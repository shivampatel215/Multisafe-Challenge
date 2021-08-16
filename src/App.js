import "./App.scss";
import HomePage from "./HomePage.js";
import { CoinProvider } from "./CoinContext.js";

function App() {
  return (
    <CoinProvider>
      <div className="App">
        <div className="content">
          <HomePage />
        </div>
      </div>
    </CoinProvider>
  );
}

export default App;
