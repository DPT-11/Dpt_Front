import "animate.css";
import React from "react";
import Decoration from "../components/Decoration";

import KjwResult from "../components/kjwResult";
function QuizResult() {
    let getParameter = (key) => {
        return new URLSearchParams(window.location.search).get(key);
    };
    const name = getParameter("name");
    const version = getParameter("version");
    const result = getParameter("result");
    const shareResult = () => {
        alert("/quiz/quizResult?name=" + name + "&&" + result);
    };

    return (
        <div
            className="kjw_body"
            style={{ height: "120vh", width: "100%", position: "relative" }}
        >
            <Decoration />
            <div className="kjw_main" style={{ width: "100%" }}>
                <KjwResult name={name} version={version} result={result} />
            </div>
        </div>
    );
}
export default QuizResult;
