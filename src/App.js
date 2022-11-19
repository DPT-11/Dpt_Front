import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import "./App.css";
import SelectCookie from "./page/SelectCookie";
import MyCookie from "./page/MyCookie";
import Question from "./page/Question";
import QuestionResult from "./page/QuestionResult";
import Register from "./page/Register";
import Login from "./page/Login";
import NotFound from "./page/NotFound";
import GuestPage from "./page/GuestPage";
import QuizPlay from "./page/QuizPlay";
import QuizResult from "./page/QuizResult";
import SelectCookie from "./page/SelectCookie";
import { MediaDiv } from "./styles/common";
import GlobalStyle from "./styles/globalStyles";

function App() {
    return (
        <div className="App">
            <GlobalStyle />
            <Router>
                <MediaDiv>
                    <Routes>
                        <Route path="/" element={<Home />}></Route>
                        <Route path="/create" element={<Register />}></Route>
                        <Route path="/login" element={<Login />}></Route>
                        <Route
                            path="/:token/cookie"
                            element={<SelectCookie />}
                        ></Route>
                        <Route
                            path="/:token/question"
                            element={<Question />}
                        ></Route>
                        <Route
                            path="/:token/share"
                            element={<QuestionResult />}
                        ></Route>

                        <Route path="/guest" element={<GuestPage />}></Route>
                        <Route
                            path="/guest/quizPlay"
                            element={<QuizPlay />}
                        ></Route>
                        <Route
                            path="/guest/quizResult"
                            element={<QuizResult />}
                        ></Route>
                        <Route path="*" element={<NotFound />}></Route>
                        <Route path="/:token/mycookies" element={<MyCookie />}>
                            {" "}
                        </Route>
                        <Route path="*" element={<h1>Not found</h1>}></Route>
                    </Routes>
                </MediaDiv>
            </Router>
        </div>
    );
}

export default App;
