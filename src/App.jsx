import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import Visualize from "./pages/Visualize"; // Correct import

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/visualize" element={<Visualize />} />
      </Routes>
    </Router>
  );
}

export default App;
