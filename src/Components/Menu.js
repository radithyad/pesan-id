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
import TotalBayar from '../Components/TotalBayar';
import TotalPembayaran from '../Components/TotalPembayaran';

function Menu() {
  const [menus,setMenus] = useState([]);
  const [menusCategory, setMenusCategory] = useState([]);

  useEffect(() => {
    getMenus();
  }, []);

  useEffect(() => {
    getMenusCategory();
  }, []);

  useEffect(() => {
    dataQty()
  }, []);

  const getMenusCategory = async () => {
    const response = await axios.get('http://localhost:3000/category')
    setMenusCategory(response.data);
  }

  const getMenus = async () => {
    const response = await axios.get('http://localhost:3000/menu')
    setMenus(response.data);
  }

  const submitPayment = () => {
    // const payload = [
    //     {orderId: 2, menuId: 4, qty: 1},
    //     {orderId: 2, menuId: 4, qty: 5}
    //   ]
    const payload = totalCart.slice(1, totalCart.length);
    axios.post('http://localhost:3000/orderItem', payload)
    .then(response => {
        console.log(response.data);
        alert("Payment Submitted.");
    })
    .catch(err => {
        console.log(err);
    })
  }

  const [menusData, setMenusData] = useState (
    menus.filter((element) => element.category == "")
  );

  const [isMainData, setMainData] = useState(
    Items.filter((element) => element.itemId == "")
  );

  const setData = (itemId) => {
    setMainData(Items.filter((element) => element.itemId == itemId));
  };

  const setDataMenus = (category) => {
    setMenusData(menus.filter((element) => element.category == category));
  };

  const [{ cart, total }, dispatch] = useStateValue();
  const [Qty, setQty] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [idM, setIdM] = useState(0);
  const [totalCart, setTotalCart] = useState([]);
  const [tmpCart, setTmpCart] = useState({
    orderId: 0,
    menuId: 0,
    qty: 0
  });

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
  }, [isMainData, cart, total, totalPrice, menusData]);

  useEffect(() => {
    console.log(tmpCart);
    console.log(totalCart);
    // setIsiCart()
  },[tmpCart]);

   const setIsiCart = (keranjang, id) => {
     if(keranjang.menuId !== 0 && keranjang.menuId !== id) {
       setTotalCart([...totalCart, keranjang]);
     }
   }

  let Total = 0;
  const dataQty = (qty, itemPrice, id, operand) => {
    console.log('cari barang  ',totalCart.findIndex((x => x.menuId === id)))
    setTmpCart({
        orderId: 2,
        menuId: id,
        qty: qty
    })
    setIdM(id)
    console.log('jumlah barang', qty);
    console.log('harga barang', itemPrice);
    console.log('id menu', id);
    console.log('total harga', parseFloat(qty * itemPrice))
    console.log("Total awal", Total);
    let Price = parseFloat(itemPrice);
    if(operand === "delete" ) Price = Price * -1;
    Total = Total + Price;
    console.log('price', Price);
    console.log('operand', operand);
    console.log("Total akhir", Total);
    setIsiCart(tmpCart, id);
  }

  // const setData = (itemId) => {
  //   setMainData(Items.filter((element) => element.itemId == itemId));
  // };

  return (
    <div className="App">
      <Header />
      <main>
        <div className="mainContainer">
          <div className="banner">
            <BannerName name={"Jeremy"} discount={"150.000"} more={"#"} />
            <img
              src="https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fdelivery.png?alt=media&token=69b9823d-96df-452a-bd4e-14d27a4cc337"
              alt=""
              className="deliveryPic"
            />
          </div>

          <div className="dishContainer">
            <div className="menuCard">
              Menu Category
            </div>

            <div className="rowContainer">
                {menusCategory &&
                  menusCategory.map((data) => (
                  <div key={data.id} onClick={() => setDataMenus(data.category)}>
                    <MenuCard
                      imgSrc={data.image}
                      name={data.category}
                      isActive={data.id == "1" ? true : false}
                    />
                  </div>
                ))}
            </div>

            <div className="dishItemContainer">
                {menusData &&
                  menusData.map((data) => (
                  <ItemCard
                    key={data.id}
                    itemId={data.id}
                    imgSrc={data.image}
                    name={data.nameMenu}
                    ratings={data.rating}
                    price={data.price}
                  />
                ))}
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
                        name={data.nameMenu}
                        imgSrc={data.image}
                        price={data.price}
                        sendData={dataQty}
                      />
                    ))}
                </div>
              </div>
              <TotalPembayaran/>
              <button className="checkOut" onClick={submitPayment}>Go to Payment</button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default Menu;