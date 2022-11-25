function KjwProgress({ status }) {
    return (
        <>
            {status === "correct" ? (
                <img src={require(`../img/treeGreen.png`)} />
            ) : null}
            {status === "uncorrect" ? (
                <img src={require(`../img/treeRed.png`)} />
            ) : null}

            {status === "default" ? (
                <img src={require(`../img/treeGray.png`)} />
            ) : null}
        </>
    );
}

export default KjwProgress;
