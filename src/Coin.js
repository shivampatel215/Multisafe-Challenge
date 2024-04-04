import React from "react";
import Header from "./Header.js";
import { useEffect, useState } from "react";
import Chart from "./Chart.js";

import cointitlestyle from "./Coin.scss";

function Coin(props) {
  const name = props.name;
  const id = props.id;
  const [priceData, setPriceData] = useState([]);
  console.log(cointitlestyle);
  useEffect(() => {
    fetch(
      `${"https://api.coingecko.com/api/v3/coins/"}${id.toLowerCase()}${"/market_chart?vs_currency=usd&days=30"}`
    )
      .then((response) => response.json())
      .then((data) => {
        data.prices.map((item) => {
          let num = item[1].toFixed(2).toString();
          item[1] = num;
          return item;
        });
        setPriceData(data);
      });
  }, []);

  return (
    <div className="chart-page">
      <div className="coin-title">{name}</div>

      {priceData?.prices?.length > 0 ? <Chart priceData={priceData} /> : null}
    </div>
  );
}

export default Coin;
