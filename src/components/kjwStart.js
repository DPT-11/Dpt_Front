import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ovenGroup from "../img/ovenGroup1.png";
import { StyledContainer } from "../page/Home.style";
import Decoration from "./Decoration";
import KjwStartContent from "./kjwStartContent";
import KjwStartNameForm from "./kjwStartNameForm";

function KjwStart(props) {
    const [guestName, setGuestName] = useState(null);
    const navigator = useNavigate();
    const token = props.token;
    const cookieId = props.cookieId;
    return (
        <>
            <StyledContainer>
                <Decoration />
                <div className="kjw_start_title">네가 만든 쿠키</div>
                <KjwStartContent name={props.owner} />
                <div
                    style={{
                        width: "100%",
                        alignItem: "left",
                        marginBottom: "70px",
                    }}
                >
                    <img src={ovenGroup} alt="오븐 쿠키" />
                </div>
                <KjwStartNameForm
                    owner={props.owner}
                    inputHandler={setGuestName}
                    submitHanlder={() => {
                        console.log(props.cookieId);
                        navigator(`/${token}/quiz/quizPlay`, {
                            state: {
                                token: token,
                                cookieId: props.cookieId,
                                guestName: guestName,
                                ownerName: props.owner,
                            },
                        });
                    }}
                    placeholder="이름을 입력해주세요"
                />
            </StyledContainer>
        </>
    );
}
export default KjwStart;
