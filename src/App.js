import React, { useEffect, useState } from "react";
import Header from "./Header";
import './App.css'
import PostPage from "./PostPage"
import { Route, Routes, useNavigate } from "react-router-dom";
import About from "./About"
import NewPost from "./NewPost"
import FullPost from "./FullPost"
import NotFound from './NotFound'
import EditPost from "./EditPost";
import axios from "./api/axios";

function App() {

  const appTitle = "VK64 SOCIAL MEDIA"
  const navigate = useNavigate()

  const [posts , setPosts] = useState([])

  useEffect(()=>{
    const fetchData=async()=>{
      const res = await axios.get('/post')
      // console.log(res.data)
      setPosts(res.data)
    }
    (async()=>await fetchData())()
  },[])

  //Edit Page
  
  
  return (
    <div className="app-body">
      <Header title={appTitle}/>
      <Routes>
        <Route path="/" element={<PostPage posts={posts.reverse()}/>} />
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
