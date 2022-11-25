import { useEffect, useState } from "react";
import KjwProgress from "./kjwProgress";

function KjwProgressArray({ userStatus }) {
    const divProgressCss = {
        display: "flex",
        height: "25px",
        marginBottom: "22px",
        justifyContent: "center",
    };
    const [status, setStatus] = useState(
        userStatus.map((u, index) => {
            return u.isCorrect;
        })
    );
    useEffect(() => {
        setStatus(
            userStatus.map((u, index) => {
                return u.isCorrect;
            })
        );
    }, [status]);

    return (
        <div style={divProgressCss}>
            {[...Array(5)].map((n, index) => {
                let progressStatus = "default";

                if (status.length > index) {
                    if (status[index]) progressStatus = "correct";
                    else progressStatus = "uncorrect";
                }
                return <KjwProgress key={index} status={progressStatus} />;
            })}
        </div>
    );
}
export default KjwProgressArray;
