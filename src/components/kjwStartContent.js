function KjwStartContent(props) {
    const name = {
        fontFamily: "'Noto Sans KR', sans-serif !important",
        fontSize: "24px",
    };
    return (
        <div className="kjw_start_content">
            <span style={name}>{props.name}</span>님은
            <br />
            어떤 크리스마스를 보내고 싶을까요?
            <br />
            퀴즈를 맞히면서 쿠키를 구워보아요!
        </div>
    );
}
export default KjwStartContent;
