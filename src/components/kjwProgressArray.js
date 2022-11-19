import KjwProgress from "./kjwProgress";

function KjwProgressArray(props){
    const divProgressCss={
        display: "flex",
        height:"25px",
        marginBottom:"22px",
        justifyContent:"center"
    }

    return(
        <div style={divProgressCss}>
            {[...Array(5)].map((n, index) =>{
                return(
                    <KjwProgress key={index} current={index} progress={props.progress}/>
                )
            })}
        </div>
    );
}
export default KjwProgressArray;