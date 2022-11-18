import ovenGroup from "../img/ovenGroup1.png"
import KjwImgHeader from "./kjwImgHeader";
import KjwStartNameForm from './kjwStartNameForm';
import KjwStartContent from "./kjwStartContent";

function KjwStart(){
    return (
        <>
            <KjwImgHeader />
            <div className="kjw_start_title">네가 만든 쿠키</div>
            <KjwStartContent name="user"/>
            <div style={{width:"100%",alignItem:"left", marginBottom:"70px" }}>
                <img src={ovenGroup} alt="오븐 쿠키"/>
            </div>
            <KjwStartNameForm placeholder="이름을 입력해주세요"/>
        </>
        
    );
}
export default KjwStart;