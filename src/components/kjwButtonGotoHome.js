import home from "../assets/home.png";
import { useNavigate, useParams } from 'react-router-dom';

function KjwButtonGotoHome() {
    const navigator = useNavigate();
    const params = useParams();
    const goToHome=()=>{
        navigator("/quiz/"+params.token);
    }
    return (
        <>
            <img src= {home} onClick={goToHome}/>
        </>
    );
}
export default KjwButtonGotoHome;