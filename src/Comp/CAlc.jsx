import React from "react";
import '../index.css';
import { useState } from "react";

function Increament(){
    const [initial,final] = useState(0)
    return(
        <>
        <center>
        <div className="show">
        <h1>Counting <span>{initial}</span></h1>
        <button onClick={()=>{final(initial+1)}} id="btnI">Increament</button>
        <button onClick={()=>{final(initial-1)}} id="btnD">Decreament</button><br />
        <button onClick={()=>{final(0)}} id="btnR">Reset</button>
        </div>
        </center>
        </>
    )
}

export default Increament