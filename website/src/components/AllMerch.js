import React, {useState} from "react";
import "./AllMerch.css";
import { Link } from "react-router-dom";
import {products} from "../assets/data";
import Pagination from "./Pagination";

const AllMerch = () =>{
 
    const page = 1;
    const [currentPage, setCurrentPage] = useState(1);
    const [productsPerPage, setPostPerPage] = useState(6);
    const indexOfLastProduct = currentPage*productsPerPage; //current products
    const indexOfFirstProduct = indexOfLastProduct-productsPerPage; 
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);
    const paginate = pageNumber => setCurrentPage(pageNumber);
    console.log("currentProduct size: " + products.length);

    return(
       
        <div className="merchandise-container">
            <div className="title">Shop The Tour Collection</div>

            <div className="merch-items-container">
                {currentProducts.map((product)=>(
                     
                    <div className="merch-item-card">
                        <Link to={`/product/${product.id}`}><img  src={require(`../assets/images/${product.image}`)} class="item-image"/></Link>
                        <div class="item-name">{product.name}</div>
                        <div class="item-price">{product.price}</div>
                    </div>
                ))}
            </div>
         <Pagination productsPerPage={productsPerPage} totalProducts={products.length} paginate={paginate}/>
        </div>
    );
}

export default AllMerch;