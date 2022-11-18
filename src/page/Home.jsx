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
} from "./Home.style";
import Decoration from "../components/Decoration";
import { MainButton } from "../components/button";
import { DefaultLayout } from "../styles/common";

const Home = () => {
    const [focusStep, setFocusStep] = useState(0);
    const [firstTextState, setFirstState] = useState(false);
    const [secondTextState, setSecondState] = useState(false);
    const [thirdTextState, setThirdState] = useState(false);
    const [ovenState, setOvenState] = useState(false);

    const navigator = useNavigate();

    const onClickGotoCreate = () => {
        navigator("/create");
    };

    useEffect(() => {}, [focusStep]);
    useEffect(() => {
        setFirstState(false);
        setSecondState(false);
        setThirdState(false);
        setOvenState(false);
        setTimeout(() => {
            setFirstState(true);
        }, 1000);
        setTimeout(() => {
            setFirstState(false);
            setOvenState(true);
            setSecondState(true);
        }, 4000);
        setTimeout(() => {
            setSecondState(false);
            setThirdState(true);
        }, 7000);
    }, []);
    return (
        <DefaultLayout>
            <StyledContainer>
                <Decoration />
                <h1>너가 만든 쿠키</h1>

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
                        style={{ display: `${firstTextState ? "" : "none"}` }}
                    >
                        {`당신은 어떤 크리스마스를 보내고 싶으신가요?`}
                    </AnimateText>
                    <AnimateText
                        style={{ display: `${secondTextState ? "" : "none"}` }}
                    >
                        나만의 퀴즈를 만들면서 쿠키를 구워보아요
                    </AnimateText>
                    <AnimateText2
                        style={{ display: `${thirdTextState ? "" : "none"}` }}
                    >
                        {"그리고 친구에게 공유해 "}
                    </AnimateText2>
                    <AnimateText2
                        style={{ display: `${thirdTextState ? "" : "none"}` }}
                    >
                        {"나를 가장 잘 아는 친구를 확인해보세요!"}
                    </AnimateText2>
                </div>

                <AnimateOvenImg
                    style={{ display: `${ovenState ? "" : "none"}` }}
                />
                <AnimatCookieImg
                    style={{ display: `${ovenState ? "" : "none"}` }}
                />
                <div
                    style={{
                        width: "100%",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        position: "absolute",
                        bottom: "5%",
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
