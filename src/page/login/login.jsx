import React from 'react';
import './login.css';


const Login = () =>{
  return(
    
    <div className="login-container">
      
      
    <div className="login-box">
      <h2 className="login-title">Sign in to</h2>
      <form>
        <div className="input-group">
          <input type="email" placeholder="Email" required className="input-field" />
        </div>
        <div className="input-group">
          <input type="password" placeholder="Password" required className="input-field" />
        </div>
        <div className="options">
          
          <label>
           <input type="checkbox" /> <span className='box'>Remember me</span>
          </label>
          
          <a href="/" className="forgot-password">Forgot Password?</a>
        </div>
        <button type="submit" className="login-button">Sign in</button>
      </form>
      <div className="divider">
        <span >------------------------------    Or login with    ------------------------------</span>
      </div>
      <div className="social-login">
        <button className="social-button gmail-button">
          <img src="https://img.icons8.com/color/48/null/gmail-new.png" alt="Gmail" />
          Gmail
        </button>
        <button className="social-button facebook-button">
          <img src="https://img.icons8.com/fluency/48/000000/facebook-new.png" alt="Facebook" />
          Facebook
        </button>
      </div>
      <p className="signup-text">
        Don't have an account? <a href="/" className="signup-link">Sign Up now</a>
      </p>
    </div>
  </div>
  
);
};

export default Login