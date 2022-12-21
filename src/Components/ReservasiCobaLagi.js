import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom'

function AddUserCard({ isActive }) {
  const [order_type, setOrderType] = useState({ dinein: '', takeaway: ''});
  const navigate = useNavigate();

  const handleDineInChange = (e) => {
    setOrderType({ ...order_type, dinein: e.target.value });
  };

  const handleTakeAwayChange = (e) => {
    setOrderType({ ...order_type, takeaway: e.target.value });
  };

  const saveOrder = async (e) => {
      e.preventDefault();
      try {
          await axios.post('http://localhost:30000/order', {
            order_type
          });
          navigate("/")
      } catch (error) {
          console.log(error);
      }
  };

  const { dinein, takeaway } = order_type;
  
  return (
    <form onSubmit={saveOrder}>
        <div>
                <div style={{
                    gap : '5vw',
                    display : 'flex',
                    justifyContent : 'center',
                    alignItems : 'center'
                }}>
                <button className="buttondinein" 
                value={order_type} 
                onChange={(e)=> setOrderType(e.target.value)}>
                    <h3 value={dinein}>dine in</h3>
                </button>
                <button className="buttontakeaway" 
                value={order_type} 
                onChange={(e)=> setOrderType(e.target.value)}>
                    <h3 value={takeaway}>take away</h3>
                </button>
                </div>
        </div>
    </form>


    // <form onSubmit={saveOrder}>
    //             <div className="field">
    //                     <input 
    //                     type="text" 
    //                     className="input" 
    //                     value={order_type}
    //                     onChange={(e)=> setOrderType(e.target.value)}
    //                     />
    //             </div>
    //             <div className="field">
    //                     <input 
    //                     type="text" 
    //                     className="input" 
    //                     value={table_no}
    //                     onChange={(e)=> setTableNo(e.target.value)}
    //                     />
    //             </div>
    //             <div className="field">
    //                 <button type='submit' >Save</button>
    //             </div>
    //         </form>
  );
}

export default AddUserCard;
