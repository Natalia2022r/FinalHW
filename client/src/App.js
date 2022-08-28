import { Routes, Route } from "react-router-dom";
import "./style";
import Users from "./components/User/Users";
import AddUsers from "./components/User/addUser";
import AddPost from "./components/Posts/AddPost";
import Posts from "./components/Posts/Posts";
import Navigation from "./components/Navbar/Navigation";

function App() {
  return (
    <div className="app">
      <Navigation />
      <Routes>
        <Route path="/" element={<Users />}></Route>
        <Route path="/addusers" element={<AddUsers />}></Route>
        <Route path="/post" element={<Posts />}></Route>
        <Route path="/addpost" element={<AddPost />}></Route>
      </Routes>
    </div>
  );
}

export default App;
