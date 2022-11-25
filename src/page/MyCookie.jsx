import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { GoHomeButton } from "../components/button";
import { Card, StyledAnswerButton } from "../components/card";
import { QuestionData } from "../utils/question";
import { StyledContainer } from "./Home.style";

const MyCookie = () => {
    const [answerState, setAnswerState] = useState(false);
    const { state } = useLocation();
    const guests = state.guests;
    const cookieId = state.cookieId;
    useEffect(() => {
        console.log(guests);
    }, []);
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
                <h2>To. {state.name}</h2>
                {guests.length > 0 ? (
                    <>
                        {" "}
                        <Card
                            cookieId={cookieId}
                            list={guests.map((guest, idx) => {
                                return {
                                    from: guest.name,
                                    score: guest.score,
                                    answer: guest.answer,
                                    comment: guest.comment,
                                };
                            })}
                            question={QuestionData[1].questions.map(
                                (q, idx) => {
                                    return q.question;
                                }
                            )}
                            isAnswered={answerState}
                        />{" "}
                        <StyledAnswerButton
                            onClick={() => {
                                setAnswerState((prev) => !prev);
                            }}
                        >
                            {answerState ? "뒤로가기" : "답변보기"}
                        </StyledAnswerButton>
                    </>
                ) : (
                    <h4
                        style={{
                            fontSize: "2rem",
                            lineHeight: "10vh",
                            textAlign: "center",
                            alignItems: "center",
                        }}
                    >
                        아직 받은 쿠키가 없어요
                    </h4>
                )}

                <GoHomeButton />
            </div>
        </StyledContainer>
    );
};

export default MyCookie;
