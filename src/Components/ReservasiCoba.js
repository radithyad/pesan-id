import React, { useState } from "react";
import "../App.css";
import { Link } from 'react-router-dom';

 function ReservasiCoba() {
    const [state, setState] = useState({ dinein: '', takeaway: ''});
    const [isSuccess, setIsSuccess] = useState(false);
  
  const handleDineInChange = (e) => {
    setState({ ...state, dinein: e.target.value });
  };

  const handleTakeAwayChange = (e) => {
    setState({ ...state, takeaway: e.target.value });
  };

  const handleSubmit = (e) => {
    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(state)
    };

    async function fetchData() {
      const response = await fetch('http://localhost:3000/order', options);
      if (response.ok) {
        setIsSuccess(true);
      }
    }

    fetchData();

    e.preventDefault();
  };

  const { dinein, takeaway } = state;

  return (
        <div className="reservasi">
          <div className="pesanin">
            pesan<span className="in">.in</span>
          </div>

          <div className="text">
            <h3>Where do you<br/>wanna eat today?</h3>
          </div>
          
          <div onSubmit={handleSubmit} style={{
            gap : '5vw',
            display : 'flex',
            justifyContent : 'center',
            alignItems : 'center'
            }}>
               <Link to='/menu'>
                    <button className="buttondinein" value={dinein} onChange={handleDineInChange}>dine in</button>
                    <button className="buttontakeaway" value={takeaway} onChange={handleTakeAwayChange}>take away</button>
              </Link>
          </div>
        </div>
  );
}

export default ReservasiCoba;