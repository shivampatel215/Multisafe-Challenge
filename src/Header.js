import React from "react";
import "./Header.scss";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import { CoinContext } from "./CoinContext";
import { useContext } from "react";

function Header() {
  const [coinList, setCoinList] = useContext(CoinContext);

  const handleOnSelect = (item) => {
    window.location.href = `${"/"}${item.symbol}`;
    console.log(item);
  };

  return (
    <div>
      <div className="header">
        <div className="main-header">
          <div className="navbar-left">
            <div>
              <a href="/">
                <img
                  className="logo"
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI5NCIgaGVpZ2h0PSI4NSIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDk0IDg1Ij4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNjbGlwMCkiPgogICAgICAgIDxwYXRoIGZpbGw9IiMxNDUyRjUiIGQ9Ik0yMi4xNjQgNTEuMzQyVjYuMDFMNTAuMiA1MS4zNEgyMi4xNjR6TTcwLjE1IDUxLjI0M1Y1LjU1OEw0Ni45MTUgMzguNDk0bDcuNTU1IDEyLjc1aDE1LjY4eiIvPgogICAgPC9nPgogICAgPHBhdGggZmlsbD0iIzQ5NDk0OSIgZD0iTTEuNzQ1IDc3LjIwNGgxLjk5NHYtMTIuMDloLjA0Mmw0Ljk2NSAxMi4wOWgxLjMzbDQuOTY0LTEyLjA5aC4wNDJ2MTIuMDloMS45OTRWNjIuNDk3aC0yLjk3TDkuNDcyIDczLjYzSDkuMzlMNC43MTYgNjIuNDk3SDEuNzQ1djE0LjcwN3ptMjcuODQyLTkuODQ2aC0xLjg3djUuMDY5YzAgMi4yODUtMS4xODQgMy4yODItMi43NDIgMy4yODItMS4xODQgMC0yLjI0NC0uNjg2LTIuMjQ0LTIuNTM1di01LjgxNmgtMS44N3Y2LjMzNmMwIDIuNjE3IDEuNjYzIDMuNzYgMy41NzQgMy43NiAxLjUxNiAwIDIuNzYzLS43MjcgMy4yNC0xLjc2NmguMDQydjEuNTE2aDEuODd2LTkuODQ2em0zLjU4NiA5Ljg0NmgxLjg3VjYxLjVoLTEuODd2MTUuNzA0em0xMC43NjUtOS44NDZoLTIuNjh2LTIuNzYzSDM5LjM5djIuNzYzaC0yLjE2djEuNjJoMi4xNnY1LjEzMWMwIDEuNTc5LjA0MiAzLjM0NSAyLjkzIDMuMzQ1LjM3MyAwIDEuMjQ2LS4wODMgMS42ODItLjMzM3YtMS43MDNjLS4zNzQuMjI4LS44OTMuMjktMS4zMy4yOS0xLjQxMiAwLTEuNDEyLTEuMTYzLTEuNDEyLTIuMjY0di00LjQ2NmgyLjY4di0xLjYyem0zLjIwMiA5Ljg0NmgxLjg3di05Ljg0NmgtMS44N3Y5Ljg0NnptLS40MzctMTMuMzc4YzAgLjc0OC42MjMgMS4zNzEgMS4zNzEgMS4zNzFzMS4zNzEtLjYyMyAxLjM3MS0xLjM3YzAtLjc0OS0uNjIzLTEuMzcyLTEuMzctMS4zNzItLjc0OCAwLTEuMzcyLjYyMy0xLjM3MiAxLjM3MXptNS4xNzggMTEuNzE3Yy45OTcgMS4zOTEgMi44MDQgMi4wMzUgNC42OTUgMi4wMzUgMi44MjUgMCA1LjExLTEuNzAzIDUuMTEtNC41NSAwLTUuMjk2LTcuMjUtMy4wNzQtNy4yNS02Ljc5MiAwLS45MTQuNjY1LTIuMjQ0IDIuODY3LTIuMjQ0IDEuMTQyIDAgMi4xMTkuNTIgMi42MTcgMS4yODhsMS42Mi0xLjQ3NGMtMS4xLTEuMzUtMi42MzgtMS42ODMtNC4yMzctMS42ODMtMy41MzIgMC00Ljk4NiAyLjM4OS00Ljk4NiA0LjExMyAwIDUuNzMzIDcuMjUgMy42MzUgNy4yNSA3LjAyMSAwIDEuNjItMS42MiAyLjQ1Mi0yLjkzIDIuNDUyLTEuMTgzIDAtMi40MDktLjQ5OS0zLjExNS0xLjU4bC0xLjY0MSAxLjQxM3ptMTQuMDU2LTUuODE3Yy42ODYtLjUyIDEuMzcxLTEuMTIyIDIuODA1LTEuMTIyIDEuNiAwIDIuMzQ3IDEuMDYgMi4zNDcgMi4wNzh2LjQxNWgtMS4zN2MtMi45OTIgMC01LjQyMy44NzMtNS40MjMgMy40MDcgMCAxLjkxMSAxLjU4IDIuOTUgMy40MDcgMi45NSAxLjQ5NiAwIDIuNjE4LS40NzggMy40NDktMS43NDVoLjA0MWMwIC40OTguMDIuOTk3LjA2MyAxLjQ5NWgxLjY2MWMtLjA2Mi0uNTE5LS4wODMtMS4xLS4wODMtMS43ODZWNzAuMzljMC0xLjcwNC0xLjIwNS0zLjI4Mi00LjExMy0zLjI4Mi0xLjM3IDAtMi44NjcuNDc3LTMuOTA1IDEuNDU0bDEuMTIxIDEuMTYzem01LjE1MiAyLjc0MnYuNjIzYzAgMS4zMy0uNzI3IDIuODY3LTIuODA0IDIuODY3LTEuMjg4IDAtMi4xMTktLjQ3OC0yLjExOS0xLjYgMC0xLjU3OCAyLjE2LTEuODkgMy45MjYtMS44OWguOTk3em01LjgwOCA0LjczNmgxLjg3di04LjIyNmgyLjI0M3YtMS42MmgtMi4yMjN2LTIuMjY0YzAtMS4zNzIuMjI4LTIuMjIzIDEuNi0yLjIyMy4zNzMgMCAuNzA2LjA0MSAxLjA1OS4xODdsLjIwOC0xLjY2MmMtLjUyLS4xMjUtLjk3Ny0uMTQ2LTEuMzkyLS4xNDYtMi40NTEgMC0zLjM2NSAxLjI4OC0zLjM2NSAzLjkwNnYyLjIwMmgtMi4xMnYxLjYyaDIuMTJ2OC4yMjZ6bTE2LjEyLTQuMjM3di0uNjY1YzAtMi41MzUtMS4zMy01LjE5NC00Ljc5OS01LjE5NC0yLjk1IDAtNS4wOSAyLjIyMy01LjA5IDUuMTczIDAgMi45MyAxLjk1NCA1LjE3MyA1LjA3IDUuMTczIDEuODkgMCAzLjMyMy0uNjY1IDQuMzYyLTIuMDE1bC0xLjQxMy0xLjA4Yy0uNzI3Ljg5My0xLjU1OCAxLjQ3NC0yLjcgMS40NzQtMS43MjQgMC0zLjMyNC0xLjE0Mi0zLjMyNC0yLjg2Nmg3Ljg5NHptLTcuODk0LTEuNDk2YzAtMS4zMDkgMS4yMDUtMi44NjcgMy4wNTQtMi44NjcgMS44OSAwIDIuODA0IDEuMjI2IDIuODQ2IDIuODY3aC01Ljl6Ii8+CiAgICA8ZGVmcz4KICAgICAgICA8Y2xpcFBhdGggaWQ9ImNsaXAwIj4KICAgICAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTAgMEg1MS45MzRWNTEuOTM0SDB6IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyMC43NzQpIi8+CiAgICAgICAgPC9jbGlwUGF0aD4KICAgIDwvZGVmcz4KPC9zdmc+Cg=="
                  alt="multisafe"
                ></img>
              </a>
            </div>
            <ul className="links">
              <li>Cryptocurrencies</li>
              <li>Exchanges</li>
              <li>Defi</li>
              <li>NFT</li>
              <li>Portfolio</li>
              <li>Watchlist</li>
              <li>Community</li>
            </ul>
          </div>
          <div className="navbar-right">
            <ReactSearchAutocomplete
              items={coinList}
              onSelect={handleOnSelect}
              showIcon={false}
              autoFocus={true}
              placeholder="Search"
              styling={{
                position: "auto",
                height: "50px",
                borderRadius: "4px",
                border: "0px",
                boxShadow: "none",
                hoverBackgroundColor: "#e8e8e3",
                hoverCursor: "cursor",
                color: "#58667e",
                fontSize: "12px",
                fontFamily: "Roboto",
                fontWeight: "700",
                iconColor: "rgb(166, 176, 195)",
                lineColor: "gray",
                clearIconMargin: "3px 8px 0 0",
                placeholderColor: "black",
                zIndex: 2,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
