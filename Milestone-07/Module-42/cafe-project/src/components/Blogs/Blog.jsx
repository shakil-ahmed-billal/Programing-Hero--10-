import PropTypes from 'prop-types'
import { FaBookmark } from "react-icons/fa";

const Blog = ({blog , addBookmark , readTime}) => {
    const {coverPic, title, authorImage, postedDate,readingTime, hashtags} = blog
  return (
    <div className='p-4 border-2 rounded-xl mb-5'>
        <div className="">
            <img className=' rounded-xl' src={coverPic} alt="" />
        </div>
        <div className=" flex justify-between my-5">
            <div className="flex me-3">
                <div className="w-12 h-12 rounded-full">
                    <img className='w-full rounded-full' src={authorImage} alt="" />
                </div>
                <div className="ml-5">
                    <p className='font-extrabold'>Mr. Raju</p>
                    <p className='text-sm font-semibold'>{postedDate}</p>
                </div>
            </div>
            <button onClick={()=>addBookmark(blog)}  className="flex items-center gap-2">
            {readingTime} min read<FaBookmark />
            </button>
        </div>
        <p className='text-xl font-bold'>{title}</p>
        <div className=" flex gap-5 my-5"> 
            {hashtags.map((has , idx)=><p key={idx}>{has}</p>)}
        </div>
        <button onClick={()=>readTime(readingTime)} className='mb-5 underline text-purple-600'>Mark As Read </button>
    </div>
  )
}

Blog.propTypes = {
    blog: PropTypes.object , 
    addBookmark: PropTypes.func,
    readTime: PropTypes.func
}

export default Blog