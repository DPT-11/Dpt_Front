import { CopyButton } from "./button";

function KjwButtonCopy() {
    const handleCopyClipBoard = async () => {
        try {
            let url = window.document.location.href;
            await navigator.clipboard.writeText(url);
        } catch (error) {
            alert("복사 실패!");
            console.log(error);
        }
    };

    return (
        <CopyButton
            id="btn"
            url="https://christmasquiz.com"
            onClick={handleCopyClipBoard}
        />
    );
}

export default KjwButtonCopy;
