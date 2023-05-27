import axios from 'axios';
import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Appcart } from '../../App';
import { LOGO } from '../images';
import './Modal.css';

const Modal = (props) => {
    const{showmodalpop,showmodalogin} = useContext(Appcart)
    const [mobile, setMobile] = useState("");
    const [password, setPassword] = useState("");
    const [islogin, setIsLogin] = useState(false);
    const [isuser, setIsuser] = useState(false);
    const [isadmin, setIsadmin] = useState(false);

    const navigate = useNavigate();
    const SubmitHandler = async (e) => {
        e.preventDefault();
        // console.log(username, password);  // seeing input in console.log
        if (mobile === "123" && password === "123") {
            localStorage.setItem("isadmin", true);
            localStorage.setItem("islogin", true);
            navigate('/addproduct')
            window.location.reload(); //  this useful to reload the page so that logout button get display after login
        } else {
            let obj = {
                "UserName": mobile,
                "UserPassword": password,
            }
            let res = await axios.post("http://onlinetestapi.gerasim.in/api/Ecomm/Login", obj)
            if (res.data.message === "Login Successful") { //it should be same as network in browser
                localStorage.setItem("islogin", true);
                localStorage.setItem("isuser", true);
                localStorage.setItem("userobj", res.data.data);
                window.location.reload();// it is more to make changes or refresh all pages
            }
            navigate('/home')

        }
    }
    const close=()=>{
        showmodalogin();
    }
    return (
        <div>
            <div className="modal modallogin" tabIndex="-1" style={{ display: "block" }} role="dialog">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header mb-0">
                            {/* <h5 className="modal-title"> Electro.</h5> */}
                            <img src={LOGO} alt='logo' style={{width : "220px" , height: "90px"}}></img>
                            <button type="button" className="close" data-dismiss="modal" onClick={()=>close()} aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body p-3">
                            <div className='mx-3'>
                                <div className='text-center'>
                                    <h4 >LOG IN </h4>
                                </div>
                                <form onSubmit={(e) => SubmitHandler(e)}>
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputUsername" className="form-label"> Mobile</label>
                                        <input type="text" className="form-control" id="exampleInputEmail1" value={mobile} placeholder='mobile' onChange={(e) => setMobile(e.target.value)}></input>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                        <input type="password" className="form-control" id="exampleInputPassword1" value={password} placeholder='password' onChange={(e) => setPassword(e.target.value)}></input>
                                    </div>
                                    <button type="submit" className="btn btn-primary">Login </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;