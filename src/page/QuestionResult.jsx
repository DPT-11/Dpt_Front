import "animate.css";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import "react-toastify/dist/ReactToastify.css";
import ResultCookie from "../assets/cookie_3d_1.png";
import { StyledContainer } from "./Home.style.js";

import { CopyButton, KakaoSahreButton } from "../components/button";
import Decoration from "../components/Decoration";

import { useLocation } from "react-router";
import { GoHomeButton } from "../components/button/index";
import { Toast } from "../components/toast";
import { StyledToastContainer } from "../components/toast/index";
import useCopyClipBoard from "../utls/useCopyclipBoard";

const QuestionResult = () => {
    const [isCopy, onCopy] = useCopyClipBoard();
    const [onClickCopy, setOnClickCopy] = useState(false);
    const [toastCnt, setToastCnt] = useState(0);

    const { state } = useLocation();

    useEffect(() => {
        // eslint-disable-next-line no-lone-blocks
        {
            if (toastCnt > 0) return;
            setTimeout(() => {
                if (onClickCopy && toastCnt === 0) {
                    Toast("링크가 복사되었습니다");
                    setTimeout(() => {
                        setOnClickCopy(false);
                        setToastCnt(0);
                    }, 1200);
                }
            }, 90);
        }
    }, [onClickCopy]);

    const { token } = useParams();
    const baseUrl = "https://your-christmas-cookie.netlify.app";
    const url = `${baseUrl}?host=1`;
    return (
        <StyledContainer>
            <Decoration />
            <h1>퀴즈 준비 완료</h1>
            <img
                style={{
                    width: "25%",
                }}
                src={ResultCookie}
            ></img>
            <h2 style={{ marginTop: "10%" }}>친구에게 링크를 공유해보세요!</h2>
            <div
                style={{
                    width: "70%",
                    height: "30%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "2rem",
                    marginTop: "2.5rem",
                    paddingBottom: "2rem",
                }}
            >
                <CopyButton
                    url={url}
                    onClick={() => {
                        console.log("copy");
                        onCopy(url);
                        setOnClickCopy(true);
                    }}
                />
                <KakaoSahreButton url={url} />
                <GoHomeButton />
            </div>
            <StyledToastContainer limit={0} />
        </StyledContainer>
    );
};

export default QuestionResult;
