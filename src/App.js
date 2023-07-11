import "./App.css";
import PostForm from "./Components/Post/PostForm";
import PostList from "./Components/Post/PostList";
import UserForm from "./Components/User/UserForm";
import UserList from "./Components/User/UserList";

function App() {
  return (
    <div className="App">
      <h1>Posts</h1>
      <PostForm />
      <PostList />

      <h1>Users</h1>
      <UserForm />
      <UserList />
    </div>
  );
}

export default App;
