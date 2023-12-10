import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar";
import "./style.scss";
import { BasketContext } from "../../context/basketContext";

function Detail() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true)
  let { id } = useParams();
  const { addBasket } = useContext(BasketContext);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/" + id)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data)
        setIsLoading(false)});
  }, [id]);

  return (
    <>
      <Navbar />
      {isLoading ? (<div className="spin"><i class="fa-solid fa-spinner fa-spin"></i></div>) :(
      <div className="detail">
        <div className="detailcontainer">
          <div className="card">
            <div className="img">
              <img src={products.image} alt="" />
            </div>
            <div className="info">
              <h4>{products.title}</h4>
              <p>
                <span>Rate:</span> {products.rating?.rate}
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
              </p>
              <p>
                <span>Category:</span> {products.category}
              </p>
              <p>
                <span>Description:</span> {products.description}
              </p>
              <p className="price">
                <span>Price:</span> ${products.price}
              </p>
              <button className="addBtn" onClick={()=>addBasket(products)}>add basket</button>
            </div>
          </div>
        </div>
      </div>
        ) }
    </>
  );
}

export default Detail;
