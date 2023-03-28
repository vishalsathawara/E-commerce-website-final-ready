import React from 'react'
import './App.css'
import Navbar from "./component/Navbar"
import Home from "./component/Home"
import Products from "./component/Products"
import { Routes, Route } from "react-router-dom";
import Category from "./component/Category"
import CategoryProduct from "./component/CategoryProduct"
import Productdetail from "./component/Productdetail"
import Cart from "./component/Cart"
import Register from "./component/Register"
import ContactUs from "./component/ContactUs"


export default function App() {
  return (
    <>
      <Navbar />


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category" element={<Category />} />
        <Route path="/category/:id" element={<CategoryProduct />} />
        <Route path="/product" element={<Products />} />
        <Route path="/product/:id" element={<Productdetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>




    </>
  )
}
