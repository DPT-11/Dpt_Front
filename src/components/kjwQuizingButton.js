import styled from "styled-components";

const StyledQuizButton = styled.button`
    z-index: 100;
    background-color: white;
    border-radius: 20px;
    text-align: center;
    font-size: 1.1rem;
    line-height: 38px;
    width: 100%;

    &:disabled {
        color: white;
    }
    :hover {
        filter: brightness(0.9);
    }
`;
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
            t.style.backgroundColor = "white";
            t.style.color = "black";
        }, 2000);
    };

    return (
        <StyledQuizButton
            className="kjwQuizingBtn"
            onClick={(e) => {
                props.selesctListener(props.option, props.answer);
                {
                    isResult(e.target);
                }
            }}
        >
            {props.option}
        </StyledQuizButton>
    );
}

export default KjwQuizingButton;
