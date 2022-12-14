import CopyImg from "../../assets/copy.png";
import HomeImg from "../../assets/home.png";
import Kakao from "../../assets/kakao.png";
import Xbutton from "../../assets/x.svg";

import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import InputField from "../inputField";
import {
    StyledAddButton,
    StyledAnswerButton,
    StyledCommentButton,
    StyledCopyButton,
    StyledHomeButton,
    StyledKaKaoButton,
    StyledMainButton,
    StyledSecondButton,
} from "./style";

export const MainButton = ({ text, disabled, onClick }) => {
    return (
        <StyledMainButton disabled={disabled} onClick={() => onClick()}>
            {text}
        </StyledMainButton>
    );
};

export const SecondButton = ({ text, disabled, onClick }) => {
    return (
        <StyledSecondButton disabled={disabled} onClick={() => onClick()}>
            {text}
        </StyledSecondButton>
    );
};

export const AnswerButton = ({
    text,
    checkListener,
    deleteListener,
    isAnswered, //체크한 답안이 들어감
    limit,
}) => {
    const [isChecked, setIsChecked] = useState(isAnswered === text);
    let deleteAction = false;
    useEffect(() => {
        if (isAnswered === null || isAnswered !== text) {
            setIsChecked(false);
        } else if (isAnswered && isAnswered == text) {
            setIsChecked(true);
        }
    }, [isAnswered]);

    useEffect(() => {}, [limit]);
    return (
        <StyledAnswerButton
            ischecked={isChecked}
            onClick={() => {
                if (
                    !deleteAction &&
                    (isAnswered === null || isAnswered !== text)
                ) {
                    setIsChecked(true);
                    checkListener(text);
                } else {
                    setIsChecked(false);
                }
            }}
            limit={limit}
        >
            {text}
            <img
                src={Xbutton}
                ischecked={isChecked}
                limit={limit}
                onClick={() => {
                    deleteAction = true;
                    deleteListener(text);
                }}
            />
        </StyledAnswerButton>
    );
};

export const AddButton = ({ onClick, isVisible }) => {
    return (
        <StyledAddButton onClick={onClick} visible={isVisible}>
            +
        </StyledAddButton>
    );
};

export const CopyButton = ({ url, onClick }) => {
    return (
        <StyledCopyButton onClick={() => onClick()}>
            링크복사
            <img src={CopyImg} />
        </StyledCopyButton>
    );
};

export const KakaoSahreButton = ({ url }) => {
    useEffect(() => {
        createKakaoButton();
    }, []);
    const createKakaoButton = (quizUrl) => {
        if (window.Kakao) {
            const kakao = window.Kakao;
            // 중복 initialization 방지
            if (!kakao.isInitialized()) {
                kakao.init(process.env.REACT_APP_KAKAO_KEY);
            }

            kakao.Share.createDefaultButton({
                container: "#kakao-link-btn",
                objectType: "feed",
                content: {
                    title: "너가 만든 쿠키",
                    description: "#크리스마스#퀴즈#쿠키꾸미기 ",
                    imageUrl:
                        "https://velog.velcdn.com/images/hyom/post/81874a67-5a1a-4d19-ae17-4a8af172c051/image.png", // i.e. process.env.FETCH_URL + '/logo.png'
                    link: {
                        mobileWebUrl: window.location.href.replace(
                            window.location.href,
                            url
                        ),
                        webUrl: window.location.href.replace(
                            window.location.href,
                            url
                        ),
                    },
                },
            });
        }
    };
    return (
        <StyledKaKaoButton
            id="kakao-link-btn"
            url={url}
            onClick={() => {
                createKakaoButton(url);
            }}
        >
            카카오톡 공유하기
            <img src={Kakao} />
        </StyledKaKaoButton>
    );
};

export const GoHomeButton = () => {
    const navigator = useNavigate();
    return (
        <StyledHomeButton
            className="btn"
            src={HomeImg}
            onClick={() => {
                navigator("/");
            }}
        ></StyledHomeButton>
    );
};

export const CommentButton = ({ onClickSubmit, inputFocus }) => {
    const [msg, setMsg] = useState("");
    const [focusStatus, setFocusStatus] = useState(inputFocus);
    return (
        <>
            {focusStatus ? (
                <div style={{ display: "flex", width: "100%" }}>
                    <InputField
                        hint={"메리크리스마스(최대 7자)"}
                        type={"text"}
                        value={msg}
                        listener={setMsg}
                        validation={(v) => {
                            return v.length <= 7;
                        }}
                    />
                    <button
                        style={{ width: "20%" }}
                        onClick={() => {
                            setFocusStatus(false);
                            onClickSubmit(msg);
                        }}
                    >
                        작성완료
                    </button>
                </div>
            ) : (
                <StyledCommentButton
                    onClick={() => {
                        setFocusStatus(true);
                    }}
                >
                    {msg ? msg : "크리스마스 메세지 남기기"}
                </StyledCommentButton>
            )}
        </>
    );
};
