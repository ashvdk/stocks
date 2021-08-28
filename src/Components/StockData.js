import React from 'react'
import "./StockData.css";
import StockDetail from './StockDetail';

function StockData({ selectedStock }) {
  const { market_cap, current_market_price, debt, debt_to_equity, dividend_yield, eps, name, reserves, roce, roe, stock_pore } = selectedStock;
  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}>
      <div className="stockdatacontainer">
        <div className="stockdatacontainerTitle">{name}</div>
        <div className="stockinfoblock" >
          <div style={{ flex: 1 }}>
            <StockDetail title="Market Cap" description={`₹ ${market_cap}`} />
            <StockDetail title="Current Price" description={`₹ ${current_market_price}`} />
            <StockDetail title="Stock P/E" description={`${stock_pore} %`} />
            <StockDetail title="Debt" description={`₹ ${debt}`} />
          </div>
          <div style={{ flex: 1 }}>
            <StockDetail title="Dividend Yield" description={`${dividend_yield} %`} />
            <StockDetail title="ROCE" description={`${roce} %`} />
            <StockDetail title="ROE" description={`${roe} %`} />
          </div>
          <div style={{ flex: 1 }}>
            <StockDetail title="Debt to Equity" description={`${debt_to_equity} %`} />
            <StockDetail title="EPS" description={`₹ ${eps}`} />
            <StockDetail title="Reserves" description={`₹ ${reserves}`} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default StockData
