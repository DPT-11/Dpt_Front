import styled from "styled-components";
import colors from "../../styles/colors";
import Xbutton from "../../assets/x.svg";
import HomeImg from "../../assets/home.png";

export const StyledMainButton = styled.button`
    z-index: 100;
    background-color: white;
    border-radius: 20px;
    color: ${colors.mainRed};
    text-align: center;
    font-size: 1.1rem;
    line-height: 38px;
    width: 100%;

    &:disabled {
        color: white;
        background-color: ${colors.mainRed};
    }
    @media screen and (min-width: 480px) {
        :hover {
            color: white;
            background-color: ${colors.mainRed};
        }
    }
`;

export const StyledSecondButton = styled(StyledMainButton)`
    color: white;
    background-color: ${colors.mainRed};
    z-index: 100;
    &:disabled {
        color: ${colors.mainRed};
        background-color: white;
    }

    @media screen and (min-width: 480px) {
        :hover {
            background-color: white;
            color: ${colors.mainRed};
        }
    }
`;

export const StyledAnswerButton = styled(StyledMainButton)`
    position: relative;
    background-color: ${(props) =>
        props.ischecked ? colors.mainGreen : "transparent"};
    color: ${(props) => (props.ischecked ? "white" : "black")};
    border: ${(props) => (props.ischecked ? "" : `black 1px solid`)};

    :hover {
        background-color: ${(props) =>
            props.ischecked ? colors.mainGreen : "transparent"};
        color: ${(props) => (props.ischecked ? "white" : "black")};
        border: ${(props) => (props.ischecked ? "" : `black 1px solid`)};
    }
    :disabled {
    }

    img {
        z-index: 10;
        padding: 2rem;
        position: absolute;
        right: 0%;
        top: 50%;
        transform: translate(0, -50%);
        display: ${(props) =>
            props.ischecked || props.limit ? "none" : `block`};
    }
`;

export const StyledAddButton = styled(StyledMainButton)`
    color: ${colors.bgColor};
    background-color: rgba(92, 92, 92, 0.15);
    font-size: 3rem;
    visibility: ${(props) => (props.visible ? "visible" : "hidden")};

    :hover {
        background-color: black;
    }
`;

export const StyledKaKaoButton = styled.div`
    z-index: 5;
    position: relative;
    color: black;
    border-radius: 20px;
    background-color: #ffdc00;
    text-align: center;
    font-size: 1.1rem;
    line-height: 38px;
    width: 100%;
    padding: 0.3rem;

    img {
        position: absolute;
        left: 10%;
        top: 50%;
        margin-top: 2px;
        transform: translate(-5%, -50%);
        width: 1.5rem;
    }

    :hover {
        filter: brightness(0.8);
    }
`;

export const StyledCopyButton = styled(StyledKaKaoButton)`
    text-decoration: underline;
    background-color: white;
    font-size: 0.9rem;
    img {
        margin-top: 0px;
        width: 1.5rem;
        left: 6%;
    }
`;

export const StyledHomeButton = styled.img`
    width: 48px;
    height: 48px;
`;
