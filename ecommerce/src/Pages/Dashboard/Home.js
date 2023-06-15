import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCertificate, faHeart, faLeaf, faLock, faPowerOff, faWrench } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faFacebookF, faFacebookSquare, faInstagramSquare, faLinkedin, faLinkedinIn, faSkype, faTwitterSquare } from '@fortawesome/free-brands-svg-icons'
import React from 'react';
import './Home.css';
import { ABOUT,LOGO } from '../images';
const Home = () => {
    return (
        <div>
            <section className="container-fluid block-1 p-5">
                <div className='header'>
                    <h1 className='heading '> <img src={LOGO} alt='Logo' style={{ width: "176px", height: "90px" }}></img></h1>
                    <p className='para1'>Electronics are universal in our daily lives, and have led to a deep connection with technology in most of the world. Computers, smartphones, even programmable kitchen appliances and much more have made life easier for billions of people, and play a central role in both work and entertainment. Electronics HUB is the proud host of numerous successful eCommerce websites selling electronics online. Below is a sample of some of our clients.</p>
                </div>
                <div className='button'>
                    <button className='btn btn-primary'> Explore </button>
                </div>
            </section>
            {/* about us  */}
            <section className='container-fluid main p-5'>
                <div className='row'>
                    <div className='col-sm-6'>
                        <div>
                            <h2 className='text-center' id='about'>About Us</h2>
                            <h4 className='p-3'>Description</h4>
                            <p className='para-main'>Provider of a shopping platform for electronic appliances. The company offers an online marketplace which enables users to buy electronics appliances at competitive rates with free installation services.</p>
                            <button className="btn btn-primary">Get in Touch</button>
                        </div>
                    </div>
                    <div className='col-sm-6'>
                        <div className='picture'>
                            <img src={ABOUT} alt='about' style={{ width: "100%", height: "100%" }}></img>
                        </div>
                    </div>
                </div>

                <div className='container-fluid'>
                    <h2 className='text-center py-5'> Our Values </h2>
                    <div className='row'>
                        <div className='col-sm-6'>
                            <div className='vision-img'>
                                <h3> Our Vision</h3>
                                <p className='pe-5 pt-5'>
                                    Drive Value through Smart Engineering.</p>
                            </div>
                        </div>
                        <div className='col-sm-6'>
                            <div className='mission '>
                                <h4><strong> OUR MISSION:</strong></h4>
                                <p> We will offer our customers appropriate engineering solutions in the form of products, projects and services of superior value in our areas of expertise and experience - air conditioning, refrigeration, electro-mechanical works, water management and industrial capital equipment - so as to build and sustain market leadership.</p>
                            </div>
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
                            <p>India, Germany , United Kingdom</p>
                        </div>
                        <div className="col-sm-4">
                            <span>  <FontAwesomeIcon icon={faHeart} /></span>
                            <h4>LOVE</h4>
                            <p> Always recommended to buy electronics from us</p>
                        </div>
                        <div className="col-sm-4">
                            <span>  <FontAwesomeIcon icon={faLock} /></span>
                            <h4>JOB DONE</h4>
                            <p>All the product is deliver on time</p>
                        </div>
                    </div>
                    <div className="row py-3">
                        <div className="col-sm-4">
                            <span>  <FontAwesomeIcon icon={faLeaf} /></span>
                            <h4>GREEN</h4>
                            <p>Everything is eco-friendly</p>
                        </div>
                        <div className="col-sm-4">
                            <span>  <FontAwesomeIcon icon={faCertificate} /></span>
                            <h4>CERTIFIED</h4>
                            <p>SSL Certificate</p>
                        </div>
                        <div className="col-sm-4">
                            <span>  <FontAwesomeIcon icon={faWrench} /></span>
                            <h4>HARD WORK</h4>
                            <p> Connected with 14,000 sponser</p>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="container-fluid subscribe">
                    <h2 className="sub-heading text-center"> Subscribe To the Electronic Shop Fot Latest upload</h2>
                    <div className="row">
                        <div className="col-md-6 offset-3">
                            <div className="well justify-content-center">
                                <form>
                                    <div className="input-group">
                                        <input className="form-control" name="email" id="email" type="email" placeholder="Your Email" required></input>
                                        <button className="btn btn-info btn-lg" type="submit">Subscribe</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <footer>
                <div className='container-fluid footer p-5'>
                    <div className='row'>
                        <div className='col-sm-3'>
                            <ul className='list'>
                                <h4> LOCATION </h4>
                                <li> Mumbai </li>
                                <li> Pune </li>
                                <li> Ahemdabad </li>
                                <li> INDIA </li>
                                <li> Phone: +91 88882-45781 </li>
                                <li> Email: electronicsholi@gmail.com</li>
                            </ul>
                        </div>
                        <div className='col-sm-3'>
                            <h4> USEFUL LINKS </h4>
                            <ul className='links'>
                                <li><a href='/'>HOME </a></li>
                                <li><a href='#about'> About</a></li>
                                <li><a href='#about'> About</a></li>
                                <li><a href='#about'> Services</a></li>
                                <li> <a href='#about'> Terms and condition</a></li>
                                <li><a href='#about'> Privacy Policy</a></li>
                            </ul>
                        </div>
                        <div className='col-sm-3'>
                            <h4> USEFUL LINKS </h4>
                            <ul className='list'>
                                <li>PS 5</li>
                                <li> Computer</li>
                                <li>Gaming Laptop</li>
                                <li> Mobile Phone</li>
                                <li>Camera </li>
                                <li>Tablet</li>
                            </ul>
                        </div>
                        <div className='col-sm-3'>
                            <h4> OUR SOCIAL NETWORKS </h4>
                            <p>Follow us: </p>
                            <ul className='list'>
                                <span className='icons p-2'><FontAwesomeIcon icon={faFacebook} /></span>
                                <span className='icons p-2'><FontAwesomeIcon icon={faInstagramSquare} /></span>
                                <span className='icons p-2'><FontAwesomeIcon icon={faTwitterSquare} /></span>
                                <span className='icons p-2'><FontAwesomeIcon icon={faLinkedin} /></span>
                                <span className='icons p-2'><FontAwesomeIcon icon={faSkype} /></span>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </div >
    );
};

export default Home;