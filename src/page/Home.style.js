import React from "react";
import styled, { keyframes, css } from "styled-components";

import Oven from "../assets/oven.png";
import SantaCookie from "../assets/santa_cookie.svg";

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

export const StyledContainer = styled.div`
    position: relative;
    width: 100%;
    height: calc(var(--vh) * 1 * 100 - 54px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: top;

    h1 {
        font-size: 2rem;
        margin-top: 210px;
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
    /* animation-delay: 2s; */
`;
export const AnimatCookieImg = styled.div`
    width: 25%;
    height: 35%;
    z-index: 3;
    bottom: 20%;
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
