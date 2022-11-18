import { CopyButton } from "./button";

function KjwCopy() {
    const handleCopyClipBoard = async () => {
        try {
            let url = window.document.location.href;
            await navigator.clipboard.writeText(url);
            
            alert('복사 성공!');
            } catch (error) {
                alert('복사 실패!');
                console.log(error);
            }
        };

    return (
        <CopyButton id="btn" url="https://christmasquiz.com" onClick={handleCopyClipBoard}/>
    );
}

export default KjwCopy;