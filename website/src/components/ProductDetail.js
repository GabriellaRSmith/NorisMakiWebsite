import React, {useEffect, useState} from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import {products} from "../assets/data";
import SignUpSection from "../components/SignUpSection";
import "./ProductDetail.css"; 
import {sizes} from "../assets/data";

function productInfo(productId){

    for(const product of products){
        if(product.id == productId){
            return product;
        } 
    }
}

function ProductDetail() {
    const [value, setValue] = useState(1);
    const {productId} = useParams();
    let product = productInfo(productId);
  
  return (
    <div className="product-container">
        
        <img className="product-image" src={require(`../assets/images/${product.image}`)} />

        <div className="product-details-container">
            <div className="name">{product.name}</div>
            <div className="price">{product.price}</div>

            <div className="quantity-container">
                <div className="quantity">QUANTITY</div>
                <div className="counter-container">
                    <button className="decrement" onClick={()=> {value > 1 ? setValue(value-1): setValue(1)}}>-</button>
                    <label id="quantity-label">{value}</label>
                    <button className="increment" onClick={()=> setValue(value+1)}>+</button>
                </div>
            </div>

            <div className="drop-down-container">
                <div className="size">SIZE</div>
                <select className="select-menu" onChange={(event)=>{
                    const productSize = sizes.find((size)=> size === event.target.value);
                    console.log("product size: " + productSize);
                    console.log("received value" + event.target.value);
                }}>
                    {
                        sizes.map((size)=>{
                            return <option className="size-selection" key={size} value={size}>{size}</option>;
                        })
                    }
                </select>
            </div>
            <button className="cart-btn">ADD TO CART</button>
            <div className="product-description">Product Description</div>
            <div>100% cotton</div>
        </div>
    </div>
  );
}

export default ProductDetail;