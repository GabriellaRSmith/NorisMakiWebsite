import React from "react";
import "./TitleSequence.css";


function TitleSequence(){
    return(
        <div class="title-sequence-container">
            <video class="title-sequence" autoPlay loop>
                <source src="" type="video/pm4" />
            </video>
        </div>
    );
}

export default TitleSequence;