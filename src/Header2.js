import React from 'react';
import './Header2.css';

function Header2() {
  return (
    <div className="header2">
        <div className="leftheader2">

        </div>
        <div className="rightheader2">
            <div className="header_option">
                <select>
                    <option>Services</option>
                </select>
            </div>
            <div className="header_option">
                <select>
                    <option>Reviews</option>
                </select>
            </div>
            <div className="header_option">
                <select>
                    <option>--------</option>
                </select>
            </div>
        </div>
    </div>
  )
}

export default Header2;
