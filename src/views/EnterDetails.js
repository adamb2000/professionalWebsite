import * as React from "react";
import '../css/homePage.css'
import Footer from '../components/Footer'
import Countdown from '../components/Countdown'

function EnterDetails(){
    
    return (
        <div id="outerContainer">
            <div id="header">
               <p>Enter Details</p>
            </div>
            <div id="innerContainer">
                <p>Text</p>
            </div>     
            <Footer/>
        </div>
    )
}

export default EnterDetails;