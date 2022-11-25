import axios from "axios";
const Api = axios.create({
    // baseURL: "https://your-christmas-quiz.herokuapp.com", //"http://localhost:8000",
    baseURL: "http://localhost:8000",
    timeout: 30000,
    params: {},
    headers: {
        "Access-Control-Allow-Origin": "*",
    },
    withCredentials: true,
});

export const requestRegist = async (name, pwd) => {
    return Api.post("host/register", {
        name: name,
        password: pwd,
    }).catch((error) => {
        console.log(error);
    });
};

export const requestLogin = async (name, pwd) => {
    return Api.post("host/login", {
        name: name,
        password: pwd,
    }).catch((error) => {
        console.log(error);
    });
};

export const requestSetCookie = async (token, cookieId) => {
    return Api.post(`host/${token}/cookie`, {
        cookieId: cookieId,
    }).catch((e) => {
        console.log(e);
    });
};

export const requestSetQuestions = async (token, options, answer) => {
    return Api.post(`host/${token}/quiz`, {
        options: options,
        answer: answer,
    }).catch((e) => {
        console.log(e);
    });
};

export const requestHostInfo = async (token) => {
    return Api.post(`host/validation`, {
        token: token,
    }).catch((e) => {
        console.log(e);
    });
};

export const requestHostQuiz = async (token, guestName) => {
    return Api.post(`guest/${token}/quiz`, {
        guestName: guestName,
    }).catch((e) => {
        console.log(e);
    });
};

export const requestRegistGuest = async (token, body) => {
    return Api.post(`guest/${token}/register`, body).catch((e) => {
        console.log(e);
    });
};

export const requestMyCookies = async (token) => {
    return Api.get(`host/${token}/cookies`).catch((e) => {
        console.log(e);
    });
};

export const requestUpdateComment = async (id, comment) => {
    return Api.post(`guest/comment`, {
        guestId: id,
        comment: comment,
    }).catch((e) => {
        console.log(e);
    });
};

export default Api;
