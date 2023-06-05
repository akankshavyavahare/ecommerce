import logo from './logo.svg';
import './App.css';
import Navbar from './Pages/Navbar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import Login from './Pages/Login/Login';
import AddProduct from './Pages/Admin/AddProduct';
import Allproduct from './Pages/Admin/AllProduct';
import Mobile from './Pages/Users/Mobile';
import Laptop from './Pages/Users/Laptop';
import Camera from './Pages/Users/Camera';
import Tablet from './Pages/Users/Tablet';
import Protected from './Pages/Protected/Protected';
import { Component, createContext, useEffect, useState } from 'react';
import Addcart from './Pages/Users/Addcart';
import Signup from './Pages/Signup/Signup';
import Home from './Pages/Dashboard/Home';
import axios from 'axios';

const Appcart = createContext(); //This is context api use to inherit properties from parent to n number of child
function App() {
  const [cartvalues, setCartvalues] = useState(0);
  const [showmodalpop, setShowmodalpop] = useState(false)
  const [cartarray, setCartarray] = useState([])

  const increaseCart = (product) => {

    // setCartvalues(cartvalues + 1)
    // console.log(product);
    let currentproduct = { ...product, qty: (cartvalues + 1) };
    console.log(currentproduct)
    setCartvalues(0);
    setCartarray([...cartarray, currentproduct])

  }
  const showmodalogin = () => {
    setShowmodalpop(
      !showmodalpop
    )
  }
 
  useEffect(() => {
    const apiCall = async()=>{
      let ls = JSON.parse(localStorage.getItem("userobj"));
      let cartbyId = await axios.get("http://onlinetestapi.gerasim.in/api/Ecomm/GetCartProductsByCustomerId", { params: { id: ls.custId } })
      setCartarray(cartbyId.data.data);
    }
    apiCall()
  },[])
 
  const addingcart = async (product) => {
    console.log(product);
    let ls = JSON.parse(localStorage.getItem("userobj"))
    console.log(ls);
    // debugger
    let obj = {
      "CustId": ls.custId,
      "ProductId": product.productId,
      "Quantity": cartvalues,
      "AddedDate": new Date(),
    }
    console.log(obj);

    let res = await axios.post("http://onlinetestapi.gerasim.in/api/Ecomm/AddToCart", obj)
    // console.log(res);
    if (res.data.message === "Product Quantity Updated in Cart") {
      console.log(res.data.message);
      setCartvalues(0);
    }
    let cartbyId = await axios.get("http://onlinetestapi.gerasim.in/api/Ecomm/GetCartProductsByCustomerId", { params: { id: ls.custId } })
    console.log(cartbyId);
    setCartarray(cartbyId.data.data);
  }
  const quantitys = (qtyVal) => {
    setCartvalues(qtyVal);
  }
  return (
    <Appcart.Provider value={{ cartvalues, showmodalpop, cartarray, addingcart, quantitys, showmodalogin, increaseCart }}>  {/* then go to navbar .... 3rd step consumer */}
      <div>

        <BrowserRouter>
          <Navbar></Navbar>
          <Routes>
            {/* <Route path='/' element={<Login/>}> </Route> */}
            <Route path='/signup' element={<Signup />}></Route>
            <Route path='/' element={<Home />}></Route>
            <Route path='addproduct' element={<Protected Component={<AddProduct />} />}> </Route>
            <Route path='/allproduct' element={<Protected Component={<Allproduct />} />}></Route>
            <Route path='/mobile' element={<Protected Component={<Mobile />} />}></Route>
            <Route path='/laptop' element={<Protected Component={<Laptop />} />}></Route>
            <Route path='/camera' element={<Protected Component={<Camera />} />}></Route>
            <Route path='/tablet' element={<Protected Component={<Tablet />} />}></Route>
            <Route path='/cartdetail' element={<Protected Component={<Addcart />} />}></Route>
            {/* <Route path='/mobile' element={<Mobile/>}> </Route>
          <Route path='/laptop' element={<Laptop/>}></Route>
          <Route path='/camera' element={<Camera/>}> </Route>
          <Route path='/tablet' element={<Tablet/>}></Route> */}
          </Routes>
        </BrowserRouter>
      </div>
    </Appcart.Provider>
  );
}

export default App;
export { Appcart };
