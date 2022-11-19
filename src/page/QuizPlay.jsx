import React from 'react';
import { useState,useEffect } from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import KjwQuizing from '../components/kwjQuizing';
import axios from 'axios';


function QuizPlay() {
    const navigator = useNavigate();
    const params = useParams();
    const [quiz, setQuiz] = useState({}); // 결과값
    const [loading, setLoading] = useState(false); // 로딩 여부
    const [error, setError] = useState(null); // 에러

    const fetchQuiz = async () =>{
        try{
            setQuiz(null);
            setError(null);
            setLoading(true); //로딩이 시작됨
            const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
            setQuiz(response.data);
            console.log(response.data);
        }
        catch (e){
            setError(e);
            console.log(e);
        }
        setLoading(false);
    };

    useEffect( () => {
        fetchQuiz();
    },[])

    if ( loading ) return <span>퀴즈 받아오는 중..</span>
    if (error) return <span>에러 발생!!</span>
    if (!quiz) return null;  //users값이 유효하지 않는 경우

    let getParameter = (key) => {
        return new URLSearchParams(window.location.search).get(key);
    };
    const name= getParameter("name");
    const goToResult = () => {
        navigator(params.token+"/quiz/quizResult/?name="+name+"&result="+1);
    }
    
    return(
        <div className='kjw_body'>
            <div className='kjw_main'>
                <KjwQuizing name={name} quizList={quiz} />
            </div>
        </div>
    );
}
export default QuizPlay;