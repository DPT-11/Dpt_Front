import React, { useState, useEffect } from "react";
import { ProgressBarWrapper, ProgressItem } from "./progress.style";
import FocusItem from "../../assets/progress_focus.svg";
import UnfocusItem from "../../assets/progress_none.svg";

const ProgressBar = ({ curStep }) => {
    const [progress, setProgress] = useState(
        curStep !== undefined ? curStep : 0
    );
    const step = [true, false, false, false, false];
    useEffect(() => {
        console.log("progressBar" + curStep);
        if (curStep < 5) setProgress(curStep);
    }, [curStep]);
    return (
        <div>
            <ProgressBarWrapper>
                {step.map((val, idx) => {
                    if (idx < 5)
                        return (
                            <ProgressItem
                                key={idx}
                                focusItem={idx === progress}
                            />
                        );
                })}
            </ProgressBarWrapper>
        </div>
    );
};

export default ProgressBar;
