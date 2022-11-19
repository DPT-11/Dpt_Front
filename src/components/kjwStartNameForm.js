import { useState } from "react";
import {useNavigate} from 'react-router-dom';
import { axios } from 'axios';

function KjwStartNameForm(props) {
    const formCss = {
        display: "flex",
        flexDirection: "column",
        alignItems:"center"
    }
    const inputCss = {
        width: "327px",
        height: "50px",
        backgroundColor: "#FFF0E7",
        border: "solid 3px #B3ACAC",
        borderRadius: "20px",
        fontFamily: "'Gamja Flower', cursive",
        fontSize:"24px",
        placeHolderColor:"#B7B0B0",
        color:"black",
        marginBottom:"24px",
        textAlign:"center"
    }

    const navigator = useNavigate();
    const [input, setInput] = useState("");

    const submit=(event)=>{
        event.preventDefault();
    }
    const setInputListener = (e) =>{
        setInput(e.target.value);
    }
    
    const goToQuiz = () => {
        const name = input;
        navigator("/quiz/quizPlay/"+props.owner+"?name="+name);
    }

    /*<button className="kjwStartBtn" disabled={!input}>시작</button> */
    return(
        <form onSubmit={submit} style={formCss}>
            <input 
                name = "name" value = {input}
                onChange={e => setInputListener(e)}
                style={inputCss}
                type="text" placeholder={props.placeholder} required/>
            <button className="kjwStartBtn" disabled={!input} onClick={goToQuiz}>시작</button>
        </form>
    );
}

export default KjwStartNameForm;