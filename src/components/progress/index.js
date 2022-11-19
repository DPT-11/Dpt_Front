import React, { useState, useEffect } from "react";
import { ProgressBarWrapper, ProgressItem } from "./progress.style";

const ProgressBar = ({ curStep, itemListener }) => {
    const [progress, setProgress] = useState(
        curStep !== undefined ? curStep : 0
    );
    const step = [true, false, false, false, false];
    useEffect(() => {
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
                                focusItem={idx <= progress}
                                onClick={() => itemListener(idx)}
                            />
                        );
                })}
            </ProgressBarWrapper>
        </div>
    );
};

export default ProgressBar;
