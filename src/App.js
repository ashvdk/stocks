import logo from './logo.svg';
import './App.css';
import BookData from "./Data.json";
import SearchBar from "./Components/SearchBar";
import Nav from './Components/Nav';
import StockData from './Components/StockData';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [showstockData, setshowstockData] = useState(false);
  const [stockdetails, setstockdetails] = useState([]);
  const [selectedStock, setselectedStock] = useState({});
  useEffect(() => {
    getStockDetails();
  }, [])
  const getStockDetails = async () => {
    const api_key = Buffer.from('Batman&iambatman').toString('base64');
    //console.log(api_key);
    const response = await axios.post('https://shielded-savannah-69827.herokuapp.com/getstockdetails', { "api_key": api_key });
    if (response.status == 200) {
      setstockdetails([...response.data.result]);
    }

  }
  const getStock = val => {
    setselectedStock({ ...selectedStock, ...val })
    configureStockDataBlock();
  }
  console.log(selectedStock);
  const configureStockDataBlock = () => {
    setshowstockData(true);
  }
  return (
    <div className="App">
      <Nav />
      <div className="search_container">
        <div className="title">The easiest way to buy and sell stocks</div>
        <div className="sub_title">Stock analysis and screening tool for investors in india</div>
        <SearchBar placeholder="" data={stockdetails} getStock={getStock} />
      </div>
      {showstockData ? <StockData selectedStock={selectedStock} /> : ""}
    </div>
  );
}

export default App;
