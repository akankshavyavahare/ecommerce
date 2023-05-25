import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCertificate, faHeart, faLeaf, faLock, faPowerOff, faWrench } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Home.css';
import { ABOUT, LAP } from '../images';
const Home = () => {
    return (
        <div>
            <section className="container-fluid block-1 p-5">
                <div className='header'>
                    <h1 className='heading '> Electro. </h1>
                    <p className='para1'>Content writing for ecommerce sites is all about understanding the buyer.</p>
                </div>
                <div className='button'>
                    <button className='btn btn-primary'> Shop Now </button>
                </div>
            </section>
            {/* about us  */}
            <section className='container-fluid main p-5'>
                <div className='main-1'>
                    <div>
                        <h2 className='text-center'>About Us</h2>
                        <h4 className='p-3'>Description</h4>
                        <p className='para-main'>Provider of a shopping platform for home appliances. The company offers an online marketplace which enables users to buy home appliances at competitive rates with free installation services.</p>
                        <button className="btn btn-primary">Get in Touch</button>
                    </div>
                    <div className='picture'>
                        <img src={ABOUT} alt='about' style={{ width: "100%", height: "100%" }}></img>
                    </div>
                </div>
                <div className="values">
                    <h2 className='text-center py-5'>Our Values</h2>
                    <div className="about-value pb-5">
                        <div className='vision-img'>
                            <h3> Our Vision</h3>
                            <p className='pe-5 pt-5'>
                                Drive Value through Smart Engineering.</p>
                        </div>
                        <div className='mission '>
                            <h4><strong> OUR MISSION:</strong></h4>
                            <p> We will offer our customers appropriate engineering solutions in the form of products, projects and services of superior value in our areas of expertise and experience - air conditioning, refrigeration, electro-mechanical works, water management and industrial capital equipment - so as to build and sustain market leadership.</p>
                        </div>
                    </div>
                </div>

            </section>
            {/* services */}
            <section className='container-fluid services '>
                <div className="text-center">
                    <h2 className='py-5'>SERVICES</h2>
                    <h4>What we offer</h4>
                    {/* <br> */}
                    <div className="row py-3">
                        <div className="col-sm-4 ">
                            <span>  <FontAwesomeIcon icon={faPowerOff} /></span>
                            <h4>POWER</h4>
                            <p>Lorem ipsum dolor sit amet..</p>
                        </div>
                        <div className="col-sm-4">
                            <span>  <FontAwesomeIcon icon={faHeart} /></span>
                            <h4>LOVE</h4>
                            <p>Lorem ipsum dolor sit amet..</p>
                        </div>
                        <div className="col-sm-4">
                            <span>  <FontAwesomeIcon icon={faLock} /></span>
                            <h4>JOB DONE</h4>
                            <p>Lorem ipsum dolor sit amet..</p>
                        </div>
                    </div>
                    <div className="row py-3">
                        <div className="col-sm-4">
                            <span>  <FontAwesomeIcon icon={faLeaf} /></span>
                            <h4>GREEN</h4>
                            <p>Lorem ipsum dolor sit amet..</p>
                        </div>
                        <div className="col-sm-4">
                            <span>  <FontAwesomeIcon icon={faCertificate} /></span>
                            <h4>CERTIFIED</h4>
                            <p>Lorem ipsum dolor sit amet..</p>
                        </div>
                        <div className="col-sm-4">
                            <span>  <FontAwesomeIcon icon={faWrench} /></span>
                            <h4>HARD WORK</h4>
                            <p>Lorem ipsum dolor sit amet..</p>
                        </div>
                    </div>
                </div>
            </section>
        </div >
    );
};

export default Home;