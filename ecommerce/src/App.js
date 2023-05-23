import logo from './logo.svg';
import './App.css';
import Navbar from './Pages/Navbar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './Pages/Login/Login';
import AddProduct from './Pages/Admin/AddProduct';
import Allproduct from './Pages/Admin/Product';
import Home from './Pages/Admin/Home';
import Mobile from './Pages/Users/Mobile';
import Laptop from './Pages/Users/Laptop';
import Camera from './Pages/Users/Camera';
import Tablet from './Pages/Users/Tablet';
import Protected from './Pages/Protected/Protected';
import { Component } from 'react';
import Addcart from './Pages/Users/Addcart';
function App() {
  return (
    <div>

      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
        <Route path='/' element={<Login/>}> </Route>
          <Route path='/home' element={<Protected Component={<Home/>}/>}></Route>
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
  );
}

export default App;
