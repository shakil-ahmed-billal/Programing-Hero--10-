import { Link, useNavigate } from 'react-router-dom'

const Post = ({post}) => {
    const { id , title} = post;

    const navigate = useNavigate();
    const handle = () => {
      navigate(`/post/${id}`)
    }
  return (
    <div className='border-2 rounded-3xl p-5 m-5'>
        <p>Post Id : {id}</p>
        <p>Title : {title}</p>
        <Link to={`/post/${id}`}>Post Details</Link>
        <button onClick={handle}> Go Back</button>
    </div>
  )
}

export default Post