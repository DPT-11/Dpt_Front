import React, { useState } from "react";
import { useLocation } from "react-router";
import { GoHomeButton } from "../components/button";
import { Card, StyledAnswerButton } from "../components/card";
import { QuestionData } from "../utils/question";
import { StyledContainer } from "./Home.style";

const MyCookie = () => {
    const [answerState, setAnswerState] = useState(false);
    const { state } = useLocation();
    return (
        <StyledContainer>
            <div
                style={{
                    height: "100vh",
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "2rem",
                }}
            >
                <h2>To.{}</h2>
                <Card
                    list={[
                        {
                            from: "김효민",
                            id: 1,
                            score: 4,
                            answer: [
                                { answer: "1", isCorrect: false },
                                { answer: "2", isCorrect: true },
                                { answer: "3", isCorrect: true },
                                { answer: "4", isCorrect: false },
                                { answer: "5", isCorrect: false },
                            ],
                        },
                        {
                            from: "조서현",
                            id: 1,
                            score: 3,
                            answer: [
                                { answer: "1", isCorrect: false },
                                { answer: "2", isCorrect: false },
                                { answer: "3", isCorrect: true },
                                { answer: "4", isCorrect: true },
                                { answer: "5", isCorrect: false },
                            ],
                        },
                        {
                            from: "김지원",
                            id: 1,
                            score: 5,
                            answer: [
                                { answer: "1", isCorrect: false },
                                { answer: "2", isCorrect: true },
                                { answer: "3", isCorrect: true },
                                { answer: "4", isCorrect: false },
                                { answer: "5", isCorrect: false },
                            ],
                        },
                        {
                            from: "김진우",
                            id: 1,
                            score: 0,
                            answer: [
                                { answer: "1", isCorrect: false },
                                { answer: "2", isCorrect: true },
                                { answer: "3", isCorrect: true },
                                { answer: "4", isCorrect: false },
                                { answer: "5", isCorrect: false },
                            ],
                        },
                    ]}
                    question={QuestionData[1].questions.map((q, idx) => {
                        return q.question;
                    })}
                    isAnswered={answerState}
                />
                <StyledAnswerButton
                    onClick={() => {
                        setAnswerState((prev) => !prev);
                    }}
                >
                    {answerState ? "뒤로가기" : "답변보기"}
                </StyledAnswerButton>
                <GoHomeButton />
            </div>
        </StyledContainer>
    );
};

export default MyCookie;
