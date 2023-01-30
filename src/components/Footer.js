import React, {Fragment} from "react";
import '../css/footer.css'
import facebook from '../icons/facebook.png'
import twitter from '../icons/twitter.png'


export default function Footer(){
    

    return(
        <Fragment>
            <div id="footer">
                <div id="iconContainer"><a href="http://facebook.com" ><img src={facebook} alt="Facebook Logo" width="50" height="50"/></a></div>
                <div id="iconContainer"><a href="http://twitter.com" ><img src={twitter} alt="Twitter Logo" width="50" height="50"/></a></div>
            </div>
        </Fragment>
    )
    
}