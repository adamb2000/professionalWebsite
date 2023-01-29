import React, {useState, useEffect, Fragment} from "react";
import '../css/countdownNumber.css'

export default function CountdownNumber({text,number}){
    const [dispText,setDispText] = useState("TEXT")
    const [dispNumber,setDispNumber] = useState("Number")

    useEffect(() => {
        console.log(number)
        setDispText(text)
        setDispNumber(number)
        
    },[text, number])
    //console.log(dispNumber)

    return(
        <Fragment>
            <div id="countdownOuterContainer">
                <div id="number">{dispNumber}</div>
                <div id="text">{dispText}</div>
            </div>
        </Fragment>
    )
    
}