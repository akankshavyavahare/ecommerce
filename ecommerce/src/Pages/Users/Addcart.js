import React, { useContext, useState } from 'react';
import { Appcart } from '../../App';

const Addcart = (props) => {
    const { increaseCart, cartarray } = useContext(Appcart); // accessing from parent app.js through to context api

    const addcartHandler = () => {
        increaseCart(props.itemdetail);
        console.log(props.itemdetail);
          let ls = localStorage.getItem("userobj")
          console.log(ls);

    }

    return (

        <div>
            <button className="btn btn-primary" onClick={() => addcartHandler()} > Add To Cart</button>

            {cartarray.map((item)=>{
                return( 
                    <div className='col-4'>
                    <div className="card mt-5" style={{ width: "18rem" }}>
                        <img className="card-img-top" src={item.productImageUrl} alt="camera" />
                        <div className="card-body">
                            <h5 className="card-title">Product Name{item.productName}</h5>
                            <p className="card-text">qty{item.qty}</p>
                            <p className="card-text">Price{item.productPrice}</p>

                        </div>
                    </div>
                </div>
                )
            })}  
        </div>
    );
};

export default Addcart;