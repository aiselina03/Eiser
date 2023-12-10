import React, { useContext } from "react";
import { WishlistContext } from "../../context/wishlistContext";
import "./style.scss"
import { BasketContext } from "../../context/basketContext";
import Navbar from "../../components/Navbar";

function Wishlist() {
  const { wishlist, addRemoveWishlist } = useContext(WishlistContext);
  const { addBasket } = useContext(BasketContext);
  return (
    <>
    <Navbar/>
    {wishlist.length ? (
      <div className="container">
        {wishlist.map((x) => (
          <div className="cardwishlist" key={x.id}>
            <img src={x.image} alt={x.name} />
            <i class="fa-regular fa-heart" onClick={()=>addRemoveWishlist(x)}></i>
            <p>{x.name}</p>
            <p>{x.category}</p>
            <p className="price"> <span>$</span>  {x.price}  </p>
            <button className="addBtn" onClick={()=>addBasket(x)}>add basket</button>
          </div>
        ))}
      </div>
       ) : (
       <div className="fade">
        <i class="fa-regular fa-heart fa-beat-fade"></i>
       </div> 
        )}
    </>
  )
}
export default Wishlist;
