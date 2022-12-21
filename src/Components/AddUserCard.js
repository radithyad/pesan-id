import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom'

function AddUserCard({ isActive }) {
  const [order_type, setOrderType] = useState("dine in");
  const navigate = useNavigate();

  const saveOrder = async (e) => {
      e.preventDefault();
      try {
          await axios.post('http://localhost:3000/order', {
            order_type
          });
          navigate("/")
      } catch (error) {
          console.log(error);
      }
  };

  const dinein = () => {

  }

  const takeaway = () => {

}

  return (
      <div className="rowContainerReservasiCard" 
      onSubmit={saveOrder}
      >
        <div className={`rowReservasiCard ${isActive ? `active` : ``}`}
        onClick={dinein}
        >
          <h3 value="dinein">dine in</h3>
        </div>

        <div className={`rowReservasiCard ${isActive ? `active` : ``}`}
        onClick={takeaway}
        >
          <h3 value="takeaway">take away</h3>
        </div>
        <div className="field">
            <button type='submit' className='button is-success'>Save</button>
        </div>
      </div>
  );

//   return (
//     <div className="columns mt-5 is-centered">
//         <div className="column is-half">
//             <form onSubmit={saveUser}>
//                 <div className="field">
//                     <label className="label">Reservasi</label>
//                     <div className="control">
//                         <div className="select is-fullwidth">
//                             <select 
//                             value={order_type}
//                             onChange={(e)=> setOrderType(e.target.value)}
//                             >
//                                 <option value="dinein">dine in</option>
//                                 <option value="takeaway">takeaway</option>
//                             </select>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="field">
//                     <button type='submit' className='button is-success'>Save</button>
//                 </div>
//             </form>
//         </div>
//     </div>
//   )
}

export default AddUserCard;
