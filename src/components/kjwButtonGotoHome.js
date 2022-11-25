import { useNavigate, useParams } from "react-router-dom";
import home from "../assets/home.png";

function KjwButtonGotoHome() {
    const navigator = useNavigate();
    const params = useParams();
    const goToHome = () => {
        navigator("/");
    };
    return (
        <>
            <img src={home} onClick={goToHome} />
        </>
    );
}
export default KjwButtonGotoHome;
