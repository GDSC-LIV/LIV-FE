
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Routes import 추가
import Home from "./pages/home";
import ProjectPage from "./pages/projectPage";
import Mypage from "./pages/mypage";
import Login from "./pages/login";
import Signup from "./pages/singup";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Project" element={<ProjectPage />} />
        <Route path="/Mypage" element={<Mypage />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />

        </Routes>
    </Router>
  );
}

export default App;
