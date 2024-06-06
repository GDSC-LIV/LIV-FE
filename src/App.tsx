
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Routes import 추가
import Home from "./pages/home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        </Routes>
    </Router>
  );
}

export default App;
