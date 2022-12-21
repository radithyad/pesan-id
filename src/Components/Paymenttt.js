import React from 'react'
import { useStateValue } from "../Components/StateProvider";
import CartItem from "../Components/CartItem";

const Paymenttt = () => {
    const [{ cart, total }, dispatch] = useStateValue();
  return (
    <div style={{
        background : '#FFD500',
        width : '100vw',
        height : '100vh',
        display : 'flex',
        justifyContent : 'center',
        alignItems : 'center'
    }}>
            <div className="paymentCard">
                Your Order
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
                <button className='pay'>Pay</button>
            </div>
    </div>
  )
}

export default Paymenttt