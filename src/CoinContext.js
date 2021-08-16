import React from 'react';
import {useState, useEffect, createContext} from 'react';

export const CoinContext = createContext();
export const CoinProvider = (props) => {
    const [coinList, setCoinList] = useState([]);
    useEffect(() => {
        fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false")
        .then(response => response.json())
        .then(data => setCoinList(data)) 
    }, []);

    return (
        <CoinContext.Provider value={[coinList, setCoinList]}>
            {props.children}
        </CoinContext.Provider>

    );

}