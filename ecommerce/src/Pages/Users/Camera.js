import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Addcart from './Addcart';

const Camera = () => {
    const [iscamera, setIsCamera] = useState([]);
    useEffect(() => {
        const callCameraApi = async () => {
            let res = await axios.get('http://onlinetestapi.gerasim.in/api/Ecomm/GetAllProductsByCategoryId?id=3');
            setIsCamera(res.data.data);
            console.log(res.data.data);
        }
        callCameraApi();
    }, [])
    const deleteHandler=(item)=>{
        console.log(item);
    }
    return (
        <div className='container'>
            <div className='row'>
                {iscamera.map((item) => {
                    return (
                        <div className='col-4'>
                            <div className="card mt-5" style={{ width: "18rem" }}>
                                <img className="card-img-top" src={item.productImageUrl} alt="camera" />
                                <div className="card-body">
                                    <h5 className="card-title">{item.productName}</h5>
                                    <p className="card-text">{item.productImageUrl}</p>
                                    <button type='delete' className='btn btn-danger' onClick={(e)=>deleteHandler(item)}> Delete </button>
                                    <Addcart/>
                                </div>
                            </div>
                        </div>
                    )

                })}

            </div>
        </div>
    );
};

export default Camera;