import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Addincrement from '../IncDec/Addincrement';
import Addcart from './Addcart';

const Tablet = () => {
    const [istablet, setIsTablet] = useState([]);
    useEffect(() => {
        const callTabletapi = async () => {
            let res = await axios.get('http://onlinetestapi.gerasim.in/api/Ecomm/GetAllProductsByCategoryId?id=4');
            console.log(res.data.data);
            setIsTablet(res.data.data);
        }
        callTabletapi();
    }, [])
    return (
        <div className='container'>
            <div className='row'>
                {istablet.map((item) => {
                    return (
                        <div className='col-4'>
                            <div className="card mt-5" style={{ width: "18rem" }}>
                                <img className="card-img-top" src={item.productImageUrl} alt="tablet" />
                                <div className="card-body">
                                    <h5 className="card-title">{item.productName}</h5>
                                    <p className="card-text">{item.productDescription}</p>
                                    <Addincrement itemdetail={item}/>
                                </div>
                            </div>

                        </div>
                    )
                })}

            </div>
        </div >
    );
};

export default Tablet;