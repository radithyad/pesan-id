import { AddRounded, RemoveRounded } from "@mui/icons-material";
import React, { Fragment, useEffect, useState } from "react";
import { actionType } from "./reducer";
import { useStateValue } from "./StateProvider";
import TotalPembayaran from "./TotalPembayaran";
import axios from "axios";
let cartItems = [];

function CartItem({ itemId, name, imgSrc, price, sendData }) {

  const [qty, setQty] = useState(1);
  const [itemPrice, setItemPrice] = useState(parseInt(qty) * parseFloat(price));
  const [hargaBarang, setHargaBarang] = useState(0)
  const [{ cart }, dispatch] = useStateValue();
  const [conds, setConds] = useState(true);


  useEffect(() => {
    cartItems = cart;
    setHargaBarang(parseInt(qty) * parseFloat(price));
    if (conds) {
      sendData(qty, itemPrice, itemId, "init");
      setConds(false)
    }
  }, [qty]);

  const updateQty = (action, id) => {
    if (action === "add") {
      setQty(qty + 1);
      sendData(qty + 1, itemPrice, itemId, "add");
    } else {
      // initial state value is one so you need to check if 1 then remove it
      if (qty === 1) {
        cartItems.pop(id);
        dispatch({
          type: actionType.SET_CART,
          cart: cartItems,
        });
      } else {
        setQty(qty - 1);
        console.log(qty);
      }
      sendData(qty, itemPrice, itemId, "delete");
    }
  };

  return (
    
    <div className="cartItem" id={itemId}>
      <div className="imgBox">
        <img src={imgSrc} alt="" />
      </div>
      <div className="itemSection">
        <h2 className="itemName">{name}</h2>
        <div className="itemQuantity">
          <span>x {qty}</span>
          <div className="quantity">
            <RemoveRounded
              className="itemRemove"
              onClick={() => updateQty("remove", itemId)}
            />
            <AddRounded
              className="itemAdd"
              onClick={() => updateQty("add", itemId)}
            />
          </div>
        </div>
      </div>
      <p className="itemPrice">
        <span className="dolorSign">Rp.</span>{" "}
        <span className="itemPriceValue">{hargaBarang}</span>
      </p>
      {/* <TotalPembayaran data={cartItems}/> */}
    </div>
  );
}

export default CartItem;
