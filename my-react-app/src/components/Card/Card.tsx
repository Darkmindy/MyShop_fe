import React, { useEffect, useState } from "react";
import "./Card.css";
import { Product } from "./Product";

interface CardProps {
  item: Product;
  index: number;
  setProducts: Function;
}
const Card = ({ item, index, setProducts}: CardProps) => {
  const [quantity, setQuantity] = useState<number>(0);

useEffect(() => {
    setProducts((prev: Product[]) => {
      const updateProduct = [...prev];
      updateProduct[index] = {...updateProduct[index], quantity: quantity};
      return updateProduct;
    });
  }, [index, quantity, setProducts]) 

  const changeQuantity = (quantity: number) => {
    setQuantity(prev => Math.max(0, prev + quantity));
  }

  return (
    <div className="card col-4" style={{ width: "18rem" }}>
      <img src={item.image} className="card-img-top" alt={"card"} />
      <div className="card-body">
        <h5 className="card-title truncate">{item.title}</h5>
        <p className="card-text truncate">{item.description}</p>
        <div className="prod-quantity d-flex justify-content-center my-2">
          <button className="btn btn-danger" onClick={() => changeQuantity(-1)}>-</button>
          <div className="mx-2">{quantity}</div>
          <button className="btn btn-primary" onClick={() => changeQuantity(+1)}>+</button>
        </div>
        <p className="price">{`${item.price} €`}</p>
      </div>
    </div>
  );
};

export default Card;
