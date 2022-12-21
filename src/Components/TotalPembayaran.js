import React, { useEffect, useState } from "react";
import { useStateValue } from "../Components/StateProvider";
import { actionType } from "../Components/reducer";
import CartItem from "./CartItem";

const TotalPembayaran = (props) => {
  // console.log('total');
  // console.log(props.data)

// const TotalPembayaran = () => {
//   const [{ cartItems }, dispatch] = useStateValue();
//   const [total, setTotal] = useState(0);

  // useEffect(() => {
  //   let totalPrice = cartItems.reduce(function (item) {
  //     console.log({item});
  //     return item.qty * item.price;
  //   }, 0);
  //   setTotal(totalPrice);
  //   console.log(total);
  // }, [total]);

  // useEffect(() => {
  //   console.log(cart);
  //   cartItems = cart;
  //   console.log(cartItems);
  //   console.log(cart);
  //   setItemPrice(parseInt(qty) * parseFloat(price));
  // }, [qty]);

  // useEffect(() => {
  //   console.log(cartItems);
  // }, [total])

  return (
    <div className="totalSection">
      <h3>Total</h3>
      <p>
        <span>Rp. </span> 
      </p>
    </div>
  );
};

export default TotalPembayaran;
