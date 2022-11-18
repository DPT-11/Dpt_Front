import KjwQuizingButton from './kjwQuizingButton';

function KjwQuizingButtonArray(){
    const divAnswerCss={
        display:"flex",
        backgroundColor:"#FBF6F1",
        width:"100%",
        height:"41px",
        alignSelf:"flex-end",
        justifyContent : "center",
        alignItems:"center"
    }

    return(
        <div style={{height:"100%", display:"flex", flexDirection:"column", justifyContent:"space-between", paddingTop:"50px"}}>
            <KjwQuizingButton />
            <KjwQuizingButton />
            <KjwQuizingButton />
            <KjwQuizingButton />
            <div style={divAnswerCss}>
                정답 or 오답
            </div>
        </div>
    );
}
export default KjwQuizingButtonArray;