import React, { useState } from 'react'
import {useNavigate} from "react-router-dom";
import home from "../images/home.png"
import publish from "../images/publish.png"
import axios from "axios"
import Form from 'react-bootstrap/Form';
import './addform.css'
import Header from './Header';



const intialState = {
  title: "",
  description: "",
  imageurl: ""
}

const AddForm = () => {
  const navigate=useNavigate()

  const [formValue, setFormvalue] = useState(intialState);
  const { title, description, imageurl } = formValue;

  const handlesubmit =async (e) => {
    e.preventDefault();
    if (description.length===0 || title.length===0){
      alert("you have to add title and description")
    }else{
      console.log(formValue)
      try {

        const response= await axios.post("http://localhost:5000/blog/addblog",formValue);
        console.log(response)
        if (response.data.status==="success"){
          navigate("/")
        }else{
          alert("something is wrong check backend")
        }
        
      } catch (error) {
        alert(error)
      }
    }

  }
  const onhomebtn=()=>{
    navigate("/")
  }
  const onInputChange=(e)=>{
    let  {name,value}=e.target
   
    setFormvalue({...formValue,[name]:value})

  }
 
  const onUploadImage=async(file)=>{
        // console.log("file",file)
        const formData= new FormData();
        formData.append("file",file);
        formData.append("upload_preset","osjnqvlx");
        const data=await axios.post("http://api.cloudinary.com/v1_1/dviqmhqyc/image/upload",formData)
        console.log(imageurl)
        console.log(data.data.url);
        setFormvalue({...formValue,"imageurl": data.data.url})

  }
  
  return (

    <>
   <Header/>
      <div className='sub-container'>
    <div className='btn'>
        <img className=" home btns"  src={home} onClick={onhomebtn} alt ="home" />
        <img  className="publish btns"  src={publish} onClick={handlesubmit} alt="publish" />
    </div>
    <div className="form my-2">
      <form onSubmit={handlesubmit} className="submitPost">
        <div className="mb-3">
       
          <input
            onChange={onInputChange}
            type="text"
            className="form-control"
            id="title"
            name="title"
            placeholder="Enter the Title / Name"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="image" className="form-label">
            Image (optional)
          </label>
          
          <input
            onChange={(e)=>onUploadImage(e.target.files[0])}
            type="file"
            className="form-control"
            id="image"
            name="image"
            placeholder="Enter the image link!, not a file a link!!"
          />
        </div>
        <div className="mb-3">
         
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Control as="textarea" onChange={onInputChange}
            type="text"
            className="form-control"
            name="description" rows={6}  placeholder="Description"/>
      </Form.Group>
         
        </div>
       
      </form>
     
    </div>
    </div>
 </>
    
    
    
    
    

  )
}

export default AddForm;




