import React from "react";
import { useLocation } from "react-router";
import { GoHomeButton } from "../components/button";
import { Card } from "../components/card";
import { StyledContainer } from "./Home.style";

const MyCookie = () => {
    const { state } = useLocation();
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
                <h2>To.{state}</h2>
                <Card
                    list={[
                        { from: "김효민", id: 1, score: 4 },
                        { from: "조서현", id: 1, score: 3 },
                        { from: "김지원", id: 1, score: 5 },
                        { from: "김진우", id: 1, score: 0 },
                    ]}
                />
                <GoHomeButton />
            </div>
        </StyledContainer>
    );
};

export default MyCookie;
