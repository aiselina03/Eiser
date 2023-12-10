import React from "react";
import WishlistProvider from "./wishlistContext";
import BasketProvider from "./basketContext";
import SearchProvider from "./searchContext";

function MainProvider({ children }) {
  return (
    <WishlistProvider>
      <BasketProvider>
        <SearchProvider>{children}</SearchProvider>
      </BasketProvider>
    </WishlistProvider>
  );
}

export default MainProvider;
