import {
  BarChart,
  SearchRounded,
  ShoppingCartRounded,
} from "@mui/icons-material";
import React, { useEffect } from "react";
import { useStateValue } from "./StateProvider";

function Header() {
  const [{ cart }, dispatch] = useStateValue();

  useEffect(() => {
    const toggleIcon = document.querySelector(".toggleMenu");
    toggleIcon.addEventListener("click", () => {
      document.querySelector(".rightMenu").classList.toggle("active");
    });
  }, []);

  return (
    <header>
      <div className="pesaninheader">
            pesan<span className="in">.in</span>
          </div>

      <div className="shoppingCart">
        <ShoppingCartRounded className="cart" />
        <div className={`${!cart ? "noCartItem" : "cart_content"}`}>
          <p>{cart ? cart.length : ""}</p>
        </div>
      </div>

      <div className="toggleMenu">
        <BarChart className="toggleIcon" />
      </div>
    </header>
  );
}

export default Header;
