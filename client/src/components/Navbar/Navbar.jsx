

import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
 import bars from "../../assets/bars.png";
 import logo from "../../assets/logo.png";
import search from "../../assets/search-icon.svg";
import Avatar from "../Avatar/Avatar";
import "./Navbar.css";
import { setCurrentUser } from "../../actions/CurrentUser.js";
import { jwtDecode } from "jwt-decode";
function Navbar({ handleslidein }) {
  var User = useSelector((state) => state.currentUserreducer);
  // console.log(User)
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handlelogout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/");
    dispatch(setCurrentUser(null));
  };

  useEffect(() => {
    const token = User?.token;
    if (token) {
      const decodedtoken = jwtDecode(token);
      if (decodedtoken.exp * 1000 < new Date().getTime()) {
        handlelogout();
      }
    }
    dispatch(setCurrentUser(JSON.parse(localStorage.getItem("Profile"))));
  }, [User?.token, dispatch]);
  return (
    <nav className="main-nav">
      <div className="navbar">
        <button className="slide-in-icon" onClick={() => handleslidein()}>
          <img src={bars} alt="bars" width="15" />
        </button>
        <div className="navbar-1">
          <Link to="/" className="nav-item nav-logo">
            <img src={logo} alt="logo"  />
          </Link>
          <Link to="/about" className="nav-items nav-btn res-nav">
            About
          </Link>
          {/* <Link to="/" className="nav-items nav-btn res-nav">
            Products
          </Link> */}
          <Link to="/"  className="nav-items nav-btn res-nav">
            For Teams
          </Link>
          <form>
            <input type="text" placeholder="Search..." />
            <img src={search} alt="search" width="18" className="search-icon" />
          </form>
        </div>
        <div className="navbar-2">
          {User === null ? (
            <Link to="/Auth" className="nav-item nav-links">
              Log in
            </Link>
          ) : (
            <>
              <Avatar
                backgroundColor="#009dff"
                px="15px"
               py="10px"
                borderRadius="50%"
                color="white"
                width="40px"
                height="40px"
                
              >
                <Link
                  to={`/Users/${User?.result?._id}`}
                  style={{ color: "white", textDecoration: "none", }}
                >
                  {User.result.name.charAt(0).toUpperCase()}
                </Link>
              </Avatar>
              <button className="nav-tem nav-links" onClick={handlelogout} style={{marginLeft:"10px"}}>
                Log out
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
