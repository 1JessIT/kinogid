import React, { useState } from "react";

import { InputAdornment } from "@mui/material";
import { Search } from "@mui/icons-material";
import { SearchBar } from "./styles";
import API, { MyAPI_KEY } from "../../../requester";

const SearchForm = () => {
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const handleSearch = async () => {
    try {
      const response = await API.get("/api/v2.1/films/search-by-keyword", {
        params: {
          keyword: searchText,
        },
        headers: {
          "X-API-KEY": { MyAPI_KEY },
        },
      });

      setSearchResults(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <SearchBar
        variant="standart"
        disableUnderline={true}
        startAdornment={
          <InputAdornment>
            <Search />
          </InputAdornment>
        }
        placeholder="Найти фильм..."
        sx={{ marginLeft: "80px" }}
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            handleSearch();
          }
        }}
      />
      {searchResults.map((film) =>
        console.log(film)(
          <div key={film.id}>
            <h3>{film.name}</h3>
            <p>{film.description}</p>
          </div>
        )
      )}
    </div>
  );
};

export default SearchForm;
