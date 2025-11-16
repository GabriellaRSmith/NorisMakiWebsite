import React from "react";
import "./TitleSequence.css";
import titleSequence from "../assets/videos/INTRO_SEQUENCE_NORIS_MAKI.mp4";

function TitleSequence(){
    return(
        <div class="title-sequence-container">
            <video class="title-sequence" src={titleSequence} autoPlay  loop></video>
            {/* <video class="title-sequence" autoPlay loop>
                <source src={titleSequence} type="video/pm4" />
            </video> */}
        </div>
    );
}

export default TitleSequence;