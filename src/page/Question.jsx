import React, { useState, useEffect } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";

import axios from "axios";

import QuestionHat from "../assets/questionHat.svg";

import ProgressBar from "../components/progress/index";
import { Toast } from "../components/toast";
import {
    AnswerWrapper,
    QuestionWrapper,
    StyledQuestionContainer,
} from "./Question.style";
import {
    AddButton,
    AnswerButton,
    SecondButton,
} from "../components/button/index";
import { AnswerInputField } from "../components/inputField/index";
import { ToastContainer } from "react-toastify";
import { StyledToastContainer } from "../components/toast/index";

const Question = () => {
    const { state } = useLocation();
    const questions = state.res.map((res) => res.question);

    const [focusStep, setFocusStep] = useState(0);
    const [answerState, setAnswerState] = useState([]);
    const [options, setOptions] = useState(state.res.map((res) => res.options));
    const [ownAnswer, setOwnAnswer] = useState("");
    const [limitState, setLimitstate] = useState(false);
    const [waitTime, setWaitTime] = useState(false);

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

        if (changeOption.length <= 2) setLimitstate(true);

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

        console.log(options[focusStep]);
        if (
            focusStep < 4 &&
            options[focusStep].filter((f) => f !== "").length >= 2
        ) {
            console.log(options[focusStep]);
            setWaitTime(true);
            setTimeout(() => {
                setFocusStep((prev) => prev + 1);
                setWaitTime(false);
            }, 1500);
        } else if (options[focusStep].filter((f) => f !== "").length == 1) {
            Toast("답변은 두개 이상입니다!");
        }
        filterAnswer();
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

    const onClickProgressItem = (step) => {
        console.log(step);
        console.log("focusStep", focusStep);
        if (step < focusStep) {
            //이전
            if (focusStep > 0) {
                filterAnswer();
                setFocusStep((prev) => prev - 1);
            }
        } else if (step > focusStep) {
            if (focusStep < 4 && answerState.length > focusStep) {
                filterAnswer();
                setFocusStep((prev) => prev + 1);
            }
        }
    };

    return (
        <StyledQuestionContainer
            style={{ pointerEvents: `${waitTime ? "none" : "auto"}` }}
        >
            <h2 style={{ marginTop: "2rem", padding: "3rem" }}>
                {name}님의 Quiz
            </h2>
            <QuestionWrapper>
                {questions[focusStep]}
                <img src={QuestionHat}></img>
            </QuestionWrapper>
            <div style={{ padding: "2rem" }}>
                <ProgressBar
                    curStep={focusStep}
                    itemListener={onClickProgressItem}
                />
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
            <StyledToastContainer />
            <div
                style={{
                    position: "absolute",
                    bottom: "5%",
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
        </StyledQuestionContainer>
    );
};

export default Question;
