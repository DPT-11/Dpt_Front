import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { QuestionData } from "./../utls/question";
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
        height: "210px",
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
        width: "100%",
        height: "35vh",
        paddingLeft: "40px",
        paddingRight: "40px",
        paddingBottom: "33px",
    };
    const divAnswerCss = {
        display: "flex",
        backgroundColor: "#FBF6F1",
        width: "100%",
        height: "41px",
        alignSelf: "flex-end",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "20px",
    };
    console.log(QuestionData);
    const testQuestion = QuestionData[0].questions;

    /*
    const questions = [
        {
            "questionId" : 1,
			"question" : "무슨 영화1",
			"options" : ["멜로","스릴러", "내가 새로 만든 답안1","내가 새로 만든 답안2"],
			"answer" : "내가 새로 만든 답안2"
        },
        {
            "questionId" : 2,
			"question" : "무슨 영화2",
			"options" : ["ㄱ","ㄴ","ㄷ","ㄹ"],
			"answer" : "ㄹ"
        },
        {
            "questionId" : 3,
			"question" : "무슨 영화3",
			"options" : ["멜로","스릴러","내가 새로 만든 답안1","내가 새로 만든 답안2"],
			"answer" : "내가 새로 만든 답안2"
        },
        {
            "questionId" : 4,
			"question" : "무슨 영화4",
			"options" : ["ㄱ","ㄴ","ㄷ","ㄹ"],
			"answer" : "ㄹ"
        },
        {
            "questionId" : 5,
			"question" : "무슨 영화5",
			"options" : ["멜로","스릴러","내가 새로 만든 답안2"],
			"answer" : "내가 새로 만든 답안2"
        }
    ]*/

    const navigator = useNavigate();
    const params = useParams();
    const [progress, setProgress] = useState(0);

    // owner 이름
    // const current = decodeURI(window.location.href);
    // const search = current.split("/")[2];
    // const params = new URLSearchParams(search);
    // const owner = params.get('');

    const [check, setcheck] = useState(false); // 사용자가 답안 선택했는지
    const [userSelect, setUserSelect] = useState(""); // 어떤 답안 선택했는지
    const [answer, setAnswer] = useState(""); // 현재 답안
    const [correctNum, setCorrectNum] = useState(0); // 몇 개 맞았는지
    const [correct, setCorrect] = useState(false);

    useEffect(() => {
        if (progress === 4) {
            navigator(
                "/" +
                    params.token +
                    "/quiz/quizResult/?name=" +
                    props.name +
                    "&&version=" +
                    1 +
                    "&&result=" +
                    correctNum
            );
        }
        console.log("progress", `${progress} / ${correctNum}`);
    }, [progress]);

    const setProgressListener = (option, answer) => {
        setcheck(true);
        console.log("option", option, "/answer:", answer);
        // 정답 체크
        if (option === answer) {
            setCorrectNum((correctNum) => correctNum + 1);
            setCorrect((correct) => (correct = true));
            Toast("정답입니다");
            console.log("정답입니다~", correctNum);
        } else {
            setCorrect(false);
            Toast("오답입니다");
        }
        // 다음 단계 이동
        setTimeout(function () {
            if (progress < testQuestion.length - 1) setProgress(progress + 1);
            setcheck(false);
        }, 2000);
    };

    /*
    <div style={{width:"100%", height:"100%",display:"flex", flexDirection:"column",alignItems:"center"}}>
            <div style={{marginTop:"60px", marginBottom:"24px",height:"366px"}}>
                <div style={divCss}>{props.name}의 Quiz</div>
                <KjwResultCookie version="1" level={correctNum} />
            </div>
            <div style={secQuestionCss}>
                <div style={divQuestionCss}>{questions[progress].question}</div>
                <KjwProgressArray progress={progress} />
            </div>
            <div style={secAnswerCss}>
                <KjwQuizingButtonArray
                    check={check}
                    options={questions[progress].options}
                    answer={questions[progress].answer}
                    selectListener={setProgressListener}
                    correct={correct}
                />
                <div style={divAnswerCss}>
                    {check && correct && <span>정답입니다.</span>}
                    {check && !correct && <span>오답입니다.</span>}
                </div>
            </div>
        </div>
    */
    return (
        <div
            style={{
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}
        >
            <div
                style={{
                    marginTop: "60px",
                    marginBottom: "24px",
                    height: "366px",
                }}
            >
                <div style={divCss}>{props.name}의 Quiz</div>
                <KjwResultCookie version="1" level={correctNum} />
            </div>
            <div style={secQuestionCss}>
                <div style={divQuestionCss}>
                    {testQuestion[progress].question}
                </div>
                <KjwProgressArray progress={progress} />
            </div>

            <div style={secAnswerCss}>
                <KjwQuizingButtonArray
                    check={check}
                    options={testQuestion[progress].option}
                    answer={testQuestion[progress].answer}
                    selectListener={setProgressListener}
                    correct={correct}
                />
            </div>
            <StyledToastContainer />
        </div>
    );
}

export default KjwQuizing;
