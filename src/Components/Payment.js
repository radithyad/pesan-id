import "../App.css";
import axios from 'axios';
import { useEffect, useState } from "react";
import Header from "../Components/Header";
import BannerName from "../Components/BannerName";
import MenuCard from "../Components/MenuCard";
import { Languange, MenuReservasi, MenuItems, Items } from "../Components/Data";
import ItemCard from "../Components/ItemCard";
import SubMenuContainer from "../Components/SubMenuContainer";
import CartItem from "../Components/CartItem";
import { useStateValue } from "../Components/StateProvider";

function Payment() {
  const [menus,setMenus] = useState([]);
  const [menusCategory, setMenusCategory] = useState([]);

  useEffect(() => {
    getMenus();
  }, []);

  const getMenusCategory = async () => {
    const response = await axios.get('http://localhost:3000/menucategory')
    setMenusCategory(response.data);
  }

  const getMenus = async () => {
    const response = await axios.get('http://localhost:3000/menu')
    setMenus(response.data);
  }

  const setDataMenus = (category) => {
    setMainDataMenus(menus.filter((element) => element.category == category));
  };

  const [isMainDataMenus, setMainDataMenus] = useState(
    menus.filter((element) => element.category == "food")
  );

  const [isMainData, setMainData] = useState(
    Items.filter((element) => element.itemId == "")
  );

  const [{ cart, total }, dispatch] = useStateValue();
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const menuLi = document.querySelectorAll("#menu li");

    function setMenuActive() {
      menuLi.forEach((n) => n.classList.remove("active"));
      this.classList.add("active");
    }

    menuLi.forEach((n) => n.addEventListener("click", setMenuActive));

    // menu Card active class changer
    const menuCard = document
      .querySelector(".rowContainer")
      .querySelectorAll(".rowMenuCard");

    function setMenuCardActive() {
      menuCard.forEach((n) => n.classList.remove("active"));
      this.classList.add("active");
    }

    menuCard.forEach((n) => n.addEventListener("click", setMenuCardActive));
  }, [isMainData, cart, total, totalPrice]);

  const setData = (itemId) => {
    setMainData(Items.filter((element) => element.itemId == itemId));
  };

  return (
    <div className="App">
      <Header />
      <main>
        <div className="mainContainer">

          <div className="dishContainer">
            

            <div className="rowContainer">
              
            </div>
          </div>
        </div>
        <div className="rightMenu">
          {!cart ? (
            <div className="addSomeItem">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2FemptyCart.png?alt=media&token=50b733d4-cdd9-4025-bffe-8efa4066ca24"
                alt=""
                className="emptyCart"
              />
            </div>
          ) : (
            <div className="cartCheckOutContianer">
              <div className="cartContainer">
                <SubMenuContainer />

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
              <div className="totalSection">
                <h3>Total</h3>
                <p>
                  <span>Rp. </span> {total}
                </p>
              </div>
              <button className="checkOut">Go to Payment</button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default Payment;
