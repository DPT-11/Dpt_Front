import React from "react";
import { StyledContainer } from "./Home.style";
import { Card } from "../components/card";
import { GoHomeButton } from "../components/button";
const MyCookie = () => {
    return (
        <StyledContainer>
            <div
                style={{
                    height: "100vh",
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "2rem",
                }}
            >
                <h2>To. 박소영</h2>
                <Card />
                <GoHomeButton />
            </div>
        </StyledContainer>
    );
};

export default MyCookie;
