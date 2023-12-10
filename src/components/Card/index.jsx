import React, { useContext, useEffect, useState } from "react";
import { BasketContext } from "../../context/basketContext";
import { WishlistContext } from "../../context/wishlistContext";
import { SearchContext } from "../../context/searchContext";
import { Link } from "react-router-dom";
import "./style.scss";

function Card() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true)
  const { addBasket, checkIsBasket } = useContext(BasketContext);
  const { addRemoveWishlist, checkIsWishlist } = useContext(WishlistContext);
  const { searchInp } = useContext(SearchContext);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data)
        setIsLoading(false)
      });
  }, []);

  return (
    <>
    {isLoading ? (<div className="spin"><i class="fa-solid fa-spinner fa-spin"></i></div>) :(
       <div className="cards">
        {products
          .filter((item) =>
            item.title.toLowerCase().includes(searchInp.toLowerCase())
          )
          .map((x) => (
            <div className="card">
              <div className="img">
                <img src={x.image} alt="" />
                <div className="icons">
                  <div className="eye">
                    <Link to={"/home/" + x.id}>
                      <i class="fa-regular fa-eye fa-fw"></i>
                    </Link>
                  </div>
                  <div className="heart">
                    <i
                      class={`fa-regular fa-heart ${
                        checkIsWishlist(x) ? "green" : ""
                      }`}
                      onClick={() => addRemoveWishlist(x)}
                    ></i>
                  </div>
                  <div className="basket">
                    <i
                      class={`fa-regular fa-cart-shopping ${
                        checkIsBasket(x) ? "green" : ""
                      }`}
                      onClick={() => addBasket(x)}
                    ></i>
                  </div>
                </div>
              </div>
              <div className="info">
                <h4>{x.title.slice(0, 20)}</h4>
                <p>{x.category}</p>
                <p className="price">${x.price}</p>
              </div>
            </div>
          ))}
      </div>
    ) }
     
    </>
  );
}

export default Card;
