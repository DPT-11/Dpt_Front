import head from "../img/guestStartHead.png"
import ovenGroup from "../img/ovenGroup1.png"
import KjwStartNameForm from './kjwStartNameForm';
import KjwStartContent from "./kjwStartContent";

function KjwStart(){
    return (
        <>
            <img src={head} alt="head" />
            <div className="kjw_start_title">네가 만든 쿠키</div>
            <KjwStartContent name="박소영"/>
            <div style={{width:"100%",alignItem:"left", marginBottom:"70px" }}>
                <img src={ovenGroup} alt="오븐 쿠키"/>
            </div>
            <KjwStartNameForm placeholder="이름을 입력해주세요"/>
        </>
        
    );
}
export default KjwStart;