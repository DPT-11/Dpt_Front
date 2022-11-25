import { CopyButton } from "./button";

function KjwButtonCopy() {
    const handleCopyClipBoard = async () => {
        try {
            let url = "https://your-christmas-cookie.netlify.app";
            await navigator.clipboard.writeText(url);
        } catch (error) {
            alert("복사 실패!");
            console.log(error);
        }
    };

    return (
        <CopyButton
            id="btn"
            url="https://your-christmas-cookie.netlify.app"
            onClick={handleCopyClipBoard}
        />
    );
}

export default KjwButtonCopy;
