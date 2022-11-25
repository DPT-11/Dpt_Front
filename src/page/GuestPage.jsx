import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import { requestHostInfo } from "../api/index";
import KjwStart from "../components/kjwStart";

function GuestPage() {
    const [user, setUser] = useState(null); // 결과값
    const [loading, setLoading] = useState(false); // 로딩 여부
    const [error, setError] = useState(null); // 에러
    const { token } = useParams();

    const fetchUser = async () => {
        try {
            setUser(null);
            setError(null);
            setLoading(true); //로딩이 시작됨
            requestHostInfo(token)
                .then((res) => {
                    setUser(res.data.data);
                })
                .catch((e) => {
                    console.log(e);
                    setError(e);
                });
        } catch (e) {
            console.log(e);
            setError(e);
        }
        setLoading(false);
    };

    useEffect(() => {
        fetchUser();
    }, []);

    if (loading) return <span>로딩중..</span>;
    if (error) return <span>에러 발생!!</span>;
    if (!user) return null; //users값이 유효하지 않는 경우

    return (
        <div className="kjw_body" style={{ minHeight: "110vh" }}>
            <div className="kjw_main">
                <KjwStart
                    owner={user.name}
                    token={token}
                    cookieId={user.cookieId}
                />
            </div>
        </div>
    );
}

export default GuestPage;
