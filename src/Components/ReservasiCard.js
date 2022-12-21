import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom'

function ReservasiCard({ isActive }) {
  const [order_type, setOrder_Type] = useState("");
  const [table_no, setTableNo] = useState("");
  const [orderId, setOrderId] = useState();
  const navigate = useNavigate();

  const saveOrder = async (e) => {
      e.preventDefault();
      console.log(typeof e.target.dataset.value);
      console.log(e.target.dataset.value);
      try {
          const response = await axios.post('http://localhost:3000/order', {
            order_type: e.target.dataset.value,
            table_no: Math.ceil(Math.random() * 100)
          });
          console.log(response.data);
          setOrderId(response.data.id)
          navigate("/menu")
      } catch (error) {
          console.log(error);
      }
  };

  return (
    <Link>
      <div className="rowContainerReservasiCard" >
        <div className=
        {`rowReservasiCard ${isActive ? `active` : ``}`}
        data-value="dine in"
        onClick={saveOrder}
        >
          <h3>dine in</h3>
        </div>

        <div className=
        {`rowReservasiCard ${isActive ? `active` : ``}`} 
        data-value="take away"
        onClick={saveOrder}
        >
          <h3>take away</h3>
        </div>
      </div>
    </Link>
  );
}

export default ReservasiCard;
