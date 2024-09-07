import React,{ useState } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";

function SignUpFormContent(props) {
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastname] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmpassword] = useState('');
  const [message, setMessage] = useState('');
  const handleSubmit = async(e) =>{
    e.preventDefault();
    try{
      const response  = await axios.post('http://localhost:3000/api/SignUpFormContent',{firstname,lastname,username,password,confirmpassword});
      if(response.data.success){
        setMessage("User Registered to the account successfully");
      }else {
        setMessage("Registration failed");
      }
    }catch{
      setMessage("An error occured");
    }
  }
  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2>Create an Account</h2>
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input type="text" name="firstName" placeholder="Enter your first name" value={firstname} onChange={(e)=> setFirstName(e.target.value)}/>
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input type="text" name="lastName" placeholder="Enter your last name" value={lastname} onChange={(e)=> setLastname(e.target.value)}/>
        </div>
        <div className="form-group">
          <label htmlFor="username">Preferred Username</label>
          <input type="text" name="username" placeholder="Enter your preferred username" value={username} onChange={(e)=> setUsername(e.target.value)}/>
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" placeholder="Enter your password" value={password} onChange={(e)=> setPassword(e.target.value)}/>
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input type="password" name="confirmPassword" placeholder="Confirm your password" value={confirmpassword} onChange={(e)=> setConfirmpassword(e.target.value)}/>
        </div>
        <button type="submit">Sign Up</button>

        <div className="form-links">
          <p>Already have an account? <Link to="/">Login here</Link></p>
        </div>
      </form>
    </div>
  );
}

export default SignUpFormContent;
