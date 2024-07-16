import React from "react";
import "./LeftSidebar.css";
import { NavLink } from "react-router-dom";
import home from "../../assets/home.png";
import questionhome from "../../assets/question-home.png";
import taghome from "../../assets/tag-home.png";
import users from "../../assets/users.png";

const LeftSidebar = ({ slidein }) => {
  const slideinstyle = {
    transform: "translateX(0%)",
  };
  const slideoutstyle = {
    // transform: "translateX(-100%)",
  };
  return (
    <div
      className="left-sidebar"
      style={slidein ? slideinstyle : slideoutstyle}
    >
      <nav className="side-nav">
        <button className="nav-btn">
          <NavLink to="/" className="side-nav-links" activeclassname="active">
            <img
              src={home}
              alt="home"
              style={{ marginRight: "6px" }}
              activeclassname="active"
            />
            <p>Home</p>
          </NavLink>
        </button>
        <div className="side-nav-div">
          <div>
            <p>PUBLIC</p>
          </div>
          <button className="nav-btn">
            <NavLink
              to="/Questions"
              className="side-nav-links"
              activeclassname="active"
              style={{ paddingLeft: "40px" }}
            >
              <img
                src={questionhome}
                alt="question-home"
                style={{ height: "18px" }}
              />
              <p style={{ paddingLeft: "6px" }}>Questions</p>
            </NavLink>
          </button>
          <button className="nav-btn">
            <NavLink
              to="/Tags"
              className="side-nav-links"
              activeclassname="active"
              style={{ paddingLeft: "40px" }}
            >
              <img src={taghome} alt="taghome" style={{ height: "18px" }} />
              <p style={{ paddingLeft: "6px" }}>Tags</p>
            </NavLink>
          </button>
          <button className="nav-btn">
            <NavLink
              to="/Users"
              className="side-nav-links"
              activeclassname="active"
              style={{ paddingLeft: "40px" }}
            >
              <img src={users} alt="users" style={{ height: "18px" }} />
              <p style={{ paddingLeft: "6px" }}>Users</p>
            </NavLink>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default LeftSidebar;
