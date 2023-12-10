import React, { useContext } from "react";
import { BasketContext } from "../../context/basketContext";
import "./style.scss";
import Navbar from "../../components/Navbar";

function Basket() {
  const { basket, increaseCount, decreaseCount, removeItem } = useContext(BasketContext);
  return (
    <>
      <Navbar/>
      {basket.length ? (
        <div className="container">
          {basket.map((x) => (
            <div className="card" key={x.id}>
              <img src={x.image} alt="" />
              <div className="infos">
                <div className="info">
                  <div className="name">{x.name}</div>
                  <p>{x.category}</p>
                  <div className="price">${x.price * x.count}</div>
                </div>
                <div className="buttons">
                  <button onClick={() => {increaseCount(x)}}> + </button>
                  <div className="count">{x.count}</div>
                  <button onClick={() => {decreaseCount(x)}}> - </button>
                <i class="fa-regular  fa-trash" onClick={() => removeItem(x)}></i>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="bounce">
          <i class="fa-regular fa-cart-shopping fa-bounce"></i>
        </div>
      )}
    </>
  )
}
export default Basket;
