import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import { requestLogin, requestMyCookies } from "../api";
import { SecondButton } from "../components/button";
import Decoration from "../components/Decoration";
import InputField from "../components/inputField";
import { StyledToastContainer, Toast } from "../components/toast";
import { DefaultLayout } from "../styles/common";
import { StyledContainer } from "./Home.style";

const Login = () => {
    const [name, setName] = useState(null);
    const [pwd, setPwd] = useState(null);

    const [inputState, setInputState] = useState(false);

    const navigator = useNavigate();
    useEffect(() => {
        setInputState(name && pwd && pwd.length === 4);
    }, [name, pwd]);

    useEffect(() => {}, [inputState]);

    const onClickSubmit = () => {
        // Todo 유저 등록 API
        requestLogin(name, pwd)
            .then((res) => {
                const cookieId = res.data.data.cookieId;
                const token = res.data.data.token;
                if (cookieId) {
                    if (token) {
                        requestMyCookies(token)
                            .then((answer) => {
                                if (answer.status === 200)
                                    navigator(`/${token}/mycookies`, {
                                        state: {
                                            name: name,
                                            cookieId: cookieId,
                                            guests: answer.data.data.guests,
                                        },
                                    });
                            })
                            .catch((err) => {
                                console.log(err);
                            });
                    }
                }
            })
            .catch((e) => {
                Toast("이름 또는 비밀번호가 틀립니다");
                console.log(e);
                setName("");
                setPwd("");
            });
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
                        value={name}
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
                        value={pwd}
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
                <StyledToastContainer toastColor={"black"} />
            </StyledContainer>
        </DefaultLayout>
    );
};

export default Login;
