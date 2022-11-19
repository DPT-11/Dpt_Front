import React from "react";
import styled, { keyframes } from "styled-components";

import Deco1 from "../../assets/deco1.png";
import Deco2 from "../../assets/deco2.png";
import Deco3 from "../../assets/deco3.png";

const animateDeco = keyframes` 
    0% {
        transform: translate(0%, 0%);
        transition: transform 0.3s;
    }

    50% {
        transform: translate(0%, -5%);
        transition: transform 0.3s;
       
    }
    100% {
        transform: translate(0%,0%);
        transition: transform 0.3s;
    }
`;
const StyledDecorationDiv = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-position: top center;
    align-self: center;
    top: -20px;
`;

const StyledDecorationAnimateDiv = styled.div`
    position: absolute;
    z-index: 0;
    width: 60%;
    height: 15rem;
    display: flex;
    flex-direction: row;
    top: -3rem;
    justify-content: space-around;

    div {
        z-index: 0;
        width: 100%;
        background-repeat: no-repeat;
        background-position: top center;
        background-size: contain;
        animation: ${animateDeco} 1.3s linear 0s;
        animation-iteration-count: infinite;
    }
`;

const Decoration = () => {
    return (
        <StyledDecorationAnimateDiv>
            <div
                style={{
                    animationDelay: "0.2s",
                    backgroundImage: `url(${Deco2})`,
                }}
            >
                {" "}
            </div>
            <div
                style={{
                    animationDelay: "0.3s",
                    backgroundImage: `url(${Deco1})`,
                }}
            >
                {" "}
            </div>

            <div
                style={{
                    marginTop: "100px !important",
                    animationDelay: "0.1s",
                    backgroundImage: `url(${Deco3})`,
                }}
            >
                {" "}
            </div>
        </StyledDecorationAnimateDiv>
    );
};

// const Decoration = () => {
//     return (
//         <StyledDecorationDiv
//             style={{ backgroundImage: `url(${DecorationImg})` }}
//         ></StyledDecorationDiv>
//     );
// };

export default Decoration;
