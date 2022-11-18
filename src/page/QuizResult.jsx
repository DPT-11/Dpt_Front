import React from "react";
import KjwResult from "./../components/kjwResult";

function QuizResult() {
    let getParameter = (key) => {
        return new URLSearchParams(window.location.search).get(key);
    };
    const name = getParameter("name");
    const result = getParameter("result");
    const shareResult = () => {
        alert("/guest/result?name=" + name + result);
    };
    return (
        <div className="kjw_body">
            <div className="kjw_main">
                <KjwResult name={name} result={result} />
            </div>
        </div>
    );
}
export default QuizResult;
