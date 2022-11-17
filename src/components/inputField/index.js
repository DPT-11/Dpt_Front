import React, { useState } from "react";
import styled from "styled-components";

const StyledInput = styled.input`
    z-index: 1000;
    border: 3px solid #b3acac;
    border-radius: 20px;
    width: 100%;
    align-items: center;
    line-height: 38px;
    color: black;
    padding-left: 1rem;
    padding-right: 1rem;
    text-align: center;
`;

const InputField = ({ hint, type, initValue, listener, validation }) => {
    const [input, setInput] = useState(initValue ? initValue : "");

    return (
        <StyledInput
            type={type}
            onChange={(e) => {
                e.preventDefault();
                if (validation(e.target.value)) {
                    listener(e.target.value);
                    setInput(e.target.value);
                } else {
                    e.target.value = input;
                }
            }}
            placeholder={hint}
        ></StyledInput>
    );
};

export default InputField;
