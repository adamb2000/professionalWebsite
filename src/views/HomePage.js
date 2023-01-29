import * as React from "react";
import '../css/homePage.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Countdown from '../components/Countdown'

function HomePage(){
    
    return (
        <div className="outerContainer">
            <Header/>
            <div id="countdownContainer">
                <Countdown/>
            </div>
            <Footer/>
        </div>
    )
}

export default HomePage;