import styled from "styled-components";
import Cookie4 from "../../assets/1.png";
import Cookie2 from "../../assets/3.png";
import Cookie1 from "../../assets/4.png";
import Cookie3 from "../../assets/5.png";
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
    width: 80%;
    height: 60%;
    margin: 0 auto;

    img {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        background-repeat: no-repeat;
        background-size: contain;
        background-position: center;
        height: 40%;
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
    right: 7%;
    top: 50%;
    transform: translate(-7%, -50%);
    @media screen and (min-width: 480px) {
        right: 25%;
        transform: translate(-25%, -50%);
    }
`;

const StyledLeftArrow = styled(StyledArrow)`
    background-image: ${`url(${RightArrow})`};
    left: 5%;
    top: 50%;
    transform: translate(-5%, -50%);
    width: 35px;
    height: 35px;

    @media screen and (min-width: 480px) {
        left: 25%;
        transform: translate(-25%, -50%);
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
    font-size: 1.5rem;
    @media screen and (min-width: 480px) {
        right: 27%;
        bottom: 5%;
        font-size: 1.5rem;
    }
`;

const StyledScore = styled.p`
    position: absolute;
    left: 25%;
    top: 10%;
    /* transform: translate(-25%, -10%); */
    font-size: 1.5rem;

    @media screen and (min-width: 480px) {
        right: 30%;
        bottom: 10%;
    }
`;

export const Card = ({ list }) => {
    const [focusIdx, setFocusIdx] = useState(0);
    const [cookies, setCookieList] = useState(list);
    const ImgList = [Cookie1, Cookie2, Cookie3, Cookie4];
    useEffect(() => {
        console.log(focusIdx);
    }, [focusIdx]);
    const total = list.length;
    const from = "";

    return (
        <StyledCardContainer>
            <StyledArrowWrapper>
                {focusIdx === 0 ? null : (
                    <StyledLeftArrow
                        onClick={() => {
                            console.log("click left");
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
            </StyledArrowWrapper>
            <StyledScore>{cookies[focusIdx].score}/5</StyledScore>
            {}
            <img id="card-cookie-img" src={ImgList[focusIdx]} />
        </StyledCardContainer>
    );
};
