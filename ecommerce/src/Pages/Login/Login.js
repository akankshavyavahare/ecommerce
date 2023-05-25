// import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Appcart } from '../../App';
import Mobile from '../Users/Mobile';

const Login = () => {
    
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
            if (res.data.message === "Login Successful") {   //it should same as swagger ui
                localStorage.setItem("islogin", true);
                localStorage.setItem("isuser", true);
                localStorage.setItem("userobj", res.data.data);
                
            }
            navigate('/home')
            window.location.reload();// it is more to make changes or refresh all pages
            
        }
    }
    return (
            <div className='offset-4 col-4 mt-5'>
                {/* {islogin && <Navigate to={'/addproduct'} replace={true}></Navigate>}
            {isuser && <Navigate to={'/home'} replace={true}></Navigate>} */}
                <div>
                    <h4 >ELECTRO. </h4>
                </div>
                <form onSubmit={(e) => SubmitHandler(e)}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputUsername" className="form-label"> Mobile</label>
                        <input type="text" className="form-control" id="exampleInputEmail1" value={mobile} placeholder='username' onChange={(e) => setMobile(e.target.value)}></input>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" value={password} placeholder='password' onChange={(e) => setPassword(e.target.value)}></input>
                    </div>
                    <button type="submit" className="btn btn-primary">Login </button>
                </form>
            </div>
    );
};

export default Login;