import React, { useState, useEffect } from "react";
//import "animate.css";
import { useParams, useNavigate } from "react-router-dom";
//import axios from "axios";
import {
    StyledContainer,
    AnimateText,
    AnimateText2,
    AnimateOvenImg,
    AnimatCookieImg,
    CookieCss,
    CenterCookie,
    CookieWrapper,
    LeftCookie,
    RightCookie,
} from "./Home.style";
import Decoration from "../components/Decoration";
import { MainButton } from "../components/button";
import { DefaultLayout } from "../styles/common";

const Home = () => {
    const [focusStep, setFocusStep] = useState(0);
    const [firstTextState, setFirstState] = useState(false);
    const [secondTextState, setSecondState] = useState(false);
    const [thirdTextState, setThirdState] = useState(false);
    const [firstCookie, setfirstCookie] = useState(false);
    const [secondCookie, setSecondCookie] = useState(false);

    const navigator = useNavigate();

    const onClickGotoCreate = () => {
        //TODO API 호출
        navigator("/create");
    };

    useEffect(() => {}, [focusStep]);
    useEffect(() => {
        setFirstState(false);
        setSecondState(false);
        setThirdState(false);
        setfirstCookie(false);
        setSecondCookie(false);
        setTimeout(() => {
            setFirstState(true);
        }, 1000);
        setTimeout(() => {
            setFirstState(false);
            setfirstCookie(true);
            setSecondState(true);
        }, 4000);
        setTimeout(() => {
            setSecondCookie(true);
        }, 5800);
        setTimeout(() => {
            setSecondState(false);
            setThirdState(true);
        }, 7500);
    }, []);
    return (
        <DefaultLayout>
            <StyledContainer>
                <Decoration />
                <h1>너가 만든 쿠키</h1>
                {
                    <div
                        style={{
                            height: "10%",
                            width: "100%",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <AnimateText
                            style={{
                                display: `${firstTextState ? "" : "none"}`,
                            }}
                        >
                            {`당신은 어떤 크리스마스를 보내고 싶으신가요?`}
                        </AnimateText>
                        <AnimateText
                            style={{
                                display: `${secondTextState ? "" : "none"}`,
                            }}
                        >
                            나만의 퀴즈를 만들면서 쿠키를 구워보아요
                        </AnimateText>
                        <AnimateText2
                            style={{
                                display: `${thirdTextState ? "" : "none"}`,
                            }}
                        >
                            {"그리고 친구에게 공유해 "}
                        </AnimateText2>
                        <AnimateText2
                            style={{
                                display: `${thirdTextState ? "" : "none"}`,
                            }}
                        >
                            {"나를 가장 잘 아는 친구를 확인해보세요!"}
                        </AnimateText2>
                    </div>
                }
                <CookieWrapper>
                    <div
                        className="cookie-img"
                        style={{
                            position: "relative",
                            height: "100%",
                            width: "100%",
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <LeftCookie
                            style={{ display: `${firstCookie ? "" : "none"}` }}
                        />
                        <CenterCookie />
                        <RightCookie
                            style={{
                                display: `${secondCookie ? "" : "none"}`,
                            }}
                        />
                    </div>
                </CookieWrapper>
                {/* <div
                    className="cookie-img"
                    style={{
                        height: "30%",
                        width: "100%",
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <CenterCookie />
                </div> */}
                <div
                    style={{
                        width: "100%",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        position: "absolute",
                        bottom: "0%",
                        visibility: `${thirdTextState ? "" : "hidden"}`,
                    }}
                >
                    <div style={{ width: "70%", marginTop: "5vh" }}>
                        <MainButton
                            text={"퀴즈생성하기"}
                            onClick={onClickGotoCreate}
                        />
                    </div>

                    <div style={{ width: "70%", marginTop: "3vh" }}>
                        <MainButton
                            text={"내 쿠키 보러가기"}
                            onClick={onClickGotoCreate}
                        />
                    </div>
                </div>
            </StyledContainer>
        </DefaultLayout>
    );
};

export default Home;
