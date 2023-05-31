import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Addincrement from '../IncDec/Addincrement';
import DeleteModal from '../Modal/DeleteModal';
import Addcart from '../Users/Addcart';

const Allproduct = (props) => {
    const [isdevice, setIsdevice] = useState([]);
    const [showdelete, setShowdelete] = useState(false);
    const [showmodalpop, setShowmodalpop] = useState(false);
    const[showcart , setShowcart] = useState(true)
    useEffect(() => {
        const allproductapi = async () => {
            let res = await axios.get("http://onlinetestapi.gerasim.in/api/Ecomm/GetAllProducts");
            let ls = localStorage.getItem("isadmin");
            setIsdevice(res.data.data)
            setShowdelete(ls ? true : false)   // delete button to show 
            setShowcart(ls ? false : true)
            console.log(ls)
        }

        allproductapi();
    }, [])
    
    const deleteHandler = async (item) => {
        console.log(item);
        setShowmodalpop(true);
    }
    
    return (

        <div className='container'>
            <div className='row'>
                {isdevice.map((item => {
                    return (
                        <div className='col-4'>
                            <div className="card mt-5" style={{ width: "18rem" }}>
                                <img className="card-img-top" src={item.productImageUrl} alt="camera" />
                                <div className="card-body">
                                    <h5 className="card-title">{item.productName}</h5>
                                    <p className="card-text">{item.productImageUrl}</p>
                                    {showdelete && <button type='delete' className='btn btn-danger' onClick={(e) => deleteHandler(item)}> Delete </button>}
                                   {showcart && <Addincrement /> } 
                                </div>
                            </div>
                        </div>
                    )
                }))}
                {showmodalpop && <DeleteModal message="Are you sure you want to delete" />}
            </div>

        </div>
    );
};

export default Allproduct;