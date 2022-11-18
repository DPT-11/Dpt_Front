import React from 'react';
import {useNavigate} from 'react-router-dom';
import KjwQuizing from '../components/kwjQuizing';

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
                <KjwQuizing name={name}/>
                <button onClick={goToResult}>결과페이지 이동</button>
            </div>
        </div>
    );
}
export default QuizPlay;