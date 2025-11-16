import React from "react";
import { Route, Routes } from "react-router-dom";
import "./CheckoutSideBar.css"
import CartPage from "./CartPage";

function CheckoutSidebar({cartEmpty, cartItems}){
    console.log("inside checkout sidebar function");

    console.log("cart empty value: " + cartEmpty)
    return(
        <Routes>
             <Route path="/cart" element={<CartPage />} />
        </Routes>
    )
}

export default CheckoutSidebar;