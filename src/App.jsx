import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes, NavLink } from "react-router-dom";
import "./App.css"; // Assuming you add the necessary CSS for hover/active effects.

const Home = lazy(() => import("./Components/Home"));
const AboutUs = lazy(() => import("./Components/AboutUs"));
const LeaderBoard = lazy(() => import("./Components/LeaderBoard"));
const SignIn = lazy(() => import("./Components/SignIn"));
const SignUp = lazy(() => import("./Components/SignUp"));

const Navbar = React.memo(() => {
  return (
    <nav className="bg-cyan-700 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-3xl font-bold italic">Aqua Smart</div>
        <div className="flex space-x-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `px-4 py-2 ${
                isActive
                  ? "border-b-2 border-white"
                  : "hover:border-b-2 hover:border-white"
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/AboutUs"
            className={({ isActive }) =>
              `px-4 py-2 ${
                isActive
                  ? "border-b-2 border-white"
                  : "hover:border-b-2 hover:border-white"
              }`
            }
          >
            AboutUs
          </NavLink>
          <NavLink
            to="/LeaderBoard"
            className={({ isActive }) =>
              `px-4 py-2 ${
                isActive
                  ? "border-b-2 border-white"
                  : "hover:border-b-2 hover:border-white"
              }`
            }
          >
            LeaderBoard
          </NavLink>
          <NavLink
            to="/SignIn"
            className={({ isActive }) =>
              `px-4 py-2 ${
                isActive
                  ? "border-b-2 border-white"
                  : "hover:border-b-2 hover:border-white"
              }`
            }
          >
            Sign In/Sign Up
          </NavLink>
        </div>
      </div>
    </nav>
  );
});

function App() {
  return (
    <Router>
      <Navbar />
      <Suspense fallback={<div className="text-center mt-10">Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/LeaderBoard" element={<LeaderBoard />} />
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/SignUp" element={<SignUp />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
