import { useState } from "react";

function KjwStartNameForm(props) {
    const formCss = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        fontFamily: "Noto Sans KR sans-serif",
    };
    const inputCss = {
        width: "327px",
        height: "50px",
        backgroundColor: "#FFF0E7",
        border: "solid 2px #B3ACAC",
        borderRadius: "20px",
        fontFamily: "'Noto Sans KR', sans-serif !important",
        fontSize: "1.2rem",
        placeHolderColor: "#B7B0B0",
        color: "black",
        marginBottom: "24px",
        textAlign: "center",
    };

    const [input, setInput] = useState("");

    const submit = (event) => {
        event.preventDefault();
    };
    const setInputListener = (e) => {
        setInput(e.target.value);
        props.inputHandler(e.target.value);
    };

    /*<button className="kjwStartBtn" disabled={!input}>시작</button> */
    return (
        <form onSubmit={submit} style={formCss}>
            <input
                name="name"
                value={input}
                onChange={(e) => setInputListener(e)}
                style={inputCss}
                type="text"
                placeholder={props.placeholder}
                required
            />

            <button
                className="kjwStartBtn"
                disabled={!input}
                onClick={props.submitHanlder}
            >
                시작
            </button>
        </form>
    );
}

export default KjwStartNameForm;
