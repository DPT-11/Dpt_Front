import React, { useState } from "react";
import KjwQuizing from "../components/kwjQuizing";

function QuizPlay() {
    const [quiz, setQuiz] = useState({}); // 결과값
    let getParameter = (key) => {
        return new URLSearchParams(window.location.search).get(key);
    };
    const name = getParameter("name");

    return (
        <div className="kjw_body">
            <div className="kjw_main">
                <KjwQuizing name={name} quizList={quiz} />
            </div>
        </div>
    );
}
export default QuizPlay;
