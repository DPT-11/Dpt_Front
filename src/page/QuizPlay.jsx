import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { requestHostQuiz } from "../api";
import KjwQuizing from "../components/kwjQuizing";
import { QuestionData } from "../utils/question";
import { StyledContainer } from "./Home.style";

function QuizPlay() {
    const { state } = useLocation();
    const name = state.ownerName;

    const token = state.token;
    const guest = state.guestName;
    const cookieId = state.cookieId;
    const quizList = QuestionData[cookieId - 1].questions.map((q, idx) => {
        return q.question;
    });
    const [optionList, setOptionList] = useState(null);
    const [answerList, setAnswerList] = useState(null);
    useEffect(() => {
        console.log(state);
        if (name && cookieId && token && guest)
            requestHostQuiz(token, guest).then((res) => {
                if (res) {
                    setOptionList(res.data.data.options);
                    setAnswerList(res.data.data.answer);
                }
            });
        else {
            console.log("error");
        }
    }, []);
    return (
        <>
            {optionList && answerList ? (
                <StyledContainer>
                    <KjwQuizing
                        name={name}
                        quizList={quizList}
                        optionList={optionList}
                        answerList={answerList}
                        cookieId={cookieId}
                        guestName={guest}
                    />
                </StyledContainer>
            ) : null}
        </>
    );
}
export default QuizPlay;
