import { useLoaderData } from "react-router-dom"
import Post from "./Post";

const Posts = () => {

    const posts = useLoaderData();
  return (
    <div>
        Posts : {posts.length}
        <div className="grid grid-cols-3 border-2 gap-5">
            {
                posts.map(post => <Post key={post.id} post={post}></Post>)
            }
        </div>
    </div>
  )
}

export default Posts