import React from "react";
import "./Pagination.css";
const Pagination = ({productsPerPage, totalProducts, paginate}) => {
    const pageNumbers = [];

    console.log("products per page value: " + productsPerPage);
    console.log("total products value: " + totalProducts);

    for(let i = 1; i <= Math.ceil(totalProducts/ productsPerPage); i++){
        pageNumbers.push(i); //gives page numbers
        console.log("pageNumbers value: " + pageNumbers)
    }

    return(
       
        <div className="item-page-number-contianer">
            {pageNumbers.map(number=>(
           <a onClick={() => paginate(number)} href= "#" className='page-link'>{number}</a>
            ))}
        </div>
    );
} 

export default Pagination;