import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Appon from "./viewerprofile";
import Appy from "./editprofile";
import Profile from "./profile";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/viwer" element={<Appon/>} />
        <Route path="/" element={<Profile/>} />
        <Route path="/discard" element={<Appy/>} />
        
      </Routes>
    </Router>
  );
}

export default App;
