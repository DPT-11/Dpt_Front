import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { SecondButton } from "../components/button";
import { CookieItem } from "../components/selectedCookie";

import Cookie_ver_1 from "../assets/cookie_ver_1.svg";
import Left from "../assets/left_glove.png";
import Oven from "../assets/oven.png";
import Pan from "../assets/pan.png";
import Right from "../assets/right_glove.png";

import "animate.css";
import { DefaultLayout } from "../styles/common";
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
        console.log("buttonState", buttonState);
    }, [selectedCookie, buttonState]);

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
                            options: ["멜로1", "스릴러", "코미디"], //예시 답안
                        },
                        {
                            questionId: 2,
                            question: "무슨 노래1",
                            options: ["멜로2", "스릴러", "코미디"],
                        },
                        {
                            questionId: 3,
                            question: "무슨 노래3",
                            options: ["멜로3", "스릴러", "코미디"],
                        },
                        {
                            questionId: 4,
                            question: "무슨 노래4",
                            options: ["멜로4", "스릴러", "코미디"],
                        },
                        {
                            questionId: 5,
                            question: "무슨 노래5",
                            options: ["멜로5", "스릴러", "코미디"],
                        },
                    ],
                    cookieId: selectedCookie,
                },
            });
        }, 7000);
    };

    const animateCSS = (element, animation, prefix = "animate__") =>
        new Promise((resolve, reject) => {
            const animationName = `${prefix}${animation}`;
            const nodes = document.querySelectorAll(element);
            nodes.forEach((node) => {
                node.classList.add(`${prefix}animated`, animationName);
            });

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
        <DefaultLayout>
            <div className="container">
                <h1
                    className="cookie-select-title"
                    style={{
                        fontSize: `2rem`,
                        color: "black",
                        padding: "1.5rem",
                    }}
                >
                    {buttonState ? "어떤 쿠키를 만들까요?" : "오븐 예열 중..."}
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
                        selected={
                            selectedCookie === null || selectedCookie === 1
                        }
                        onClick={() => setSelectCookie(1)}
                    />
                    <CookieItem
                        className="cookie-item cookie-second"
                        src={Cookie_ver_1}
                        selected={
                            selectedCookie === null || selectedCookie === 2
                        }
                        onClick={() => setSelectCookie(2)}
                    />
                    <CookieItem
                        className="cookie-item cookie-third"
                        src={Cookie_ver_1}
                        selected={
                            selectedCookie === null || selectedCookie === 3
                        }
                        onClick={() => setSelectCookie(3)}
                    />
                </div>

                <div
                    style={{
                        width: "20%",
                        zIndex: "100",
                        visibility: `${
                            !buttonState && selectedCookie ? "hidden" : "none"
                        }`,
                    }}
                >
                    <SecondButton
                        text={"확인"}
                        disabled={!buttonState || selectedCookie == null}
                        onClick={() => {
                            setButtonstate(false);
                            setTimeout(() => {
                                animateCSS(".glove-container", "glove");
                            }, 500);
                            setTimeout(() => {
                                animateCSS(".oven-pan-container", "pan");
                                animateCSS(".cookie-item", "pan");
                                animateCSS(".oven", "oven");
                                animateCSS(".cookie-select-title", "title");

                                sendCookieData(selectedCookie);
                            }, 1500);
                        }}
                    />
                </div>
                <div className="glove-container">
                    <img className="glove" src={Left} />
                    <img className="glove" src={Right} />
                </div>
            </div>
        </DefaultLayout>
    );
};

export default SelectCookie;
