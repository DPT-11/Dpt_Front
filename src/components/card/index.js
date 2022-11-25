import styled, { keyframes } from "styled-components";
import CardBg from "../../assets/card.png";
import LeftArrow from "../../assets/leftIcon.png";
import RightArrow from "../../assets/rightIcon.png";

import { useEffect, useState } from "react";

const StyledCardContainer = styled.div`
    z-index: 10;
    background-image: ${`url(${CardBg})`};
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    position: relative;
    min-width: 90%;
    height: 70%;
    margin: 0 auto;

    img {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        background-repeat: no-repeat;
        background-size: contain;
        background-position: center;
        border: none;
    }
`;

const StyledArrow = styled.div`
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    position: absolute;
    z-index: 100;
    width: 35px;
    height: 35px;
    :hover {
        filter: brightness(0.5);
    }
`;

const StyledRightArrow = styled(StyledArrow)`
    background-image: ${`url(${LeftArrow})`};
    right: 10%;
    top: 50%;
    transform: translate(-10%, -50%);
    @media screen and (min-width: 480px) {
        right: 25%;
        transform: translate(-25%, -50%);
    }
`;

const StyledLeftArrow = styled(StyledArrow)`
    background-image: ${`url(${RightArrow})`};
    left: 14%;
    top: 50%;
    transform: translate(-14%, -50%);
    width: 35px;
    height: 35px;

    @media screen and (min-width: 480px) {
        left: 30%;
        transform: translate(-27%, -50%);
    }
`;

const StyledArrowWrapper = styled.div`
    width: 100%;
    height: 100%;
    transform: matrix(1, -0.06, 0.06, 1, 0, 0);
    z-index: 0;
`;

const StyledName = styled.p`
    position: absolute;
    right: 13%;
    bottom: 9%;
    transform: translate(-5%, 0%);
    font-size: 1.3rem;
    @media screen and (min-width: 480px) {
        right: 30%;
        bottom: 15%;
        font-size: 1.3rem;
    }
`;

const StyledScore = styled.p`
    position: absolute;
    top: 17%;
    left: 20%;
    transform: translate(-35%, -17%);
    font-size: 1.5rem;
    width: 55%;
    text-align: center;
    @media screen and (min-width: 480px) {
        top: 10%;
        left: 25%;
    }
`;

const StyledComment = styled.div`
    position: absolute;
    left: 50%;
    top: 25%;
    transform: translate(-50%, -25%);
    width: 55%;
    text-align: center;
    font-size: 1.5rem;
    @media screen and (min-width: 480px) {
        left: 50%;
        top: 20%;
        transform: translate(-50%, -20%);
    }
`;

export const StyledAnswerButton = styled.button`
    width: 8rem;
    padding: 0.6rem;
    bottom: 9%;
    background-color: black;
    color: white;
    border-radius: 30px;
    font-size: 1rem;
    @media screen and (min-width: 480px) {
        bottom: 5%;
    }
    :hover {
        filter: brightness(0.7);
    }
`;
const cardFadeIn = keyframes`
    0% {
        opacity : 0;
        height: 20vh;
    }
    30%{
        opacity : 0;
    }

    100%{
        opacity : 1;
    }
`;
const StyledAnswerContainer = styled.div`
    width: 80%;
    height: 70vh;
    background-color: white;
    position: relative;
    border-radius: 10px;
    /* box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
        rgba(0, 0, 0, 0.3) 0px 3px 7px -3px; */
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
        rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    animation: ${cardFadeIn} 0.8s;

    @media screen and (min-width: 480px) {
        width: 60%;
    }
    ul {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 1rem;
        gap: 1rem;
        text-align: center;
        font-family: "Noto Sans KR", sans-serif !important;
        font-style: normal;
    }
    li {
        font-family: "Noto Sans KR", sans-serif !important;
        font-style: normal;
        font-size: 0.9rem;
        font-weight: 500;
        margin-top: 01rem;
        color: gray;
    }
    h2 {
        position: absolute;
        bottom: 5%;
        left: 50%;
        text-align: center;
        transform: translate(-50%, -5%);
    }
    h3 {
        position: absolute;
        top: 10%;
        left: 50%;
        text-align: center;
        transform: translate(-50%, -10%);
        font-size: 1.5rem;
    }
    p {
        font-family: "Noto Sans KR", sans-serif !important;
        font-style: normal;
        font-size: 0.8rem;
    }
`;

export const Card = ({ cookieId, list, question, isAnswered }) => {
    const [focusIdx, setFocusIdx] = useState(0);
    const [cookies, setCookieList] = useState(list);
    useEffect(() => {
        console.log(list);
    }, [focusIdx]);
    const total = list.length;
    const from = "";

    return (
        <>
            {isAnswered ? (
                <StyledAnswerContainer>
                    <h3>{cookies[focusIdx].from}님의 답안</h3>
                    <ul>
                        {question.map((i, idx) => {
                            console.log(list[focusIdx].answer[idx]);
                            return (
                                <>
                                    <li key={i + idx}>
                                        Q{idx + 1}. {i}
                                    </li>
                                    <p
                                        key={
                                            i +
                                            list[focusIdx].answer[idx].option
                                        }
                                        isCorrect={
                                            list[focusIdx].answer[idx].isCorrect
                                        }
                                        style={{
                                            color: `${
                                                list[focusIdx].answer[idx]
                                                    .isCorrect
                                                    ? "black"
                                                    : "red"
                                            }`,
                                        }}
                                    >
                                        {list[focusIdx].answer[idx].isCorrect
                                            ? list[focusIdx].answer[idx].option
                                            : list[focusIdx].answer[idx].option}
                                    </p>
                                </>
                            );
                        })}
                    </ul>
                    <h2>Score {cookies[focusIdx].score}/5</h2>
                </StyledAnswerContainer>
            ) : (
                <StyledCardContainer>
                    <StyledArrowWrapper>
                        <StyledComment>{list[focusIdx].comment}</StyledComment>
                        {focusIdx === 0 ? null : (
                            <StyledLeftArrow
                                onClick={() => {
                                    setFocusIdx((prev) => prev - 1);
                                }}
                            />
                        )}
                        {focusIdx < total - 1 ? (
                            <StyledRightArrow
                                onClick={() => {
                                    if (focusIdx < total - 1)
                                        setFocusIdx((prev) => prev + 1);
                                }}
                            />
                        ) : null}
                        <StyledName>From. {cookies[focusIdx].from}</StyledName>
                        <StyledScore>{cookies[focusIdx].score}/5</StyledScore>
                    </StyledArrowWrapper>
                    <img
                        id="card-cookie-img"
                        src={require(`../../assets/cookie${cookieId}_${cookies[focusIdx].score}.png`)}
                        alt="쿠키 결과"
                        style={{ width: "140px" }}
                    />
                </StyledCardContainer>
            )}
        </>
    );
};
