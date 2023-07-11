import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteUser } from "./UserAction";
import "./UserList.css";

const UserList = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);

  const handleDelete = (userId) => {
    dispatch(deleteUser(userId));
  };

  return (
    <ul className="user-list">
      {users.map((user) => (
        <li key={user.id} className="user-item">
          <h3>{user.name}</h3>
          <p>{user.email}</p>
          <button onClick={() => handleDelete(user.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default UserList;
