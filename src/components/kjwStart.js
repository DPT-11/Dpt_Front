import ovenGroup from "../img/ovenGroup1.png";
import KjwImgHeader from "./kjwImgHeader";
import KjwStartContent from "./kjwStartContent";
import KjwStartNameForm from "./kjwStartNameForm";

function KjwStart(props) {
    return (
        <>
            <KjwImgHeader />
            <div className="kjw_start_title">네가 만든 쿠키</div>
            <KjwStartContent name={"김진우"} />
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
                placeholder="이름을 입력해주세요"
            />
        </>
    );
}
export default KjwStart;
