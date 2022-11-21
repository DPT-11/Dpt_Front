import KjwQuizingButton from "./kjwQuizingButton";

function KjwQuizingButtonArray(props) {
    return (
        <div
            style={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                paddingTop: "50px",
                paddingBottom: "30px",
                alignItems: "center",
            }}
        >
            {props.options.map((option, index) => {
                return (
                    //<KjwQuizingButton key={index} option={option} answer={props.answer} selesctListener={props.selectListener} checkListener={props.checkListener}/>
                    <KjwQuizingButton
                        check={props.check}
                        key={index}
                        option={option}
                        answer={props.answer}
                        selesctListener={props.selectListener}
                    />
                );
            })}
        </div>
    );
}
export default KjwQuizingButtonArray;
