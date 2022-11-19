import resultCookie from "../assets/cookie1_5.png";
import KjwButtonCopy from "./kjwButtonCopy";
import KjwButtonGotoHome from "./kjwButtonGotoHome";
import KjwButtonKakao from "./kjwButtonKakao";
import KjwImgHeader from "./kjwImgHeader";
import KjwResultCookie from './kjwResultCookie';

function KjwResult(props) {
    return (
        <>
            <KjwImgHeader />
            <span
                style={{
                    height: "38px",
                    fontSize: "32px",
                    marginBottom: "36px",
                }}
            >
                {props.name}님 퀴즈 결과
            </span>
            <KjwResultCookie version={props.version} level={props.result}/>
            <span
                style={{
                    height: "38px",
                    fontSize: "24px",
                    marginTop: "57px",
                    marginBottom: "13px",
                }}
            >
                5개중 {props.result}개 정답!
            </span>
            <span
                style={{
                    height: "38px",
                    fontSize: "20px",
                    marginBottom: "27px",
                }}
            >
                친구에게 링크를 공유해보세요!
            </span>
            <KjwButtonCopy />
            <span style={{ height: "19px" }} />
            <KjwButtonKakao name={props.name} result={props.result} />
            <span style={{ height: "49px" }} />
            <KjwButtonGotoHome />
        </>
    );
}

export default KjwResult;
