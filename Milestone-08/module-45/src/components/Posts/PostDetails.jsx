import { useLoaderData, useNavigate, useParams } from "react-router-dom"

const PostDetails = () => {

    const details = useLoaderData();
    const navigate = useNavigate();
    const {postId} = useParams();
    
    const handle = () =>{
      navigate(-1)
    }


    const {title , id , body} = details;
    console.log(postId);
  return (
    <div>
        <h3>Post Details : {id} </h3>
        <p>Title : {title}</p>
        <p><small>{body}</small></p>
        <button onClick={handle} >Go Back</button>
    </div>
  )
}

export default PostDetails