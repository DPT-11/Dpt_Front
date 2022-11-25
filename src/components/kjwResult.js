import { requestUpdateComment } from "../api/index";
import { CommentButton } from "./button";
import KjwButtonCopy from "./kjwButtonCopy";
import KjwButtonGotoHome from "./kjwButtonGotoHome";
import KjwButtonKakao from "./kjwButtonKakao";
import KjwResultCookie from "./kjwResultCookie";
import { Toast } from "./toast";
import { StyledToastContainer } from "./toast/index";

function KjwResult(props) {
    const sendComment = (msg) => {
        requestUpdateComment(props.guestId, msg).then((res) => {
            console.log(res);
            Toast("메세지 전달 완료");
        });
    };

    return (
        <>
            <span
                style={{
                    height: "38px",
                    fontSize: "32px",
                    marginBottom: "36px",
                }}
            >
                {props.guestName}님 퀴즈 결과
            </span>
            <KjwResultCookie version={props.version} level={props.result} />
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

            <CommentButton
                onClickSubmit={(msg) => {
                    sendComment(msg);
                }}
                inputFocus={false}
            />
            <span style={{ height: "19px" }} />
            <KjwButtonCopy />
            <span style={{ height: "19px" }} />
            <KjwButtonKakao name={props.name} result={props.result} />
            <span style={{ height: "49px" }} />
            <KjwButtonGotoHome />
            <StyledToastContainer toastColor={"black"} />
        </>
    );
}

export default KjwResult;
