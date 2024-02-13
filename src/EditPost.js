import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const EditPost = ({posts,setPosts}) => {

    const {id} = useParams()
    const navigate = useNavigate()
    const post = posts.find((post)=>post.id===Number(id))
    const [editTitle,setEditTitle]= useState(post.title)
    const [editBody,setEditBody]= useState(post.body)


    const handleEdit =(e)=>{
        e.preventDefault()
        const editPost ={
            id:Number(id),
            title : editTitle,
            body: editBody
        }
        const postList = posts.map((post)=>{
            if(post.id === Number(id)){
                return editPost
            }
            else {
                return post
            }
            
        })
        setPosts(postList)
        localStorage.setItem("post_data",JSON.stringify(postList))
        navigate(`/${post.id}`)

    }

  return (
    <div className='edit-post'>
        <h2 className='newpost-title'>Edit Post</h2>
        <form className='newpost-form' onSubmit={handleEdit}>
          <input
          type='text'
          placeholder='Title'
          value={editTitle}
          onChange={(e)=>{setEditTitle(e.target.value)}}
          />
          <textarea 
          placeholder='body'
          rows={10}
          cols={50}
          value={editBody}
          onChange={(e)=>{setEditBody(e.target.value)}}
          ></textarea>
          <button
          type='submit'
          >Submit</button>
        </form>
    </div>
  )
}

export default EditPost