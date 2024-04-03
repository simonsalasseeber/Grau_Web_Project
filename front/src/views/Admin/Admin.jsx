import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import AdminManage from './AdminManage';

const CREDENTIALS_URL = import.meta.env.VITE_BACK_URL_CREDENTIALS;
const Admin = () => {

  
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const [admin, setAdmin] = useState({
        username: "",
        password: "",
    });

    const handleChange = (event) => {
        const {name, value} = event.target;
        const updatedForm = { ...admin, [name]: value };
        setAdmin(updatedForm);
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        const checkUser = {username: admin.username, password: admin.password}
        if (!CREDENTIALS_URL) {
          console.error('CREDENTIALS_URL is not defined');
          return;
       }
        axios.post(CREDENTIALS_URL, checkUser)
            .then(response => {
                
                if (response.data) {
                    alert("Login Succesful");
                    setAdmin({
                        username: "",
                        password: "",
                    });
                    setIsLoggedIn(true);
                } else {
                    alert("Login Failed");
                    // Maneja el caso de inicio de sesión fallido
                }
                
            })
            .catch(error => {
                console.error("Error during login:", error);
                alert("An error occurred during login.");
            });
}

return (
    <div className="container">
      {!isLoggedIn ? (
        <>
          <h2>Login</h2>
          <form className="col-sm-6 offset-sm-3" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" id="username" name="username" value={admin.username} onChange={handleChange} className="form-control" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" name="password" value={admin.password} onChange={handleChange} className="form-control" />
            </div>
            <button type="submit" className="btn btn-primary">Login</button>
          </form>
        </>
      ) : (
        <AdminManage isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      )}
    </div>
  );
}

export default Admin