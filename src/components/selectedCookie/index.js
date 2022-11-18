import styled from "styled-components";

export const CookieItem = styled.img`
    src: ${(props) => props.src};
    filter: brightness(${(props) => isSelected(props)});
    :hover {
        transform: scale(1.3, 1.3);
        transition: transform 0.3s;
        filter: brightness(1);
    }
`;

const isSelected = (props) => {
    return props.selected ? "1" : "70%";
};
