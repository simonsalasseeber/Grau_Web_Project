import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { toast } from 'react-toastify';
import {useNavigate} from 'react-router-dom';

const AdminManage = ({ setIsLoggedIn }) => {
const POST_URL = "http://localhost:3000/admin/upload";
const GET_URL = "http://localhost:3000/"
const DELETE_URL = "http://localhost:3000/admin"

const [title, setTitle] = useState('');
const [producer, setProducer] = useState('');
const [video, setVideo] = useState('');
const [image, setImage] = useState([]);
const [isMain, setisMain] = useState(false);
const [titles, setTitles] = useState([]);
const [selectedTitle, setSelectedTitle] = useState('');
const navigate = useNavigate();

useEffect(()=>{
    axios.get(GET_URL)
    .then(response => {
        setTitles(response.data.map(project => project.title));
    })
    .catch(error =>{
        console.log(error)
    })
}, [])

const handleTitleChange = (event) => {
    setSelectedTitle(event.target.value);
};

const handleisMainChange = (e) => {
    const { checked } = e.target;
    setisMain(checked);
};

const handleLogout = () => {
    setIsLoggedIn(false);
    navigate("/");
  };

//handle and convert it in base 64
const handleImage = (e) =>{
    const file = e.target.files[0];
    setFileToBase(file);
    console.log(file);
}

const setFileToBase = (file) =>{
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () =>{
        setImage(reader.result);
    }

}

//submit the form
const submitForm = async (e) =>{
    e.preventDefault();
    try {
        console.log(isMain);
        const {data} = await axios.post(POST_URL, {title, producer, video, image, isMain})
        if  (data.success === true){
            setTitle('');
            setProducer('');
            setVideo('');
            setImage('');
            setisMain(false);
            toast.success('project created successfully')
        }
        console.log(data);
    } catch (error) {
        console.log(error)
    }

}

const submitForm2 = async (event) => {
    event.preventDefault();
        try {
            const response = await axios.delete(`${DELETE_URL}/${selectedTitle}`);
            if (response.data.success) {
                // Handle success
                toast.success("Project deleted successfully");
            } else {
                // Handle failure
                toast.success("Failed to delete project");
            }
        } catch (error) {
            console.log("Error:", error);
        }
}

return (
<>

 <div className="container custom_class">
    <div className="d-flex justify-content-between align-items-center">
        <h2 className="signup_title ">manage your projects</h2>
        <button className="btn btn-secondary" onClick={handleLogout}>Logout</button>
    </div>
        <form className=" col-sm-6 offset-3 pt-5 signup_form " enctype="multipart/form-data" onSubmit={submitForm}>
         <div className="form-outline mb-4">
            <input onChange={(e)=>setTitle(e.target.value)} type="text" id="form4Example1" className="form-control"  value={title}/>
            <label className="form-label" htmlFor="form4Example1">Title</label>
        </div>

        
        <div className="form-outline mb-4">
            <textarea  onChange={(e)=>setProducer(e.target.value)}   type="text" id="form4Example2" className="form-control"  value={producer}/>
            <label className="form-label" htmlFor="form4Example2">Producer </label>
        </div>

        <div className="form-outline mb-4">
            <input  onChange={(e)=>setVideo(e.target.value)}  type="text" id="form4Example3" className="form-control"   value={video}/>
            <label className="form-label" htmlFor="form4Example2">Video </label>
        </div>


        <div className="form-outline mb-4">
            <input onChange={handleImage}  type="file" id="formupload" name="image" className="form-control"  />
            <label className="form-label" htmlFor="form4Example2">Image</label>
        </div>
        <img className="img-fluid" src={image} alt="" />
        <button  type="submit" className="btn btn-primary btn-block mb-4">Create</button>
        
        <div className="form-check form-switch">
            <input
                className="form-check-input"
                type="checkbox"
                id="isMainSwitch"
                checked={isMain}
                onChange={handleisMainChange}
            />
            <label className="form-check-label" htmlFor="isMainSwitch">Main Project</label>
        </div>        
     </form>
     <div>
            <h2>Delete Projects</h2>
            <form onSubmit={submitForm2}>
                <label htmlFor="title">Select a title to delete:</label>
                <select id="title" value={selectedTitle} onChange={handleTitleChange}>
                    <option value="">Select a title</option>
                    {titles.map((title, index) => (
                        <option key={index} value={title}>{title}</option>
                    ))}
                </select>
                <button type="submit">Delete</button>
            </form>
        </div>
</div> 

</>
)
}

export default AdminManage;