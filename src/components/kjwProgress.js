
import { useState } from 'react';
import treeGray from "../img/treeGray.png"
import treeGreen from "../img/treeGreen.png"
import treeRed from "../img/treeRed.png"

function KjwProgress(props){

    return (
        <>
            {props.current>props.progress && <img src={require(`../img/treeGray.png`)} />}
            {props.current<props.progress && <img src={require(`../img/treeGreen.png`)} />}
            {props.current==props.progress && <img src={require(`../img/treeRed.png`)} />}
        </>
    );
}

export default KjwProgress;