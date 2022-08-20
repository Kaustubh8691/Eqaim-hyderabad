import React from 'react'
import "./blog.css";
import { useNavigate } from 'react-router-dom';
import noimage from "../images/noimage.png"
import home from "../images/home.png"
import Header from './Header';


const Blogpost = ({blogid}) => {

  const navigate=useNavigate()

  const onhomebtn=()=>{
    navigate("/");
  }
  
  

  return (
    <>
    <Header/>
    
    <div className='container-blog'> 
    <img className=" home btns1"  src={home} onClick={onhomebtn} alt ="home" />
    <div className='data-sub-conatiner'>
      {blogid.imageurl ? <img src={blogid.imageurl} className="Blogpage-image" alt="data" />: <img src={noimage} className="Blogpage-image" alt="data" />}
      <div className='tital-id'>{blogid.title}</div>
      <div className="disc-id">{blogid.description}</div>
    </div>

    </div>
    </>
  )
}

export default Blogpost