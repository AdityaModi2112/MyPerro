import React from 'react';
import './Rating_Product.css';

function RatingProduct(props) {
  return (
    <div className="rating_outside">
      <div className="first_rating">
        <div>
      <span><img src="name.png" alt=""/></span></div>
      <div>
      <span class="fa fa-star checked a"></span>
      <span class="fa fa-star checked a"></span>
      <span class="fa fa-star checked a"></span>
      <span class="fa fa-star checked a"></span>
      <span class="fa fa-star checked2 a"></span>
      </div>
      </div>
      <div className="name_review">
        {props.name}
      </div>
    </div>
  )
}

export default RatingProduct;
