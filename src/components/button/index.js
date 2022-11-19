import CopyImg from "../../assets/copy.png";
import HomeImg from "../../assets/home.png";
import Kakao from "../../assets/kakao.png";
import Xbutton from "../../assets/x.svg";

import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import {
    StyledAddButton,
    StyledAnswerButton,
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
            {url}
            <img src={CopyImg} />
        </StyledCopyButton>
    );
};

export const KakaoSahreButton = ({ url }) => {
    useEffect(() => {
        console.log(url);
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
                    title: "타이틀",
                    description: "#멋쟁이 사자처럼 #연합해커톤",
                    imageUrl:
                        "https://s3.ap-northeast-2.amazonaws.com/img.stibee.com/11863_list_126266_subscriptions_header_image.png?v=1624414986", // i.e. process.env.FETCH_URL + '/logo.png'
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
            src={HomeImg}
            onClick={() => {
                navigator("/");
            }}
        ></StyledHomeButton>
    );
};
