export const addPost = (post) => {
  return {
    type: "ADD_POST",
    payload: post,
  };
};

export const updatePost = (post) => {
  return {
    type: "UPDATE_POST",
    payload: post,
  };
};

export const deletePost = (postId) => {
  return {
    type: "DELETE_POST",
    payload: postId,
  };
};
