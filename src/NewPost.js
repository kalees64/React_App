import React, { useState } from 'react'
import axios from './api/axios'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const NewPost = ({posts,setPosts,navigate}) => {

  const [titleValue,setTitleValue] = useState('')
  const [bodyValue,setBodyValue] = useState('')
  // const [result,setResult] = useState('')

  const handleSubmit=(e)=>{
    e.preventDefault()
    let idvalue = posts.length? posts[posts.length-1].id +1:1
    const newPost = {
      id : idvalue,
      title : titleValue,
      body : bodyValue
    }
    const allPosts = [...posts,newPost]
    setPosts(allPosts)
    toast("New post Added Successfully")
    // localStorage.setItem("post_data",JSON.stringify(allPosts))
    axios.post('/post',newPost)
    setBodyValue('')
    setTitleValue('')
    // setResult("New Post added Successfully")
    navigate('/')
  }

  return (
    <div className='newpost'>
        <h2 className='newpost-title'>New Post</h2>
        <form className='newpost-form' onSubmit={handleSubmit}>
          <input
          type='text'
          placeholder='Title'
          value={titleValue}
          onChange={(e)=>{setTitleValue(e.target.value)}}
          required
          />
          <textarea 
          placeholder='body'
          rows={10}
          cols={50}
          value={bodyValue}
          onChange={(e)=>{setBodyValue(e.target.value)}}
          required
          ></textarea>
          <button
          type='submit'
          >Submit</button>
          {/* <p>{result}</p> */}
        </form>
        <ToastContainer/>
    </div>
  )
}

export default NewPost