import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import About from "./pages/About/About.jsx";
import Auth from "./pages/Auth/Auth.jsx";
import Questions from "./pages/Questions/Questions.jsx";
import AskQuestion from "./pages/AskQuestion/AskQuestion";
import DisplayQuestion from "./pages/Questions/DisplayQuestion";
import Tags from "./pages/Tags/Tags";
import Users from "./pages/Users/Users";
import UserProfile from "./pages/UserProfile/UserProfile";
// import Forget from "./pages/Forget/forget-password.jsx"

const AllRoutes = ({ slidein, handleslidein }) => {
  return (
    <Routes>
      <Route path="/"  element={<Home slidein={slidein} handleslidein={handleslidein} />} />
      <Route path="/about"  element={<About slidein={slidein} handleslidein={handleslidein} />} />
      <Route path="/Auth" element={<Auth />} />
      {/* <Route path="/forget-password" element={<Forget />} /> */}
      <Route
        path="/Questions"
        element={<Questions slidein={slidein} handleslidein={handleslidein} />}
      />
      <Route path="/AskQuestion" element={<AskQuestion />} />
      <Route
        path="/Question/:id"
        element={
          <DisplayQuestion slidein={slidein} handleslidein={handleslidein} />
        }
      />
       <Route
        path="/Tags"
        element={<Tags slidein={slidein} handleslidein={handleslidein} />}
      />
      <Route
        path="/Users"
        element={<Users slidein={slidein} handleslidein={handleslidein} />}
      />
      <Route
        path="/Users/:id"
        element={
          <UserProfile slidein={slidein} handleslidein={handleslidein} />
        }
      />
    </Routes>
  );
};

export default AllRoutes;
