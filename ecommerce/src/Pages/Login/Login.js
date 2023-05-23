// import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState, useSyncExternalStore } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [islogin, setIsLogin] = useState(false);
    const[isuser, setIsuser] = useState(false);
    const[isadmin, setIsadmin] = useState(false);
    const navigate = useNavigate();
    // useEffect(() => {
    //     let ls = localStorage.getItem("islogin");  // to store in local storage
    //    let ls2 = localStorage.getItem("isuser");
    //     if (ls) {
    //         setIsLogin({
    //             islogin: true,         //this is condition important for redirecting it properly to the page.
    //         })                       // show logout and home page instead of login page
    //     }
    //     if(ls2){
    //         setIsuser({
    //             isuser:true,
    //         })
    //     }
    // },[])
    const SubmitHandler = (e) => {
        e.preventDefault();
        // console.log(username, password);  // seeing input in console.log
        if (username === "admin" && password === "123") {
            localStorage.setItem("isadmin", true);
            localStorage.setItem("islogin", true);
            navigate('/addproduct')
            window.location.reload(); //  this useful to reload the page so that logout button get display after login
        } else if (username === "akanksha" && password === "345") 
        {
            localStorage.setItem("islogin", true);
            localStorage.setItem("isuser",true);
            navigate('/home')
            window.location.reload();  // it is more to make changes or refresh all pages
        } else {
            alert("check the credentials");
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
                    <label htmlFor="exampleInputUsername" className="form-label"> User Name</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" value={username} placeholder='username' onChange={(e) => setUsername(e.target.value)}></input>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" value={password} placeholder='password' onChange={(e) => setPassword(e.target.value)}></input>
                </div>
                <button type="submit" className="btn btn-primary" >Login </button>
                <div>
                    <p> <Link>Forgotten account?</Link>  <Link> Sign up</Link> </p>
                </div>
            </form>
        </div>
    );
};

export default Login;