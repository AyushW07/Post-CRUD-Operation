import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addPost } from "./PostAction";
import "./PostForm.css";

const PostForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const post = {
      id: Date.now(),
      title,
      content,
    };
    dispatch(addPost(post));
    setTitle("");
    setContent("");
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      ></textarea>
      <button type="submit">Add Post</button>
    </form>
  );
};

export default PostForm;
