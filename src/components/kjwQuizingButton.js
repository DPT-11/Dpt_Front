
function KjwQuizingButton(props){

    const isResult = (t) => {
        if(props.option === props.answer){
            t.style.backgroundColor = "#008566"
        }
        else{
            t.style.backgroundColor = "#D43C2F"
        }
        console.log(t)
    }

    return(
        <button className="kjwQuizingBtn" style={{backgroundColor:`${props.check?"#ffffff00":"#F7EEE5"}`}}
            onClick={ (e) => { 
                props.selesctListener(props.option, props.answer)
                {isResult(e.target)}
            }}>{props.option}</button>
    );
}

export default KjwQuizingButton;