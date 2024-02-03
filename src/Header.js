import React from 'react';
import './Header.css';

function Header() {
  return (
    <div className="headere">
      <div className="leftheader">
        <div className="Logo_header">
            <a href="www.google.com">Logo</a>
        </div>
        </div>
      <div className="rightheader">
        <div className="options">
            <button>Login</button>
        </div>
        <div className="options">
        <button>About Us</button>
        </div>
        <div className="options">
        <button>Contact Us</button>
        </div>
      </div>
    </div>
  )
}

export default Header;
