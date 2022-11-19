import "animate.css";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import "react-toastify/dist/ReactToastify.css";
import ResultCookie from "../assets/santa_cookie.svg";
import { StyledContainer } from "./Home.style.js";

import { CopyButton, KakaoSahreButton } from "../components/button";
import Decoration from "../components/Decoration";

import { GoHomeButton } from "../components/button/index";
import { Toast } from "../components/toast";
import { StyledToastContainer } from "../components/toast/index";
import useCopyClipBoard from "../utls/useCopyclipBoard";

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
    const baseUrl = "http://localhost:3000";
    const url = `${baseUrl}/quiz/${token}`;
    return (
        <div className="kjw_body">
            <div className="kjw_main">
                <KjwResult name={name} result={result} />
            </div>
        </div>
    );
}
export default QuizResult;
