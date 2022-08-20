import './App.css';
import { BrowserRouter, Route,Routes} from 'react-router-dom';
import AddForm from "./component/AddForm"
import Home from './component/Home';
import Blogpost from './component/Blogpost';
import { useState } from 'react';


function App() {
  const [blogid,setBlogid]=useState()
  return (
    <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home setBlogid={setBlogid}/>}></Route>
            <Route path="/posts" element={<Blogpost blogid={blogid}/>}></Route>
            <Route path="/addBlog" element={<AddForm />}></Route>
          </Routes>
        </BrowserRouter>
  );
}

export default App;
