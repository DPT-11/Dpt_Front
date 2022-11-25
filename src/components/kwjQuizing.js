import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { requestRegistGuest } from "../api/index";
import KjwProgressArray from "./kjwProgressArray";
import KjwQuizingButtonArray from "./kjwQuizingButtonArray";
import KjwResultCookie from "./kjwResultCookie";
import { Toast } from "./toast";
import { StyledToastContainer } from "./toast/index";

function KjwQuizing(props) {
    const divCss = {
        height: "38px",
        fontSize: "24px",
        marginBottop: "24px",
        textAlign: "center",
    };
    const secQuestionCss = {
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "20vh",
        backgroundColor: "#FBF6F1",
    };
    const divQuestionCss = {
        display: "flex",
        height: "100%",
        fontSize: "25px",
        justifyContent: "center",
        alignItems: "center",
    };
    const secAnswerCss = {
        display: "flex",
        flexDirection: "column",
        width: "80%",
        gap: "1rem",
    };

    const quizList = props.quizList;
    const optionList = props.optionList;
    const answerList = props.answerList;
    const cookieId = props.cookieId;
    const { token } = useParams();

    const navigator = useNavigate();
    const params = useParams();
    const [progress, setProgress] = useState(0);

    const [check, setcheck] = useState(false); // 사용자가 답안 선택했는지
    const [userSelect, setUserSelect] = useState([]); // 어떤 답안 선택했는지
    const [correctNum, setCorrectNum] = useState(0); // 몇 개 맞았는지
    const [correct, setCorrect] = useState(false);
    const [waitTime, setWaitTime] = useState(false);

    useEffect(() => {
        console.log("progress", `${progress} / ${correctNum}`);
    }, [progress, check]);

    const goToResult = (isAnswered, answers) => {
        const body = {
            guestName: props.guestName,
            score: isAnswered ? correctNum + 1 : correctNum,
            comment: "메리크리스마스",
            answer: answers,
            token: token,
        };

        requestRegistGuest(token, body)
            .then((res) => {
                if (res.status === 200)
                    navigator(
                        "/" + params.token + "/quiz/quizResult",

                        {
                            state: {
                                guestName: props.guestName,
                                score: isAnswered ? correctNum + 1 : correctNum,
                                cookieId: cookieId,
                                guestId: res.data.data.guest.id,
                            },
                        }
                    );
                else {
                    Toast("죄송합니다. 다시 시도해 주세요");
                    setTimeout(() => {
                        navigator(
                            "/" + token + "/quiz",

                            {
                                state: {
                                    guestName: props.guestName,
                                    score: isAnswered
                                        ? correctNum + 1
                                        : correctNum,
                                    cookieId: cookieId,
                                },
                            }
                        );
                    }, 3000);
                }
            })
            .catch((e) => {
                console.log(e);
            });
    };

    const setProgressListener = (option, answer) => {
        console.log(userSelect);
        const newArray = [...userSelect];

        // 정답 체크
        let isAnswered = option === answer;
        if (option === answer) {
            Toast("정답입니다");
            setCorrectNum((correctNum) => correctNum + 1);
            setCorrect((correct) => (correct = true));
            newArray.push({ option: option, isCorrect: true });
        } else {
            setCorrect(false);
            Toast("오답입니다");
            newArray.push({ option: option, isCorrect: false });
        }
        setcheck(true);
        setUserSelect(newArray);
        // 다음 단계 이동
        setTimeout(function () {
            console.log(userSelect);
            if (progress < quizList.length - 1) setProgress(progress + 1);
            else {
                goToResult(isAnswered, newArray);
            }
            setcheck(false);
        }, 2000);
    };

    return (
        <div
            style={{
                width: "100%",
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                pointerEvents: `${check ? "none" : "auto"}`,
            }}
        >
            <div
                style={{
                    marginTop: "60px",
                    marginBottom: "24px",
                }}
            >
                <div style={divCss}>{props.name}의 Quiz</div>
                <KjwResultCookie version={cookieId} level={correctNum} />
            </div>
            <div style={secQuestionCss}>
                <div style={divQuestionCss}>{quizList[progress]}</div>
                <KjwProgressArray userStatus={userSelect} />
            </div>

            <div style={secAnswerCss}>
                <KjwQuizingButtonArray
                    check={check}
                    options={optionList[progress]}
                    answer={answerList[progress]}
                    selectListener={setProgressListener}
                    correct={correct}
                />
            </div>
            <StyledToastContainer toastColor={"black"} limit={1} />
        </div>
    );
}

export default KjwQuizing;
