import React from 'react'
import "./Checkout.css";
import Subtotal from './Subtotal';


function Checkout() {
    return (
        <div className="checkout">
            <div className="check_left">
                <img className="check_ad" src="https://picsum.photos/1000/100" alt="" />
                <div>
                    <div className="check__title">
                        <h2>Your Shopping Basket</h2>
                         {/* Baskte */}
                          {/* Baskte */}
                           {/* Baskte */}
                            {/* Baskte */}
                        
                    </div>
                </div>

                <div className="check__right">
                    <h2>Your Subtotal goes here</h2>
                    <Subtotal/>
                </div>
            </div>
        </div>
    )
}

export default Checkout
