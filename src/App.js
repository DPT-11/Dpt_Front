import GlobalStyle from "./styles/globalStyles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MediaDiv } from "./styles/common";
import Home from "./page/Home";
import SelectCookie from "./page/SelectCookie";
import Question from "./page/Question";
import QuestionResult from "./page/QuizResult";
import Register from "./page/Register";

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
                        <Route path="*" element={<h1>Not found</h1>}></Route>
                    </Routes>
                </MediaDiv>
            </Router>
        </div>
    );
}

export default App;
