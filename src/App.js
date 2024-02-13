import React, { useState } from "react";
import Header from "./Header";
import './App.css'
import PostPage from "./PostPage"
import { Route, Routes, useNavigate } from "react-router-dom";
import About from "./About"
import NewPost from "./NewPost"
import FullPost from "./FullPost"
import NotFound from './NotFound'
import EditPost from "./EditPost";

function App() {

  const appTitle = "VK64 SOCIAL MEDIA"
  const navigate = useNavigate()

  const [posts , setPosts] = useState(JSON.parse(localStorage.getItem("post_data")) || [
    {
      id:1,
      title : "First Post",
      body : "It was the First Post"
    },
    {
      id:2,
      title : "Second Post",
      body : "It was the Second Post"
    },
    {
      id:3,
      title : "Third Post",
      body : "It was the Third Post"
    }
  ])

  //Edit Page
  
  
  return (
    <div className="app-body">
      <Header title={appTitle}/>
      <Routes>
        <Route path="/" element={<PostPage posts={posts}/>} />
        <Route path="/about" element={<About/>}/>
        <Route path="/post" element={<NewPost 
          posts={posts}
          setPosts={setPosts}
          navigate ={navigate}
        />} />
        <Route path="/:id" element={<FullPost 
        setPosts={setPosts}
        posts={posts}/>}/>
        <Route path="/:id/edit" element={<EditPost
        posts={posts}
        setPosts={setPosts}
        />}/>
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </div>
  );
}

export default App;
