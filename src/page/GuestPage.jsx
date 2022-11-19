import React from 'react';
import KjwStart from './../components/kjwStart';

import { useEffect, useState } from 'react';
import axios from "axios";


function GuestPage(){
    // 파라미터 값 받아오기
    // const params = useParams();
    // console.log(params.token);
    const [user, setUser] = useState(null); // 결과값
    const [loading, setLoading] = useState(false); // 로딩 여부
    const [error, setError] = useState(null); // 에러

    const fetchUser = async () =>{
        try{
            setUser(null);
            setError(null);
            setLoading(true); //로딩이 시작됨
            const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
            setUser(response.data);
            console.log(response.data);
        }
        catch (e){
            setError(e);
        }
        setLoading(false);
    };

    useEffect( () => {
        fetchUser();
    },[])

    if ( loading ) return <span>로딩중..</span>
    if (error) return <span>에러 발생!!</span>
    if (!user) return null;  //users값이 유효하지 않는 경우

    return(
        <div className='kjw_body'>
            <div className='kjw_main'>
                <KjwStart owner={user.userId}/>
            </div>
        </div>
    );
}

export default GuestPage;