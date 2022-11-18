import React, { useState, useEffect } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";

import axios from "axios";

import QuestionHat from "../assets/questionHat.svg";

import ProgressBar from "../components/progress/index";

import { StyledContainer } from "./Home.style";
import { DefaultLayout } from "../styles/common";
import { AnswerWrapper, QuestionWrapper } from "./Question.style";
import {
    AddButton,
    AnswerButton,
    SecondButton,
} from "../components/button/index";
import { AnswerInputField } from "../components/inputField/index";

const Question = () => {
    const { state } = useLocation();
    const questions = state.res.map((res) => res.question);

    const [focusStep, setFocusStep] = useState(0);
    const [answerState, setAnswerState] = useState([]);
    const [options, setOptions] = useState(state.res.map((res) => res.options));
    const [ownAnswer, setOwnAnswer] = useState("");
    const [limitState, setLimitstate] = useState(false);

    const { token } = useParams();
    const navigator = useNavigate();

    const name = "산타"; //state.res.name;

    useEffect(() => {}, [focusStep, options, limitState]);

    useEffect(() => {
        console.log("answerState", answerState);
    }, [answerState]);

    useEffect(() => {
        if (ownAnswer !== "") {
            const newOption = [...options];
            const opt = options[focusStep].indexOf("");
            newOption[focusStep][opt] = ownAnswer;
            setOptions(newOption);
            onClickAnswer(ownAnswer);
        }
    }, [ownAnswer]);

    const onClickDelete = (option) => {
        const changeOption = options[focusStep].filter((opt) => opt !== option);
        const newArray = [...options];
        newArray[focusStep] = changeOption;

        if (changeOption.length === 2) setLimitstate(true);
        console.log("after - delete", newArray);

        setOptions(newArray);
    };

    const onClickAnswer = (option) => {
        const newArray = [...answerState];
        if (answerState.length === focusStep + 1) {
            if (answerState.length > 0) newArray.pop();
            newArray.push(option);
        } else if (answerState.length < focusStep + 1) {
            newArray.push(option);
        } else {
            console.log(`back again ${focusStep}/ ${newArray[focusStep]}`);
            newArray[focusStep] = option;
        }
        setAnswerState(newArray);
    };
    const onClickAdd = () => {
        const newOption = [...options];
        newOption[focusStep].push("");
        if (newOption[focusStep].length > 2) setLimitstate(false);
        setOptions(newOption);
    };

    const filterAnswer = () => {
        const changeOption = options[focusStep].filter((opt) => opt !== "");
        const newArray = [...options];
        newArray[focusStep] = changeOption;
        setOptions(newArray);
    };

    return (
        <DefaultLayout>
            <StyledContainer>
                <h2 style={{ marginTop: "2rem", padding: "3rem" }}>
                    {name}님의 Quiz
                </h2>
                <QuestionWrapper>
                    {questions[focusStep]}
                    <img src={QuestionHat}></img>
                </QuestionWrapper>
                <div style={{ padding: "2rem" }}>
                    <ProgressBar curStep={focusStep} />
                </div>
                {/* {(answerState.length> focusStep+1 ) && focusStep == ques} */}
                <AnswerWrapper>
                    {options[focusStep].map((opt, idx) => {
                        if (opt !== "")
                            return (
                                <AnswerButton
                                    key={idx}
                                    text={opt}
                                    checkListener={onClickAnswer}
                                    deleteListener={onClickDelete}
                                    isAnswered={
                                        answerState.length < focusStep + 1
                                            ? null
                                            : answerState[focusStep]
                                    }
                                    limit={limitState}
                                />
                            );
                        else {
                            return (
                                <AnswerInputField
                                    key={idx}
                                    hint={"나만의 답안"}
                                    submitListener={setOwnAnswer}
                                />
                            );
                        }
                    })}
                    <AddButton
                        onClick={onClickAdd}
                        isVisible={options[focusStep].length < 5}
                    />
                </AnswerWrapper>

                <button
                    onClick={() => {
                        if (focusStep < 4 && answerState.length > focusStep) {
                            filterAnswer();
                            setFocusStep((prev) => prev + 1);
                        }
                    }}
                >
                    Next
                </button>
                <button
                    onClick={() => {
                        if (focusStep > 0) setFocusStep((prev) => prev - 1);
                    }}
                >
                    Prev
                </button>
                <div
                    style={{
                        position: "absolute",
                        bottom: "0%",
                        width: "20%",
                        visibility: `${
                            answerState.length === 5 && focusStep === 4
                                ? "visible"
                                : "hidden"
                        }`,
                    }}
                >
                    <SecondButton
                        text={"완료"}
                        disabled={false}
                        onClick={() => {
                            navigator(`/${token}/share`);
                        }}
                    />
                </div>
            </StyledContainer>
        </DefaultLayout>
    );
};

export default Question;
