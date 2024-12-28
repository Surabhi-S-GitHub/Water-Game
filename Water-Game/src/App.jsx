import Home from "./Components/Home";
import AboutUs from "./Components/AboutUs";
import LeaderBoard from "./Components/LeaderBoard";
import SignIn from "./Components/SignIn";
import SignUp from "./Components/SignUp";

import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom"; // Correct import

function App() {
  return (
    <Router>
      <nav className="bg-cyan-700 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-3xl font-bold text-center flex-1 italic">Aqua Smart</div>
          <div className="flex space-x-6">
            <Link to="/" className="bg-blue-700 px-4 py-2 rounded hover:bg-blue-600">Home</Link>
            <Link to="/AboutUs" className="bg-blue-700 px-4 py-2 rounded hover:bg-blue-600">About Us</Link>
            <Link to="/LeaderBoard" className="bg-blue-700 px-4 py-2 rounded hover:bg-blue-600">Leader Board</Link>
            <Link to="/SignIn" className="bg-blue-700 px-4 py-2 rounded hover:bg-blue-600">Sign In</Link>
            <Link to="/SignUp" className="bg-blue-700 px-4 py-2 rounded hover:bg-blue-600">Sign Up</Link>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/LeaderBoard" element={<LeaderBoard/>}/>
        <Route path="/SignIn" element={<SignIn/>}/>
        <Route path="/SignUp" element={<SignUp/>}/>
      </Routes>
    </Router>
  );
}

export default App;
