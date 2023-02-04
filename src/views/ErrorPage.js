import * as React from "react";
import '../css/homePage.css'
import Footer from '../components/Footer'

function ErrorPage(){
    
    return (
        <div id="outerContainer">
            <div id="header">
               <p>404 PAGE NOT FOUND!</p>
            </div>
            <div id="innerContainer">
            </div>     
            <Footer/>
        </div>
    )
}

export default ErrorPage;