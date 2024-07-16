import React,{useEffect} from "react";
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllUsers } from "../../actions/users";

import User from "./User";
import "./Users.css";

const UsersList = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);


  useEffect(() => {
    dispatch(fetchAllUsers());
  }, [dispatch]);
  return (
    <div className="user-list-container">
      {users.map((user) => (
        <User user={user} key={user?._id} />
      ))}
    </div>
  );
};

export default UsersList;