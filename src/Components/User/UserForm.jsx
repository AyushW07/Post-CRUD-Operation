import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "./UserAction";
import "./UserForm.css";

const UserForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      id: Date.now(),
      name,
      email,
    };
    dispatch(addUser(user));
    setName("");
    setEmail("");
  };

  return (
    <form className="user-form-container" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type="submit">Add User</button>
    </form>
  );
};

export default UserForm;
