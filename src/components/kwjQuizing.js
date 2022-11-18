import KjwResultCookie from "./kjwResultCookie";
import KjwQuizingButtonArray from './kjwQuizingButtonArray';

function KjwQuizing(props) {
    const divCss = {
        height:"38px",
        fontSize:"24px",
        marginBottop:"24px",
        textAlign:"center"
    }
    const secQuestionCss = {
        display:"flex",
        flexDirection:"column",
        width:"100%",
        height:"210px",
        backgroundColor:"#FBF6F1"
    }
    const divQuestionCss = {
        display:"flex",
        height:"100%",
        fontSize:"25px",
        justifyContent : "center",
        alignItems:"center"
    }
    const divProgressCss={
        height:"25px",
        marginBottom:"22px",
        textAlign:"center"
    }
    const secAnswerCss={
        display:"flex",
        flexDirection:"column",
        width:"100%",
        height:"500px",
        paddingLeft:"40px",
        paddingRight:"40px",
        paddingBottom:"33px"
    }

    return(
        <div style={{width:"100%", height:"100%",display:"flex", flexDirection:"column",alignItems:"center"}}>
            <div style={{marginTop:"60px", marginBottom:"24px"}}>
                <div style={divCss}>{props.name}의 Quiz</div>
                <KjwResultCookie />
            </div>
            <div style={secQuestionCss}>
                <div style={divQuestionCss}>question</div>
                <div style={divProgressCss}>progress</div>
            </div>
            <div style={secAnswerCss}>
                <KjwQuizingButtonArray />
            </div>
        </div>
    );
}

export default KjwQuizing;