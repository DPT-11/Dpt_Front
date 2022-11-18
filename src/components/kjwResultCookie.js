import React, { useState, useEffect } from "react";
import {
    AnimatCookieImg
} from "../page/Home.style";

function KjwResultCookie(){
    const [ovenState, setOvenState] = useState(false);
    return (
        <AnimatCookieImg
            style={{ display: `${ovenState ? "" : "none"}` }}
        />
    );
}

export default KjwResultCookie;