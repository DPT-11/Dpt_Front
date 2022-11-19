import styled, { css, keyframes } from "styled-components";

import Cookie1 from "../assets/cookie_3d_1.png";
import Cookie2 from "../assets/cookie_3d_2.png";
import Cookie3 from "../assets/cookie_3d_3.png";
import Oven from "../assets/oven.png";
import SantaCookie from "../assets/santa_cookie.png";
const textScale = keyframes`
    from {
        transform: scale(0.9, 0.9);
    }
 
    to {
        transform: scale(1, 1);
        transition: transform 0.3s
    }
`;

const textSecondFadeOut = keyframes`
    0%{
        transform: translate(0%, -10%);
        transform: scale(0.9, 0.9);
        opacity: 0;
    }
 
    100% {
        transform: translate(0%, 0%);
        opacity: 1;
    }
`;

const ovenFadeOut = keyframes`

    0% {
       opacity: 0;
       transform: scale(0.7, 0.7);
       left: 30%;
       
    }

    100% {
        transform: rotate(0.01deg);
        left: 50%;
        transform: translate(-50%, 0%);
        opacity: 1;
        -webkit-animation-delay: 7s;
    }
`;

const baking = keyframes` 
    0% {
        animation-delay: 2s;
        transform: scale(1.2, 1.2);
        transform: rotate(0deg);
        left : 25%;
      
    }

    10% {
        transform: rotate(-5deg);
    }

    20% {
        transform: rotate(5deg);
    }

    30% {
        transform: rotate(-5deg);
        opacity: 1;
    }

    50% {
        transform: rotate(0deg);
        opacity: 0.5;
       
    }

    60% {
        transform: rotate(-5deg);
        opacity: 0.3;
        left: 20%;
        
    }

    70% {
        transform: rotate(5deg);
        opacity: 0.1;
        left: 20%;
       
    }

    80% {
        transform: rotate(-5deg);
        opacity: 0;
        left: 20%;
       
    }

    100% {
        transform: rotate(0deg);
        opacity: 0;
        -webkit-animation-delay: 7s;
       
    }
    /* 100% {
        opacity: 0;
        
    } */
`;

export const AnimateCss = css`
    .ovenMove {
        animation-name: ovenFadeOut;
        animation-delay: 2s;
    }
`;

const LeftCookieAnimate = keyframes`
   0% {
        left: 20%;
        opacity : 0;       
    }
    50% {
        left: 25%;     
        transform: rotate(30deg);
        animation-delay : 2s ;
    }
    54% {
        left: 25%;     
        transform: rotate(20deg);
        animation-delay : 2s ;
    }
    57% {
        left: 25%;     
        transform: rotate(30deg);
        animation-delay : 2s ;
    }
    60% {
        left: 30%;     
        transform: rotate(20deg);
        animation-delay : 2s ;
    }
    100% {
        left: 35%;
        transform: rotate(23deg);     
    }

`;

const RightCookieAnimate = keyframes`
   0% {
        right: 20%;
        opacity : 0;       
    }
    50% {
        right: 25%;  
        transform: rotate(-30deg);
        animation-delay : 2s ;
    }
    54% {
        right: 25%;   
        transform: rotate(-0deg);
        animation-delay : 2s ;
    }
    57% {
        right: 25%;      
        transform: rotate(-30deg);
        animation-delay : 2s ;
    }
    60% {
        right: 30%;  
        transform: rotate(-20deg);
        animation-delay : 2s ;
    }
    100% {
        right: 35%;
        transform: rotate(-23deg);     
    }

`;

export const StyledContainer = styled.div`
    position: relative;
    width: 100%;
    //height: calc(var(--vh) * 1 * 100 - 54px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: top;

    h1 {
        font-size: 2rem;
        margin-top: 23vh;
        margin-bottom: 24px;
        animation: ${textScale} 1s;
    }

    h2 {
        font-weight: 400;
        font-size: 24px;
        line-height: 38px;
    }
`;

export const AnimateText = styled.p`
    font-size: 1rem;
    font-family: "Noto Sans KR", sans-serif !important;
    font-style: normal;
    width: 100%;
    text-align: center;
    margin-top: 10px;
    margin-right: 45px;
    margin-left: 45px;
    animation: ${textSecondFadeOut} 1s linear;
`;

export const AnimateText2 = styled.p`
    font-size: 1rem;
    font-family: "Noto Sans KR", sans-serif !important;
    font-style: normal;
    width: 100%;
    text-align: center;
    margin-top: 10px;
    margin-right: 45px;
    margin-left: 45px;
    animation-iteration-count: 1;
    animation: ${textSecondFadeOut} 1s linear;
`;

export const AnimateOvenImg = styled.div`
    position: absolute;
    width: 40%;
    height: 30%;
    z-index: 1;
    bottom: 20%;
    left: -80%;
    background-image: ${`url(${Oven})`};
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    animation-iteration-count: 1;
    animation: ${baking} 2.5s;
`;
export const AnimatCookieImg = styled.div`
    width: 30%;
    height: 35%;
    z-index: 3;
    bottom: 15%;
    left: 50%;
    transform: translate(-50%, 0%);
    position: absolute;
    background-image: ${`url(${SantaCookie})`};
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    animation-iteration-count: 1;
    animation: ${ovenFadeOut} 3s;

    will-change: transform;
    /* animation-delay: 7s; */
`;

const PopCookieImg = styled.div`
    width: 70%;
    height: 70%;
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    @media screen and (min-width: 480px) {
        width: 80%;
        height: 80%;
    }
`;

export const CenterCookie = styled(PopCookieImg)`
    background-image: ${`url(${Cookie1})`};
    width: 80%;
    height: 80%;
    z-index: 10;
    animation: ${textScale} 1s;
    @media screen and (min-width: 480px) {
        width: 95%;
        height: 95%;
    }
`;

export const LeftCookie = styled(PopCookieImg)`
    background-image: ${`url(${Cookie3})`};
    position: absolute;
    left: 35%;
    top: 23%;
    animation: ${LeftCookieAnimate} 3s;
    transform: rotate(23deg);
`;

export const RightCookie = styled(PopCookieImg)`
    background-image: ${`url(${Cookie2})`};
    position: absolute;
    right: 35%;
    top: 23%;
    animation: ${RightCookieAnimate} 3s;
    transform: rotate(-23deg);
`;

export const CookieWrapper = styled.div`
    position: absolute;
    left: 50%;
    top: 65%;
    width: 100%;
    height: 27%;
    transform: translate(-50%, -60%);
`;
