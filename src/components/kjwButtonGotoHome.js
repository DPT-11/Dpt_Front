import home from "../assets/home.png";
import { useNavigate } from 'react-router-dom';

function KjwButtonGotoHome() {
    const navigator = useNavigate();
    const goToHome=()=>{
        navigator("/guest");
    }
    return (
        <>
            <img src= {home} onClick={goToHome}/>
        </>
    );
}
export default KjwButtonGotoHome;