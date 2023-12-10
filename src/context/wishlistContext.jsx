import React, { createContext } from "react";
import useLocalStorage from "../hook/useLocalStorage";

export const WishlistContext = createContext();

function WishlistProvider({ children }) {
  const [wishlist, setWishlist] = useLocalStorage("wishlist", []);

  function addRemoveWishlist(item) {
    let itemIndex = wishlist.findIndex((x) => x.id === item.id);
    if (itemIndex !== -1) {
      setWishlist(wishlist.filter((x) => x.id !== item.id));
    } else {
      setWishlist([...wishlist, {...item }]);
    }
  }
  
  function checkIsWishlist(item) {
    let itemIndex = wishlist.findIndex((x) => x.id === item.id);
    if (itemIndex !== -1) {
      return true;
    }
    return false;
  }

  const data = {
    wishlist,
    addRemoveWishlist,
    checkIsWishlist,
  };

  return (
    <WishlistContext.Provider value={data}>{children}</WishlistContext.Provider>
  );
}

export default WishlistProvider;
