import axios from 'axios';
import React, { useContext, useState } from 'react';
import { Appcart } from '../../App';

const Addcart = (props) => {
    const { increaseCart, cartarray } = useContext(Appcart); // accessing from parent app.js through to context api

    const addcartHandler = async () => {
        increaseCart(props.itemdetail);
        console.log(props.itemdetail);
        let ls = localStorage.getItem("userobj")
        console.log(ls);
        // let obj ={
        //     "CartId": "",
        //     "CustId": "",
        //     "ProductId": "",
        //     "Quantity": "",
        //     "AddedDate": Date(),
        // }
        // let res = await axios.post("http://onlinetestapi.gerasim.in/api/Ecomm/AddToCart",obj)
        // console.log(res);
    }

    return (

        <div>
            <button className="btn btn-primary" onClick={() => addcartHandler()} > Add To Cart</button>

            {cartarray.map((item) => {
                return (
                    <div className='col-4'>
                        <div className="card mt-5" style={{ width: "18rem" }}>
                            <img className="card-img-top" src={item.productImageUrl} alt="camera" />
                            <div className="card-body">
                                <h5 className="card-title">Product Name{item.ProductId}</h5>
                                <p className="card-text">qty{item.qty}</p>
                                <p className="card-text">Rs {item.productPrice * item.qty}</p>
                                <p className='card-text'> {item.AddedDate}</p>

                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    );
};

export default Addcart;