import React from 'react'
import './App.css'
import { Link } from 'react-router-dom'

const Post = ({post}) => {
  return (
    <div>
      
        <article className='app-post'>
              <Link to={`/${post.id}`} style={{color:"black"}}> <h3 className='app-post-title'>{post.title}</h3></Link>
              <p className='app-post-body'>{post.body}</p>
        </article>
    </div>
  )
}

export default Post