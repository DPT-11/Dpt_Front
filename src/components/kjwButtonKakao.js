import { KakaoSahreButton } from "./button";

function KjwButtonKakao(props){
    const OnHandleShareKaKao = () => {
        if(!window.Kakao.isInitialized())
            window.Kakao.init('b89e1bf0d9c73149ca2c957e3ee0185a')
        window.Kakao.Share.sendDefault({
            objectType: 'feed',
            content:{
                title: `${props.name}님이 만든 쿠키 보러가기`,
                description: '내가 만든 쿠키',
                imageUrl:
                    'https://mud-kage.kakao.com/dn/NTmhS/btqfEUdFAUf/FjKzkZsnoeE4o19klTOVI1/openlink_640x640s.jpg',
                link:{
                    mobileWebUrl: 'https://developers.kakao.com',
                    webUrl: 'https://developers.kakao.com'
                }
            },
            buttons: [
                {
                    title:'보러가기',
                    link: {
                        mobileWebUrl: 'https://developers.kakao.com',
                        webUrl:'https://developers.kakao.com'
                    }
                }
            ]
        });
    };
    return(
        <>
            <KakaoSahreButton onClick={OnHandleShareKaKao}>
                공유하기
            </KakaoSahreButton>
        </>
    );
}
export default KjwButtonKakao;