import ovenGroup from "../img/ovenGroup1.png";
import Decoration from "./Decoration/index";
import KjwStartContent from "./kjwStartContent";
import KjwStartNameForm from "./kjwStartNameForm";

function KjwStart(props) {
    return (
        <>
            <Decoration />
            <div className="kjw_start_title">네가 만든 쿠키</div>
            <KjwStartContent name={"김진우"} />
            <div
                style={{
                    alignItem: "left",
                    marginBottom: "70px",
                    alignContent: "self",
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
