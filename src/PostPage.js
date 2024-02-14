import Post from './Post'
import { Link } from 'react-router-dom'

const PostPage = ({posts}) => {

  // const updatedPost = posts.reverse()
  // const [searchValue,setSearchValue]= useState('')

  // const [filterPosts,setFilterPosts] = useState(posts)


  if(posts.length>0){
    return (  
      
      <section className='post'>
        {/* <form className='form-search' onSubmit={(e)=>{e.preventDefault()}} >
          <input 
          type='text'
          placeholder='Search'
          value={searchValue}
          onChange={(e)=>{
            setSearchValue(e.target.value)
            if(searchValue.length){
              setFilterPosts((posts.filter((post)=>(post.body.toLowerCase()).includes(searchValue.toLowerCase()))))
            }
              else{
                setFilterPosts(posts)
              }
            }
        }
          />
        </form> */}
          {posts.map((post)=>{
            return(  
              <Post post={post} key={post.id} id = {post.id}/>   
            )
          })} 
      </section>
  )}
  else{
    return(
      <section className='post'>
        <h1><Link to='/post'>Create Post</Link></h1>
      </section>
    )
  }
}

export default PostPage