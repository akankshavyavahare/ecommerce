import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './signup.css';
const Signup = () => {
    const [username, setUsername] = useState("");
    const [mobile, setMobile] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const onsubmitHandler = async (e) => {
        e.preventDefault();
        let obj = {
            "Name": username,
            "MobileNo": mobile,
            "Password": password,
        }
        let res = await axios.post("http://onlinetestapi.gerasim.in/api/Ecomm/RegisterCustomer", obj);
        console.log(res.data.message);
        if (res.data.message ==="Customer Added Successfully") {
            navigate('/')
        }
    }

    return (
        <div>
            
            <div className="card sign-card" style={{ width: "25rem" }}>
            <h3 className='text-center'> SIGN UP</h3>
                <div className="card-body body-card">
                    <form onSubmit={(e) => onsubmitHandler(e)}>
                        <div className="mb-3">
                            <label htmlFor="exampleInputUsername" className="form-label"> User Name</label>
                            <input type="text" className="form-control" id="exampleInputEmail1" value={username} placeholder='username' onChange={(e) => setUsername(e.target.value)}></input>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputMobile" className="form-label">Mobile</label>
                            <input type="text" className="form-control" id="exampleInputMobile1" value={mobile} placeholder='mobile' onChange={(e) => setMobile(e.target.value)}></input>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" value={password} placeholder='password' onChange={(e) => setPassword(e.target.value)}></input>
                        </div>
                        <button type="submit" className="btn btn-primary" >Signup</button>
                        
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Signup;