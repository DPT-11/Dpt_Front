import React, { useState } from "react";
import { useParams, useNavigate, Navigate } from "react-router-dom";
import axios from "axios";
import Oven from "../assets/oven.png";
import Cookie_ver_1 from "../assets/cookie_ver_1.svg";
import Pan from "../assets/pan.png";
import "animate.css";
import "./SelectCookie.style.css";

const SelectCookie = () => {
    const [selectedCookie, setSelectCookie] = useState(null);
    const [buttonState, setButtonstate] = useState(true);
    const { res } = useState(null);

    const { token } = useParams();
    const navigator = useNavigate();

    const sendCookieData = () => {
        //TODO 쿠키 설정 API 연결
        axios.post({ token: token, cookieId: selectedCookie }).then((res) => {
            res = { ...res.data };
        });
        setTimeout(() => {
            setButtonstate(false);
        }, 1000);
        setTimeout(() => {
            navigator("/");
        }, 7000);
    };

    const animateCSS = (element, animation, prefix = "animate__") =>
        // We create a Promise and return it
        new Promise((resolve, reject) => {
            const animationName = `${prefix}${animation}`;
            const nodes = document.querySelectorAll(element);
            nodes.forEach((node) => {
                node.classList.add(`${prefix}animated`, animationName);
            });

            // When the animation ends, we clean the classes and resolve the Promise
            function handleAnimationEnd(event) {
                console.log(event);
                if (animation === "oven__fadeOut") {
                    event.stopPropagation();
                    nodes.forEach((node) => {
                        node.classList.remove(
                            `${prefix}animated`,
                            animationName
                        );
                    });
                }
            }

            nodes.forEach((node) => {
                node.addEventListener(
                    "animationend" + animation,
                    handleAnimationEnd,
                    {
                        once: true,
                    }
                );
            });
        });

    return (
        <div className="container">
            <h1
                className="cookie-select-title"
                style={{
                    fontSize: `1.6rem`,
                    color: "black",
                    padding: "1.5rem",
                }}
            >
                {buttonState ? "어떤 쿠키를 구울까요?" : "오븐 예열 중..."}
            </h1>
            <img className="oven" src={Oven}></img>
            <div
                draggable={true}
                className="oven-pan-container"
                style={{ backgroundImage: `url(${Pan})` }}
            >
                <img
                    className="cookie-item cookie-first"
                    src={Cookie_ver_1}
                    onClick={() => setSelectCookie(1)}
                ></img>
                <img
                    className="cookie-item cookie-second"
                    src={Cookie_ver_1}
                    onClick={() => setSelectCookie(2)}
                ></img>
                <img
                    className="cookie-item cookie-third"
                    src={Cookie_ver_1}
                    onClick={() => setSelectCookie(3)}
                ></img>
            </div>
            <button
                disabled={!buttonState}
                style={{
                    fontSize: `1.2rem`,
                    color: "black",
                    padding: "1.5rem",
                }}
                onClick={() => {
                    animateCSS(".oven-pan-container", "pan");
                    animateCSS(".cookie-item", "pan");
                    animateCSS(".oven", "oven");
                    animateCSS(".cookie-select-title", "title");
                    sendCookieData(selectedCookie);
                }}
            >
                {buttonState ? "쿠키 선택 완료" : ""}
            </button>
        </div>
    );
};

export default SelectCookie;
