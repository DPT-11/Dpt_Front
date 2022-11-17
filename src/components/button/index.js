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

export const MainButton = ({ text }) => {
    return <StyledMainButton>{text}</StyledMainButton>;
};
