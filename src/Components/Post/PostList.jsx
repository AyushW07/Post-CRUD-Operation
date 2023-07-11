import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deletePost } from "./PostAction";
import "./PostList.css";

const PostList = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);

  const handleDelete = (postId) => {
    dispatch(deletePost(postId));
  };

  return (
    <ul className="post-list">
      {posts.map((post) => (
        <li key={post.id} className="post-item">
          <h3>{post.title}</h3>
          <p>{post.content}</p>
          <button onClick={() => handleDelete(post.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default PostList;
