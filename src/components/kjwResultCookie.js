import React, { useState, useEffect } from "react";
import resultCookie from "../img/cookie1.png";

function KjwResultCookie(){
    const [ovenState, setOvenState] = useState(false);
    return (
        <div style={{alignItem:"center"}}>
            <img src={resultCookie} alt="쿠키 결과"/>
        </div>
    );
}

export default KjwResultCookie;