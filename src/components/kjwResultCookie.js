import React, { useState, useEffect } from "react";
import resultCookie from "../img/cookie1.png";

function KjwResultCookie(props){
    const version = props.version
    const [level, setLevel] = useState(1);
    return (
        <div style={{alignItem:"center"}}>
            <img src={require(`../assets/cookie${props.version}_${props.level}.png`)} alt="쿠키 결과" style={{width:"140px"}}/>
        </div>
    );
}

export default KjwResultCookie;