import React from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useEffect,useState } from 'react';
import axios from "axios"
import home from "../images/home.png"
import "./home.css"
import Header from "./Header"
import NewBlog from "../images/NewBlog.png"
import { useNavigate } from 'react-router-dom';


const Home = ({setBlogid}) => {
  const navigate=useNavigate()

    const [data,setData]=useState();
    const handleadd=()=>{
      navigate("/addBlog")

    }
    const handleclick=(obj)=>{
      console.log(obj)
      setBlogid(obj)
      navigate("/posts")
    }
    const getData=async()=>{
        const response=await axios.get("http://localhost:5000/blogs")
    console.log(response.data.data)
    setData(response.data.data)
  }

  useEffect(() => {
    getData()
  },[])
    
  return (
   <>
    
    <Header/>
    <Row xs={2} md={3} className="g-4">
      {data?.map((obj, idx) => (
        <div className='cards'key={idx}  >
        <Col >
          <Card  >
            <Card.Img variant="top" src={obj.imageurl || home }  style={{height:"30vh" , borderRadius:"30px"}} alt={obj.imageurl} onClick={(e)=>handleclick(obj)}/>
            <Card.Body>
              <Card.Title>{obj.title}</Card.Title>
              
            </Card.Body>
          </Card>
        </Col>
        </div>
      ))}
    </Row>
<img className="add-btn" onClick={handleadd} src={NewBlog} alt="nothinf"/>
    </>
  )
}

export default Home