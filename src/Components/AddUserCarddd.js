import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom'

function AddUserCard({ isActive }) {
  const [table_no, setTableNo] = useState("");  
  const [order_type, setOrderType] = useState("");
  const navigate = useNavigate();

  const saveOrder = async (e) => {
      e.preventDefault();
      try {
          await axios.post('http://localhost:3000/order', {
            order_type,
            table_no
          });
          navigate("/")
      } catch (error) {
          console.log(error);
      }
  };

  const input = {
  }
  
  return (
    <form onSubmit={saveOrder}>
        <div className="rowContainerReservasiCard" type='submit'>
            <div className={`rowReservasiCard ${isActive ? `active` : ``}`}
            value={input}
            >
                <div
                type='submit'
                value={order_type}
                onChange={(e)=> setOrderType(e.target.value)}
                >
                    <h3 value="dine in">dine in</h3>
                </div>
            </div>
            <div className={`rowReservasiCard ${isActive ? `active` : ``}`}
            value={input}
            >
                <div
                type='submit'
                value={order_type}
                onChange={(e)=> setOrderType(e.target.value)}
                >
                    <h3 value="takeaway">takeaway</h3>
                </div>
            </div>
        </div>
        <div className="field">
            <button type='submit' className='button is-success'>Save</button>
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
