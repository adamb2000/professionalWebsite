import * as React from "react";
import '../css/homePage.css'
import TopBar from '../components/TopBar'
import Countdown from '../components/Countdown'

function HomePage(){
    
    return (
        <div className="outerContainer">
            <TopBar/>
            <div id="countdownContainer">
                <Countdown/>
            </div>
            
        </div>
    )
}

export default HomePage;