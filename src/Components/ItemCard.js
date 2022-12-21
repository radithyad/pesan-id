import { AddRounded, Favorite, StarRounded } from "@mui/icons-material";
import React, { useState } from "react";
import { actionType } from "./reducer";
import { useStateValue } from "./StateProvider";
import { Items } from "./Data";
import { useEffect } from "react";
import axios from "axios";
let cartData = [];

function ItemCard({ itemId, imgSrc, name, price, ratings }) {

  const [menus,setMenus] = useState([]);

  useEffect(() => {
    getMenus();
  }, []);

  const getMenus = async () => {
    const response = await axios.get('http://localhost:3000/menu')
    setMenus(response.data);
  }

  const [menusData, setMenusData] = useState (
    menus.filter((element) => element.category == "")
  );

  const setDataMenus = (category) => {
    setMenusData(menus.filter((element) => element.category == category));
  };

  const [currentValue, setCurrentValue] = useState(Math.floor(ratings));
  const [isFavourite, setFavourite] = useState(false);
  const [{cart, total}, dispatch] = useStateValue();
  const [isCart, setCart] = useState(null);
  const [menuCart, setMenuCart] = useState(null);

  // useEffect(() => {
  //   if (isCart) {
  //     cartData.push(isCart);
  //     dispatch({
  //       type: actionType.SET_CART,
  //       cart: cartData,
  //     });
  //   }
  // }, [isCart]);

  useEffect(() => {
    if (menuCart) {
      cartData.push(menuCart);
      dispatch({
        type: actionType.SET_CART,
        cart: cartData,
      });
    }
  }, [menuCart]);

  const handleClick = (value) => {
    setCurrentValue(value);
  };

  return (
    <div className="itemCard" id={itemId}>
      <div
        className={`isFavourite ${isFavourite ? "active" : ""}`}
        onClick={() => setFavourite(!isFavourite)}
      >
        <Favorite />
      </div>

      <div className="imgBox">
        <img src={imgSrc} alt="" className="itemImg" />
      </div>

      <div className="itemContent">
        <h3 className="itemName">{name}</h3>
        <div className="bottom">
          <div className="ratings">
            {Array.apply(null, { length: 5 }).map((e, i) => (
              <i
                key={i}
                className={`rating ${currentValue > i ? "orange" : "gray"}`}
                onClick={() => handleClick(i + 1)}
              >
                <StarRounded />
              </i>
            ))}
            <h3 className="price">
              <span>Rp. </span>
              {price}
            </h3>
          </div>
          <i
            className="addToCart"
            onClick={() => {
              setMenuCart(menus.find((n) => n.id === itemId));
            }}
          >
            <AddRounded />
          </i>
        </div>
      </div>
    </div>
  );
}

export default ItemCard;
