import React, { createContext, useState } from "react";

export const SearchContext = createContext();

function SearchProvider({ children }) {
  const [searchInp, setSearchInp] = useState("");

  function handleInput(e) {
    setSearchInp(e.target.value);
  }
  const data = {
    searchInp,
    handleInput,
  };

  return (
    <SearchContext.Provider value={data}>{children}</SearchContext.Provider>
  );
}

export default SearchProvider;
