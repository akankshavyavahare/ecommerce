import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Addcart from './Addcart';
import Addincrement from '../IncDec/Addincrement';

const Laptop = () => {
    const [islaptop, setIsLaptop] = useState([]);
    useEffect(() => {     // it should return function or nothing.


        const callApihere = async () => {   // we have declared function because useeffect do not except callback function to retuen prommise. 
            let res = await axios.get('http://onlinetestapi.gerasim.in/api/Ecomm/GetAllProductsByCategoryId?id=2')
            console.log(res.data.data);
            setIsLaptop(res.data.data);
        }
        callApihere();
    }, [])
    return (
        <div className='container'>
            <div className='row'>
                {islaptop.map((item) => {
                    return (
                        <div className='col-4'>
                            <div className="card mt-5" style={{ width: "18rem" }}>
                                <img className="card-img-top" src={item.productImageUrl} alt="Laptop" />
                                <div className="card-body">
                                    <h5 className="card-title">{item.productName}</h5>
                                    <p className="card-text">{item.productDescription}</p>
                                    <Addincrement/>
                                </div>
                            </div>
                        </div>
                    )

                })}
            </div>
        </div>
    );
};

export default Laptop;