import React, { useEffect, useState } from "react";
import { Product } from "./Product";
import "./App.css";
import Card from "./components/Card/Card";
import Navbar from "./components/Navbar/Navbar";
import Carousel from "./components/Carousel/Carousel";

function App() {

  const [products, setProducts] = useState<Product[]>([]);
  const [totQuantity, setTotQuantity] = useState<number>(0);
  const [totPrice, setTotPrice] = useState<number>(0);


  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://fakestoreapi.com/products"
      );
      const data = await response.json();
      setProducts([...data].map(product => ({...product, quantity: 0})));
    }

    fetchData();
  },[]);

  useEffect(() => {
    setTotQuantity(products.reduce((acc, product) => acc + product.quantity, 0));
    setTotPrice(products.reduce((acc, product) => acc + product.price * product.quantity, 0));
  },[products])


  return (
    <div className="container-fluid">
      <Navbar totQuantity={totQuantity} price={totPrice}/>
      <Carousel />
      <div className="row">
        {
        products.map((product, index) => {
          return (
              <Card item={product} index={index} setProducts={setProducts} />
            )
        })
        }
      </div>
    </div>
  );
}

export default App;
