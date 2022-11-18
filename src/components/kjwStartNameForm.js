import { useState } from "react";
import {useNavigate} from 'react-router-dom';

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
    // const buttonCss = {
    //     width:"127px",
    //     height:"50px",
    //     backgroundColor: "#ffffff",
    //     borderRadius:"20px",
    //     fontFamily: "'Gamja Flower', cursive",
    //     fontSize: "24px",
    //     color: "#D43C2F",
    //     marginBottom:"49px",
    //     textAlign:"center"
    // }
    
    const navigate = useNavigate();
    const [input, setInput] = useState("");
    const submit=(event)=>{
        event.preventDefault();
        const name = document.getElementById('name').value;
        navigate("/guest?name="+name);
    }
    const setInputListener = (e) =>{
        setInput(e.target.value);
    }

    return(
        <form onSubmit={submit} style={formCss}>
            <input 
                name = "name" value = {input}
                onChange={e => setInputListener(e)}
                style={inputCss}
                type="text" placeholder={props.placeholder} required/>
            <button className="kjwStartBtn" disabled={!input}>시작</button>
        </form>
    );
}

export default KjwStartNameForm;