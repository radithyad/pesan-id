import React from "react";
import Header from "../Components/Header";
import CartItem from "../Components/CartItem";
import { useStateValue } from "../Components/StateProvider";

function Paymentt () {
    const [{ cart, total }, dispatch] = useStateValue();

    return (
        <div className="rowContainerPayment">
            <div className="payment">
            <div className="cartContainer">
                Your Order
                <div className="cartItems">
                {cart &&
                    cart.map((data) => (
                      <CartItem
                        key={data.id}
                        itemId={data.id}
                        name={data.name}
                        imgSrc={data.imgSrc}
                        qty={"4"}
                        price={data.price}
                      />
                    ))}
                </div>
              </div>
            </div>
        </div>
    )
    
}

export default Paymentt;