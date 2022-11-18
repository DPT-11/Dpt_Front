import styled from "styled-components";
import FocusItem from "../../assets/progress_focus.svg";
import UnfocusItem from "../../assets/progress_none.svg";

export const ProgressBarWrapper = styled.div`
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: center;
    gap: 0.2rem;
`;

export const ProgressItem = styled.div`
    width: 30px;
    height: 30px;
    background: ${(props) => `url(${getItemImg(props)}) no-repeat top center`};
    background-size: contain;
`;

const getItemImg = (props) => {
    return props.focusItem ? FocusItem : UnfocusItem;
};
