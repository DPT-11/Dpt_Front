import "animate.css";
import React from "react";

import { useLocation } from "react-router";
import Decoration from "../components/Decoration";
import KjwResult from "../components/kjwResult";
import { StyledContainer } from "./Home.style";
function QuizResult() {
    const { state } = useLocation();
    const name = state.guestName;
    const version = state.cookieId;
    const result = state.score;
    const guestId = state.guestId;

    return (
        <StyledContainer>
            <Decoration />
            <div
                style={{
                    width: "70%",
                    height: "30%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: "30%",
                    paddingBottom: "2rem",
                }}
            >
                <KjwResult
                    guestName={name}
                    version={version}
                    result={result}
                    guestId={guestId}
                />
            </div>
        </StyledContainer>
        // <div className="kjw_body" style={{ minHeight: "100vh" }}>

        // </div>
    );
}
export default QuizResult;
