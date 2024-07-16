import React from "react";

import "./Users.css";
import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";
import UsersList from "./UsersList";

const Users = ({ slidein, handleslidein }) => {
  return (
    <div className="home-container-1">
      <LeftSidebar slidein={slidein} handleslidein={handleslidein} />
      <div className="home-container-2" style={{ marginTop: "30px" }}>
        <h1 style={{ fontWeight: "600", fontSize:"30px", padding:"10px"}}>Users</h1>
        <UsersList />
      </div>
    </div>
  );
};

export default Users;