import React from 'react';
import {useNavigate} from 'react-router-dom';

function QuizPlay() {
    const navigator = useNavigate();

    let getParameter = (key) => {
        return new URLSearchParams(window.location.search).get(key);
    };
    const name= getParameter("name");
    const goToResult = () => {
        navigator("/guest/quizResult?name="+name+"&result="+1);
    }
    return(
        <div className='kjw_body'>
            <div className='kjw_main'>
                퀴즈 페이지 입니다.
                <button onClick={goToResult}>결과페이지 이동</button>
            </div>
        </div>
    );
}
export default QuizPlay;