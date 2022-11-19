import styled from "styled-components";
import CardBg from "../../assets/card.png";
import Cookie from "../../assets/cookie_ver_3.png";
import LeftArrow from "../../assets/leftIcon.png";
import RightArrow from "../../assets/rightIcon.png";

import { useState } from "react";

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
    z-index: 20;
    background-repeat: no-repeat;
    background-size: contain;
    position: absolute;

    :hover {
        filter: brightness(0.8);
    }
`;

const StyledRightArrow = styled(StyledArrow)`
    background-image: ${`url(${LeftArrow})`};
    right: 7%;
    top: 50%;
    transform: translate(-7%, -50%);
    width: 35px;
    height: 35px;
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
`;

const StyledName = styled.p`
    position: absolute;
    right: 13%;
    bottom: 13%;
    transform: translate(-5%, 0%);

    @media screen and (min-width: 480px) {
        right: 30%;
        bottom: 10%;
    }
`;

export const Card = ({ list }) => {
    const [focusIdx, setFocusIdx] = useState(0);
    const total = list ? list.length : 4;
    const from = "";

    return (
        <StyledCardContainer>
            <StyledArrowWrapper>
                {focusIdx === 0 ? null : (
                    <StyledLeftArrow
                        onClick={() => {
                            if (focusIdx > 0) setFocusIdx((prev) => prev - 1);
                        }}
                    />
                )}
                {focusIdx === total ? (
                    <StyledRightArrow
                        onClick={() => {
                            if (focusIdx < total - 1)
                                setFocusIdx((prev) => prev + 1);
                        }}
                    />
                ) : null}
                <StyledName>From. {from}</StyledName>
            </StyledArrowWrapper>
            <img id="card-cookie-img" src={Cookie} />
        </StyledCardContainer>
    );
};
