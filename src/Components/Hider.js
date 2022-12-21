import {
  BarChart,
  SearchRounded,
  ShoppingCartRounded,
} from "@mui/icons-material";
import React, { useEffect } from "react";
import { useStateValue } from "./StateProvider";

function Header() {

  return (
    <header>
      <div className="toggleMenu">
        <BarChart className="toggleIcon" />
      </div>
    </header>
  );
}

export default Header;
