import React, {useEffect, useState} from "react";
import SignUpSection from "../components/SignUpSection";
import ProductDetail from "../components/ProductDetail";
function Product() {

  return (
    <main>

        {/* Product Detail Block*/}
        <ProductDetail />
        {/* Sign-Up block */}
        <SignUpSection />
    </main>
   
  );
}

export default Product;