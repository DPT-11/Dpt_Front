import GlobalStyle from "./styles/globalStyles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MediaDiv } from "./styles/common";
import Home from "./page/Home";
import './App.css'
import SelectCookie from "./page/SelectCookie";
//import Question from "./page/Question";
import Login from "./page/Login";
import GuestPage from "./page/GuestPage";
import QuizPlay from "./page/QuizPlay";
import QuizResult from './page/QuizResult';

function App() {
    return (
        <div className="App">
            <GlobalStyle />
            <Router>
                <MediaDiv>
                    <Routes>
                        <Route path="/" element={<Home />}></Route>
                        <Route path="/create" element={<Login />}></Route>
                        <Route
                            path="/:token/cookie"
                            element={<SelectCookie />}
                        ></Route>
                        {/* <Route
                            path="/:token/question"
                            element={<Question />}
                        ></Route> */}

                        <Route path="/guest" element={<GuestPage/>}> </Route>
                        <Route path="/guest/quizPlay" element={<QuizPlay/>}></Route>
                        <Route path="/guest/quizResult" element={<QuizResult/>}></Route>
                        <Route path="*" element={<h1>Not found</h1>}></Route>
                    </Routes>
                </MediaDiv>
            </Router>
        </div>
    );
}

export default App;
