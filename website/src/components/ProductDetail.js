import React, {useState} from "react";
import { useParams } from "react-router-dom";
import {products} from "../assets/data";
import "./ProductDetail.css"; 
import {sizes} from "../assets/data";
import CheckoutSidebar from "./CheckoutSidebar";

function productInfo(productId){

    for(const product of products){
        if(product.id == productId){
            return product;
        } 
    }
}

function updateCart({product}){

    const cartItems = [];
    const cartEmpty = false; 
    cartItems.push(product);

    return(
        <>
        <div>Sidebar</div>
        <CheckoutSidebar cartEmpty={cartEmpty} cartItems={cartItems} />
        </>  
    );
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
            <button className="cart-btn" onClick={()=> updateCart(product)}>ADD TO CART</button>
            <div className="product-description">{product.description}</div>
            <div className="cotton">100% cotton</div>           
        </div>
    </div>
  );
}

export default ProductDetail;