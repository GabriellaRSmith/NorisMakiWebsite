import React from "react";
import "./Merchandise.css";
import { Link } from "react-router-dom";

function Merchandise(){
    return(
        <div className="merchandise-container">
            <div className="title">Shop The Tour Collection</div>

            <div className="merch-items-container">
                <div className="merch-item-card">
                    <Link to="/product"><img class="item-image" src="../assets/images/cat.jpg" /></Link>
                    {/* <img class="item-image" src="../assets/images/cat.jpg" /> */}
                    <div class="item-name">Item Name</div>
                    <div class="item-price">Price</div>
                </div>

                <div className="merch-item-card">
                    <img class="item-image" src="../assets/images/cat.jpg" />
                    <div class="item-name">Item Name</div>
                    <div class="item-price">Price</div>
                </div>

                <div className="merch-item-card">
                    <img class="item-image" src="../assets/images/cat.jpg" />
                    <div class="item-name">Item Name</div>
                    <div class="item-price">Price</div>
                </div>

                <div className="merch-item-card">
                    <img class="item-image" src="../assets/images/cat.jpg" />
                    <div class="item-name">Item Name</div>
                    <div class="item-price">Price</div>
                </div>

                <div className="merch-item-card">
                    <img class="item-image" src="../assets/images/cat.jpg" />
                    <div class="item-name">Item Name</div>
                    <div class="item-price">Price</div>
                </div>

                <div className="merch-item-card">
                    <img class="item-image" src="../assets/images/cat.jpg" />
                    <div class="item-name">Item Name</div>
                    <div class="item-price">Price</div>
                </div>
            </div>
        </div>
    );
}

export default Merchandise;