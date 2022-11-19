import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import { SecondButton } from "../components/button";
import Decoration from "../components/Decoration";
import InputField from "../components/inputField";
import { DefaultLayout } from "../styles/common";
import { StyledContainer } from "./Home.style";

const Login = () => {
    const [name, setName] = useState(null);
    const [pwd, setPwd] = useState(null);

    const [inputState, setInputState] = useState(false);
    const [token, setToken] = useState(1);

    const navigator = useNavigate();
    useEffect(() => {
        setInputState(name && pwd && pwd.length === 4);
    }, [name, pwd]);

    useEffect(() => {
        console.log(inputState);
    }, [inputState]);

    const onClickSubmit = () => {
        // Todo 유저 등록 API
        if (true) {
            console.log(name, pwd);
            setToken("response");
            if (token) navigator(`/${token}/cookie`);
        } else {
            setName("");
            setPwd("");
        }
    };

    return (
        <DefaultLayout>
            <StyledContainer>
                <Decoration />
                <h1>너가 만든 쿠키</h1>

                <div style={{ width: "70%", marginTop: "3vh", zIndex: 10 }}>
                    <p style={{ margin: "15px" }}>이름</p>
                    <InputField
                        hint={"이름을 입력해주세요"}
                        type={"textField"}
                        initValue={""}
                        listener={setName}
                        validation={(value) => {
                            return value.length < 11;
                        }}
                    ></InputField>
                </div>

                <div style={{ width: "70%", marginTop: "3vh", zIndex: 10 }}>
                    <p style={{ margin: "15px" }}>비밀번호</p>
                    <InputField
                        hint={"숫자 4자리를 입력해주세요"}
                        type={"password"}
                        initValue={""}
                        listener={(value) => {
                            setPwd(
                                value
                                    .replace(/[^0-9.]/g, "")
                                    .replace(/(\..*)\./g, "$1")
                            );
                        }}
                        validation={(value) => {
                            return (
                                value
                                    .replace(/[^0-9.]/g, "")
                                    .replace(/(\..*)\./g, "$1") &&
                                value.length < 5
                            );
                        }}
                    ></InputField>
                </div>
                <div
                    style={{
                        position: "absolute",
                        width: "30%",
                        bottom: "5%",
                    }}
                >
                    <SecondButton
                        text={"로그인"}
                        disabled={inputState === null || !inputState}
                        onClick={() => {
                            onClickSubmit();
                        }}
                    />
                </div>
            </StyledContainer>
        </DefaultLayout>
    );
};

export default Login;
