import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

import "animate.css";
import { StyledContainer } from "./Home.style";
import { DefaultLayout } from "../styles/common";
import ResultCookie from "../assets/santa_cookie.svg";
import "react-toastify/dist/ReactToastify.css";

import Decoration from "../components/Decoration";
import { CopyButton, KakaoSahreButton } from "../components/button";

import useCopyClipBoard from "../utls/useCopyclipBoard";
import { Toast } from "../components/toast";
import { StyledToastContainer } from "../components/toast/index";

const QuizResult = () => {
    const [isCopy, onCopy] = useCopyClipBoard();
    const [onClickCopy, setOnClickCopy] = useState(false);
    const [toastCnt, setToastCnt] = useState(0);

    useEffect(() => {
        // eslint-disable-next-line no-lone-blocks
        {
            if (toastCnt > 0) return;
            setTimeout(() => {
                if (onClickCopy && toastCnt === 0) {
                    // setToastCnt(1);
                    // success("주소가 복사되었습니다.", {
                    //     position: "bottom-center",
                    //     autoClose: 1000,
                    //     hideProgressBar: true,
                    //     closeOnClick: true,
                    //     pauseOnHover: true,
                    //     draggable: true,
                    //     progress: false,
                    // });
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
    const baseUrl = "localhost:3000";
    const url = `${baseUrl}/quiz/${token}`;
    return (
        <DefaultLayout>
            <StyledContainer>
                <Decoration />
                <h1>퀴즈 준비 완료</h1>
                <img src={ResultCookie}></img>
                <h2 style={{ marginTop: "10%" }}>
                    친구에게 링크를 공유해보세요!
                </h2>
                <div
                    style={{
                        width: "70%",
                        display: "flex",
                        flexDirection: "column",
                        gap: "2rem",
                        marginTop: "2.5rem",
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
                    <KakaoSahreButton />
                </div>
                <StyledToastContainer limit={0} />
            </StyledContainer>
        </DefaultLayout>
    );
};

function success(nodeOrMsg) {
    return toast(
        <div style={{ display: "flex", gap: "5px" }}>
            {/* // <img src={CopyIc} /> */}
            <div>{nodeOrMsg}</div>
        </div>
    );
}

export default QuizResult;
