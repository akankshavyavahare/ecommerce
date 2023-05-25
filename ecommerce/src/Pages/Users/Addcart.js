import React, { useContext } from 'react';
import { Appcart } from '../../App';

const Addcart = () => {
    const{increaseCart} = useContext(Appcart); // accessing from parent app.js through to context api
    const addcartHandler=()=>{
    increaseCart();
    }
    return (
        <div>
            <button className="btn btn-primary" onClick={()=>addcartHandler()}> Add To Cart</button>
        </div>
    );
};

export default Addcart;