import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import MyCookie from "./page/MyCookie";
import Question from "./page/Question";
import QuestionResult from "./page/QuizResult";
import Register from "./page/Register";
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
