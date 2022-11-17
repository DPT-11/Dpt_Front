import styled from "styled-components";
import colors from "../../styles/colors";

const StyledMainButton = styled.div`
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
    :disabled {
    }
`;

const StyledSecondButton = styled.div`
    z-index: 5;
    border-radius: 20px;
    color: white;
    background-color: ${colors.mainRed};
    text-align: center;
    font-size: 1.1rem;
    line-height: 38px;
    width: 100%;
    :hover {
        color: ${colors.mainRed};
        background-color: white;
    }
    :disabled {
    }
`;

export const MainButton = ({ text, onClick }) => {
    return (
        <StyledMainButton onClick={() => onClick()}>{text}</StyledMainButton>
    );
};

export const SecondButton = ({ text, onClick }) => {
    return (
        <StyledSecondButton n onClick={() => onClick()}>
            {text}
        </StyledSecondButton>
    );
};
