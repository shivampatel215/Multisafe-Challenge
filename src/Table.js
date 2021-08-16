import React from "react";
import { useContext } from "react";
import "./Table.scss";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CoinContext } from "./CoinContext.js";

function Table() {
  const [coinList, setCoinList] = useContext(CoinContext);
  const [sortedDirectionObj, setSortedDirectionObj] = useState({});

  const keys = [
    ["#", "", "market_cap"],
    ["Coin", "coin-name-header", "market_cap"],
    ["Price", "alignright", "current_price"],
    ["24h %", "alignright", "price_change_percentage_24h"],
    ["Market Cap", "alignright", "market_cap"],
    ["Total Volume", "alignright", "total_volume"],
    ["Circulating Supply", "alignright", "circulating_supply"],
  ];

  const sortColumn = (key) => {
    const currentSortDirection = sortedDirectionObj[key];
    if (currentSortDirection && currentSortDirection === "ASC") {
      coinList.sort(function (a, b) {
        return a[key] < b[key] ? 1 : -1;
      });
      const currentlySortedObject = {};
      currentlySortedObject[key] = "DESC";
      setSortedDirectionObj(currentlySortedObject);
    } else {
      coinList.sort(function (a, b) {
        return a[key] > b[key] ? 1 : -1;
      });
      const currentlySortedObject = {};
      currentlySortedObject[key] = "ASC";
      setSortedDirectionObj(currentlySortedObject);
    }
    setCoinList([...coinList]);
  };
  return (
    <div>
      <div>
        <table className="table">
          <thead>
            <tr>
              {keys.map((key, index) => {
                return (
                  <th onClick={() => sortColumn(key[2])} className={key[1]}>
                    {" "}
                    {key[0]}{" "}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {coinList.map((item) => (
              <tr>
                <td>{item.market_cap_rank}</td>
                <td>
                  <div className="coin-info">
                    <div className="coin-icon center">
                      <img alt={item.name} src={item.image}></img>
                    </div>
                    <div className="center">
                      <Link to={`${"/"}${item.symbol}`}>
                        <div className="name">{item.name}</div>
                      </Link>

                      <span className="ticker">
                        {item.symbol.toUpperCase()}
                      </span>
                    </div>
                  </div>
                </td>
                <td className="alignright">
                  ${item.current_price.toLocaleString()}
                </td>
                <td
                  className={
                    item.price_change_percentage_24h >= 0
                      ? "alignright green"
                      : "alignright red"
                  }
                >
                  {" "}
                  {item.price_change_percentage_24h.toLocaleString()}%
                </td>
                <td className="alignright">
                  ${item.market_cap.toLocaleString()}
                </td>
                <td className="alignright">
                  ${item.total_volume.toLocaleString()}
                </td>
                <td className="alignright">
                  {item.circulating_supply.toLocaleString()}{" "}
                  {item.symbol.toUpperCase()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Table;
