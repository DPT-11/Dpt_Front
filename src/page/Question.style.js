import styled from "styled-components";

export const QuestionWrapper = styled.div`
    position: relative;
    width: 82%;
    padding-top: 2.5rem;
    padding-bottom: 2.5rem;
    text-align: center;
    display: felx;
    justify-content: center;
    align-items: center;
    background: #fffbf7;
    border-radius: 15px;
    p {
        font-size: 1.5rem;
        line-height: 38px;
        color: #060606;
    }
    img {
        width: 26%;
        position: absolute;
        left: -9%;
        top: -40%;
    }
    @media screen and (min-width: 480px) {
        position: relative;
        width: 85%;
        padding-top: 2.5rem;
        padding-bottom: 2.5rem;
        text-align: center;
        display: felx;
        justify-content: center;
        align-items: center;
        background: #fffbf7;
        border-radius: 15px;
        img {
            width: 23%;
            position: absolute;
            left: -9%;
            top: -80%;
        }
    }
`;

export const AnswerWrapper = styled.div`
    width: 82%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1.2rem;

    @media screen and (min-width: 480px) {
        width: 85%;
    }
`;
