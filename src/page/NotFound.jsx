import React from "react";
import Cookie from "../assets/cookie_ver_2.png";
import { GoHomeButton } from "../components/button";
import { DefaultLayout } from "../styles/common";

const NotFound = () => {
    return (
        <DefaultLayout>
            <div
                style={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "2rem",
                }}
            >
                <img style={{ width: "30%", height: "35%" }} src={Cookie} />
                <h1 style={{ fontSize: "2rem" }}>주소를 잘 못 찾아오셨군요!</h1>
                <h1 style={{ fontSize: "3rem", marginBottom: "3rem" }}> 404</h1>
                <GoHomeButton />
            </div>
        </DefaultLayout>
    );
};

export default NotFound;
