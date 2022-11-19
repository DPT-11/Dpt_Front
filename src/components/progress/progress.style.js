import styled from "styled-components";
import FocusItem from "../../assets/progress_focus.png";
import UnfocusItem from "../../assets/progress_unfocus.png";

export const ProgressBarWrapper = styled.div`
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: center;
    gap: 0.2rem;
`;

export const ProgressItem = styled.div`
    width: 35px;
    height: 40px;
    background: ${(props) => `url(${getItemImg(props)}) no-repeat top center`};
    background-size: contain;
`;

const getItemImg = (props) => {
    return props.focusItem ? FocusItem : UnfocusItem;
};
