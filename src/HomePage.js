import "./App.scss";
import Table from "./Table.js";
import Header from "./Header.js";
import Coin from "./Coin.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useContext } from "react";
import { CoinContext } from "./CoinContext.js";

function HomePage() {
  const [coinList, setCoinList] = useContext(CoinContext);

  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path="/">
            <Table />
          </Route>
          {coinList.map((item) => (
            <Route path={`${"/"}${item.symbol}`}>
              <Coin name={item.name} id={item.id} />{" "}
            </Route>
          ))}
        </Switch>
      </div>
    </Router>
  );
}

export default HomePage;
