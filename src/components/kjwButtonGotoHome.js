import home from "../assets/home.png";
import { useNavigate, useParams } from 'react-router-dom';

function KjwButtonGotoHome() {
    const navigator = useNavigate();
    const params = useParams();
    const goToHome=()=>{
        navigator("/"+params.token+"/quiz/");
    }
    return (
        <>
            <img src= {home} onClick={goToHome}/>
        </>
    );
}
export default KjwButtonGotoHome;