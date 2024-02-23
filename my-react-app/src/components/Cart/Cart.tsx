import React from 'react'
import './Cart.css'

interface CartProps {
    totQuantity: number;
    price: number;
}

const Cart = ({totQuantity, price}: CartProps) => {
  return (

    <div>
        <div className="d-flex align-items-center">
            <div
              className={totQuantity === 0 ? "hidden" : ""}
            >{`${price.toFixed(2)} €`}</div>
            <div className="cart-container">
              <img className="cart" src="cart.svg" alt="cart" />
              <div
                className={`cart-container_tot ${
                  totQuantity === 0 ? "hidden" : ""
                }`}
              >
                {totQuantity === 0 ? "" : totQuantity}
              </div>
            </div>
          </div>
      
    </div>
  )
}

export default Cart

