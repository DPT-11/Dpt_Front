import React from "react";
import KjwResult from "./../components/kjwResult";

function QuizResult() {
    let getParameter = (key) => {
        return new URLSearchParams(window.location.search).get(key);
    };
    const name = getParameter("name");
    const version = getParameter("version")
    const result = getParameter("result");
    const shareResult = () => {
        alert("/quiz/quizResult?name="+name+"&&"+result);
    }
    
    return(
        <div className='kjw_body'>
            <div className='kjw_main'>
            <KjwResult name={name} version={version} result={result}/>
            </div>
        </div>
    );
}
export default QuizResult;
