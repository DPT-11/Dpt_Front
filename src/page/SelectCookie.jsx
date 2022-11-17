import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

import { CookieItem } from "../components/selectedCookie";

import Oven from "../assets/oven.png";
import Cookie_ver_1 from "../assets/cookie_ver_1.svg";
import Pan from "../assets/pan.png";
import "animate.css";
import "./SelectCookie.style.css";

const SelectCookie = () => {
    const [selectedCookie, setSelectCookie] = useState(null);
    const [buttonState, setButtonstate] = useState(true);
    const { res, setRes } = useState([
        {
            questionId: 1,
            question: "무슨 영화",
            options: ["멜로", "스릴러", "코미디"], //예시 답안
        },
        {
            questionId: 2,
            question: "무슨 노래",
            options: ["", ""],
        },
    ]);

    const { token } = useParams();
    const navigator = useNavigate();

    useEffect(() => {
        console.log(selectedCookie);
    }, [selectedCookie]);

    const sendCookieData = () => {
        //TODO 쿠키 설정 API 연결
        // axios.post({ token: token, cookieId: selectedCookie }).then((res) => {
        //     res = { ...res.data };
        // });
        setTimeout(() => {
            setButtonstate(false);
        }, 1000);
        setTimeout(() => {
            navigator(`/${token}/question`, {
                state: {
                    res: [
                        {
                            questionId: 1,
                            question: "무슨 영화",
                            options: ["멜로", "스릴러", "코미디"], //예시 답안
                        },
                        {
                            questionId: 2,
                            question: "무슨 노래",
                            options: ["", ""],
                        },
                    ],
                    cookieId: selectedCookie,
                },
            });
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
                <CookieItem
                    className="cookie-item cookie-first"
                    src={Cookie_ver_1}
                    selected={selectedCookie === null || selectedCookie === 1}
                    onClick={() => setSelectCookie(1)}
                />
                <CookieItem
                    className="cookie-item cookie-second"
                    src={Cookie_ver_1}
                    selected={selectedCookie === null || selectedCookie === 2}
                    onClick={() => setSelectCookie(2)}
                />
                <CookieItem
                    className="cookie-item cookie-third"
                    src={Cookie_ver_1}
                    selected={selectedCookie === null || selectedCookie === 3}
                    onClick={() => setSelectCookie(3)}
                />
            </div>
            <button
                disabled={!buttonState || selectedCookie == null}
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
                    setButtonstate(false);
                }}
            >
                {selectedCookie !== null
                    ? buttonState
                        ? "쿠키 선택 완료"
                        : ""
                    : "쿠키를 선택해주세요"}
            </button>
        </div>
    );
};

export default SelectCookie;
