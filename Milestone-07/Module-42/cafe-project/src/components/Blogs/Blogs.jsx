import PropTypes from 'prop-types'
import Blog from './Blog';

const Blogs = ({blogs , addBookmark , readTime}) => {

  return (
    <div className=' md:col-span-2 '>
      <div className="">
        {
          blogs.map((blog)=> <Blog addBookmark={addBookmark} readTime={readTime} key={blog.id} blog={blog}></Blog>)
        }
      </div>
    </div>
  )
}

Blogs.propTypes = {
  blogs: PropTypes.object ,
  addBookmark: PropTypes.func ,
  readTime: PropTypes.func
}

export default Blogs