import React, { useState } from "react";
import styled from "styled-components";
import colors from "../../styles/colors";

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

const StyledAnswerInput = styled(StyledInput)`
    border: 1px solid black;
`;

export const AnswerInputField = ({ hint, submitListener }) => {
    const [input, setInput] = useState("");
    const [isVisible, setIsVisible] = useState(true);
    return (
        <div
            style={{
                position: "relative",
                display: `${isVisible ? "" : "none"}`,
            }}
        >
            <StyledAnswerInput
                onChange={(e) => {
                    e.preventDefault();
                    setInput(e.target.value);
                }}
                placeholder={hint}
            ></StyledAnswerInput>
            <p
                style={{
                    padding: "2rem",
                    position: "absolute",
                    right: "0%",
                    top: "50%",
                    transform: `translate(0%, -50%)`,
                    fontSize: "2.2rem",
                    color: `${colors.mainGreen}`,
                }}
                onClick={() => {
                    submitListener(input);
                    setIsVisible(false);
                }}
            >
                +
            </p>
        </div>
    );
};

const InputField = ({ hint, type, value, listener, validation }) => {
    const [input, setInput] = useState("");

    return (
        <StyledInput
            type={type}
            onChange={(e) => {
                e.preventDefault();
                if (validation(e.target.value)) {
                    listener(e.target.value);
                    //setInput(e.target.value);
                } else {
                    e.target.value = input;
                }
            }}
            value={value}
            placeholder={hint}
        ></StyledInput>
    );
};

export default InputField;
