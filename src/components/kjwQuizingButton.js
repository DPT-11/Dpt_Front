function KjwQuizingButton(props) {
    const isResult = (t) => {
        if (props.option === props.answer) {
            t.style.backgroundColor = "#008566";
            t.style.color = "white";
        } else {
            t.style.backgroundColor = "#D43C2F";
            t.style.color = "white";
        }
        setTimeout(function () {
            t.style.backgroundColor = "#F7EEE5";
            t.style.color = "black";
        }, 2000);
    };

    return (
        <button
            className="kjwQuizingBtn"
            onClick={(e) => {
                props.selesctListener(props.option, props.answer);
                {
                    isResult(e.target);
                }
            }}
        >
            {props.option}
        </button>
    );
}

export default KjwQuizingButton;
