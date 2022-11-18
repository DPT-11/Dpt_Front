import React from "react";
import DecorationImg from "../../assets/decoration.svg";

import styled from "styled-components";

const StyledDecorationDiv = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-position: top center;
    align-self: center;
    top: -20px;
`;

const Decoration = () => {
    return (
        <StyledDecorationDiv
            style={{ backgroundImage: `url(${DecorationImg})` }}
        ></StyledDecorationDiv>
    );
};

export default Decoration;
