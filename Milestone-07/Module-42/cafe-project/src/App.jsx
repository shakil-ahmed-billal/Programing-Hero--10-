
import { useEffect, useState } from 'react';
import './App.css';
import Blogs from './components/Blogs/Blogs';
import Header from './components/Header';
import BookMarks from './components/Blogs/BookMarks';

function App() {
  
  const [blogs , setBlogs] = useState([]);
  const [marks , setMarks] =useState([])
  const [readTimeMark , setReadTime] = useState(0)

  useEffect(()=>{
    fetch('blogs.json')
    .then(res => res.json())
    .then(data => setBlogs(data))
  },[])

  const addBookmark = (mark) =>{
    const newMarks = [...marks , mark]
    setMarks(newMarks)
  }
  const readTime = (time) =>{
    const newTime = readTimeMark + time ;
    setReadTime(newTime)
  }

  return (
    <>
      <Header></Header>
      <div className=" xl:w-10/12 2xl:w-8/12 w-11/12 mx-auto grid md:grid-cols-3 gap-5">
        <Blogs key={blogs.id} addBookmark={addBookmark} blogs={blogs} readTime={readTime}></Blogs>
        <BookMarks readTimeMark={readTimeMark} marks={marks}></BookMarks>
      </div>
    </>
  )
}

export default App
