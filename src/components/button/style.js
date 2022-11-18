import styled from "styled-components";
import colors from "../../styles/colors";
import Xbutton from "../../assets/x.svg";
export const StyledMainButton = styled.button`
    z-index: 5;
    background-color: white;
    border-radius: 20px;
    color: ${colors.mainRed};
    text-align: center;
    font-size: 1.1rem;
    line-height: 38px;
    width: 100%;
    :hover {
        color: white;
        background-color: ${colors.mainRed};
    }
    &:disabled {
        color: white;
        background-color: ${colors.mainRed};
    }
`;

export const StyledSecondButton = styled(StyledMainButton)`
    color: white;
    background-color: ${colors.mainRed};

    :disabled {
        color: ${colors.mainRed};
        background-color: white;
    }

    :hover {
        background-color: white;
        color: ${colors.mainRed};
    }
`;
const setXImgVisible = (props) => {};
export const StyledAnswerButton = styled(StyledMainButton)`
    position: relative;
    background-color: ${(props) =>
        props.ischecked ? colors.mainGreen : "transparent"};
    color: ${(props) => (props.ischecked ? "white" : "black")};
    border: ${(props) => (props.ischecked ? "" : `black 1px solid`)};

    :hover {
        /*  background-color: white;
    color: ${colors.mainGreen};
    border: ${colors.mainGreen} 1px solid;
  img {
        visibility: hidden;
    } */
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

        ${(props) => setXImgVisible(props)}
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
        transform: translate(-10%, -50%);
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
    }
`;
