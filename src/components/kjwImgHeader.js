import head from "../img/guestStartHead.png"

function KjwImgHeader(){
    const imgCss = {
        width: "fit-content"
    }
    return (
        <img src={head} alt="head" style={imgCss}/>
    );
}
export default KjwImgHeader;