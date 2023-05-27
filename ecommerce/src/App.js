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
import { Component, createContext, useState } from 'react';
import Addcart from './Pages/Users/Addcart';
import Signup from './Pages/Signup/Signup';
import Home from './Pages/Dashboard/Home';

const Appcart = createContext(); //This is context api use to inherit properties from parent to n number of child
function App() {
const[cartvalues , setCartvalues] = useState(0);
const[showmodalpop , setShowmodalpop] = useState(false)
const increaseCart =()=>{
  setCartvalues(cartvalues + 1)
}
const showmodalogin=()=>{
  setShowmodalpop(
          !showmodalpop
  )
}
  return (
    <Appcart.Provider value={{cartvalues,showmodalpop, showmodalogin, increaseCart}}>  {/* then go to navbar .... 3rd step consumer */}
    <div>

      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
        {/* <Route path='/' element={<Login/>}> </Route> */}
        <Route path='/signup' element={<Signup/>}></Route>
          <Route path='/' element={<Home/>}></Route>
          <Route path='addproduct' element={<Protected Component={<AddProduct/>}/>}> </Route>
          <Route path='/allproduct' element={<Protected Component={<Allproduct/>}/>}></Route>
          <Route path='/mobile' element={<Protected Component={<Mobile/>}/>}></Route>
          <Route path='/laptop' element={<Protected Component={<Laptop/>}/>}></Route>
          <Route path='/camera' element={<Protected Component={<Camera/>}/>}></Route>
          <Route path='/tablet' element={<Protected Component={<Tablet/>}/>}></Route>
          <Route path='/addcart' element={<Protected Component={<Addcart/>}/>}></Route>
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
export{Appcart};
