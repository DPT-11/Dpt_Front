import styled from "styled-components";
import colors from "../../styles/colors";
import Xbutton from "../../assets/x.svg";
import Kakao from "../../assets/kakao.png";
import CopyImg from "../../assets/copy.png";
import { useState, useEffect } from "react";
import {
    StyledMainButton,
    StyledSecondButton,
    StyledAnswerButton,
    StyledAddButton,
    StyledKaKaoButton,
    StyledCopyButton,
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
    useEffect(() => {}, []);
    return (
        <StyledAddButton onClick={onClick} visible={isVisible}>
            +
        </StyledAddButton>
    );
};

export const KakaoSahreButton = ({ url, onClick }) => {
    return (
        <StyledKaKaoButton onClick={() => onClick()}>
            카카오톡 공유하기
            <img src={Kakao} />
        </StyledKaKaoButton>
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
