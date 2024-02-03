import React from 'react';
import './Product.css';
import Button from './Button';

function Product(props) {
  return (
    <div className="div_namee">
      <div className="left_bar">
        <div className="title_bar">
          {props.name}
        </div>
        <div className="titlesecond_bar">
        {props.title}
        </div>
        <Button 
        value="Book Now"
        />
      </div>
      <div className="right_bar">
        <img src={props.image} alt=""/>
      </div>
    </div>
  )
}

export default Product;
