import axios from "axios";
const Api = axios.create({
    baseURL: "https://dpt-back.herokuapp.com/",
    timeout: 30000,
    params: {},
    headers: {
        "Access-Control-Allow-Origin": "*",
    },
    withCredentials: true,
});

export const requestRegist = async (name, pwd) => {
    return Api.post("user/register", {
        username: name,
        password: pwd,
    }).catch((error) => {
        console.log(error);
    });
};

export const requestLogin = async (name, pwd) => {
    return Api.post("user/login", {
        username: name,
        password: pwd,
    }).catch((error) => {
        console.log(error);
    });
};

export const requestSetCookie = async (token, cookieId) => {
    return Api.post("quiz/cookie", { user: token, cookie: cookieId }).catch(
        (e) => {
            console.log(e);
        }
    );
};

export default Api;
