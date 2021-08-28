import React, { useState } from "react";
import "./SearchBar.css";
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";

function SearchBar({ placeholder, data, getStock }) {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
      return value.name.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };

  return (
    <div className="search">
      <div className="searchInputs">
        <div className="searchIcon">

          <SearchIcon />

        </div>
        <input
          type="text"
          placeholder={placeholder}
          value={wordEntered}
          onChange={handleFilter}
        />
        <div className="searchIcon">
          <CloseIcon id="clearBtn" onClick={clearInput} />
        </div>
      </div>
      {filteredData.length != 0 && (
        <div className="dataresultcontainer">
          <div className="dataResult">
            {filteredData.slice(0, 15).map((value, key) => {
              return (
                <div className="dataItem" onClick={() => {
                  setFilteredData([]);
                  getStock(value)
                }}>
                  <p>{value.name} </p>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default SearchBar;