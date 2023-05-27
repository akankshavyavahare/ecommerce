import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faHome, faRightFromBracket, faUser } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';
import { Appcart } from '../../App';
import Modal from '../Modal/Modal';

const Navbar = () => {
    const{cartvalues, showmodalpop,showmodalogin} = useContext(Appcart); // acessing value from app.js, to show value 0.
    const [islogin, setisLogin] = useState(false); //this is used to hide logout button display it after login
    const [isuser, setIsuser] = useState(false);
    const [isadmin, setIsadmin] = useState(false);
    
    useEffect(() => {
        let ls = localStorage.getItem("islogin");
        let ls1 = localStorage.getItem("isadmin");
        let ls2 = localStorage.getItem("isuser");
        if (ls) {
            setisLogin({
                islogin: true
            })
        }
        if (ls1) {
            setIsadmin({
                isadmin: true,
            })
        }
        if (ls2) {
            setIsuser({
                isuser: true
            })
        }
    }, [])   // after redirect to show logout button
    const Logout = () => {
        localStorage.clear();
        window.location.reload()  // after redirect to show logout button
    }
    const login =()=>{
        showmodalogin();
    }
    return (
        <div>
            {showmodalpop && <Modal/>}
            <nav className="navbar navbar-expand-lg navbar nav1">
                <a className="navbar-brand" href="#">Electro.</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="navbar-nav mr-auto">
                            <Link to='/' className="nav-link"> <FontAwesomeIcon icon={faHome} /></Link>
                        </li>
                        {isadmin && <><li className="navbar-nav mr-auto">
                            <Link to='/addproduct' className="nav-link"> Add Product </Link>
                        </li> </>}
                        {islogin && <>  <li className="navbar-nav mr-auto">
                            <Link to='/allproduct' className="nav-link"> AllProduct</Link>
                        </li>  </>}

                        {isuser && <>      {/* navbar gets hide from main page , here fragment is used it does take space in memory used to wrap  */}
                            <li className="navbar-nav mr-auto">
                                <Link to='/mobile' className="nav-link">Mobile</Link>
                            </li>
                            <li className="navbar-nav mr-auto">
                                <Link to='/laptop' className="nav-link">Laptop</Link>
                            </li>
                            <li className="navbar-nav mr-auto">
                                <Link to='/camera' className="nav-link">Camera</Link>
                            </li>

                            <li className="navbar-nav mr-auto">
                                <Link to='/tablet' className="nav-link">Tablet</Link>
                            </li>
                            <li className="navbar-nav mr-auto">
                                <Link to='/addcart' className="nav-link"><FontAwesomeIcon icon={faCartShopping} /><sup> {cartvalues}</sup></Link>
                            </li> {/* {cartvalues} to show 0 on navbar */}
                        </>}

                    </ul>
                    <div className="collapse navbar-collapse justify-content-end me-4" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            {islogin && <li className="nav-item ">
                                <p className='nav-link' onClick={(e) => Logout()}> <FontAwesomeIcon icon={faRightFromBracket} />Logout</p>
                            </li>}
                            {!islogin && <li className="nav-item">
                                {/* <Link to='/' className="nav-link"> <FontAwesomeIcon icon={faUser} />LOG IN</Link> */}
                                <p className='nav-link' onClick={(e)=>login()}> <FontAwesomeIcon icon={faUser}/> Login  </p>
                            </li>}
                           {!islogin && <li className='nav-item'>
                            <Link to='/signup' className='nav-link'>/  SIGN-UP</Link></li>} 

                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;