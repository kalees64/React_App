import { Link, useNavigate, useParams } from 'react-router-dom'

const FullPost = ({posts,setPosts}) => {
    const {id} = useParams()
    const navigate = useNavigate()

    const post = posts.find((post)=>post.id === Number(id))
    // console.log(post)
    const handleDelete = (id)=>{

      const remainPosts = posts.filter((post)=>(post.id!==Number(id)))

      setPosts(remainPosts)

      navigate("/")

    }
    

  return (
    <div>
      {
        post &&
        <article className='post-preview'>
          <h1 className='post-preview-title'>{post.title}</h1>
          <p className='post-preview-body'>{post.body}</p>
          <div className='btn-group'>
            <button
            type='button'
            onClick={()=>handleDelete(post.id)}
            className='post-preview-delete'
            >Delete</button>
            <button
            type='button'
            className='post-preview-edit'
            ><Link to={`/${post.id}/edit`} style={{color:"black"}}>Edit</Link></button>
          </div>
        </article>
      }
      {
        !post &&
        <article className='post-preview'>
          <h1 className='post-preview-title'>No Post Yet</h1>
          <Link to="/"><p className='post-preview-link'>Visit our home page</p></Link>
        </article>
      }
    </div>
  )
}

export default FullPost