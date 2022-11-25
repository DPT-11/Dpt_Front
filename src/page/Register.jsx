import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import { requestRegist } from "../api/index";
import { SecondButton } from "../components/button";
import Decoration from "../components/Decoration";
import InputField from "../components/inputField";
import { StyledToastContainer, Toast } from "../components/toast";
import { DefaultLayout } from "../styles/common";
import { StyledContainer } from "./Home.style";

const Register = () => {
    const [name, setName] = useState(null);
    const [pwd, setPwd] = useState(null);

    const [inputState, setInputState] = useState(false);
    const [token, setToken] = useState(null);

    const navigator = useNavigate();
    useEffect(() => {
        setInputState(name && pwd && pwd.length === 4);
    }, [name, pwd]);

    useEffect(() => {
        console.log(inputState);
    }, [inputState]);

    const onClickSubmit = () => {
        requestRegist(name, pwd)
            .then((res) => {
                console.log(res.data);
                if (res.status === 200) {
                    const token = res.data.data.token;
                    if (token) navigator(`/${token}/cookie`, { state: name });
                } else {
                    setName("");
                    setPwd("");
                    Toast("중복된 사용자가 있습니다");
                }
            })
            .catch((error) => {
                console.log(error);
                setName("");
                setPwd("");
                Toast("중복된 사용자가 있습니다");
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
                        text={"회원가입"}
                        disabled={inputState === null || !inputState}
                        onClick={() => {
                            onClickSubmit();
                        }}
                    />
                </div>
            </StyledContainer>
            <StyledToastContainer toastColor={"black"} />
        </DefaultLayout>
    );
};

export default Register;
