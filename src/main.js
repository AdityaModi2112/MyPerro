import React from 'react';
import './Main.css';
import Product from './Product';
import Dog from './dog_details';
import Button from './Button';
import RatingProduct from './RatingProduct';

function Main() {
  function leftScroll() {
    const left = document.querySelector(".scrolling_div");
    left.scrollBy(-600, 0);
  }
  function rightScroll() {
    const right = document.querySelector(".scrolling_div");
    right.scrollBy(+600, 0);
  }
  function leftScrolldiv() {
    const left1 = document.querySelector(".reviews_scrolling_div");
    left1.scrollBy(-554, 0);
  }
  function rightScrolldiv() {
    const right2 = document.querySelector(".reviews_scrolling_div");
    right2.scrollBy(+554, 0);
  }
  return (
    <div className='main'>
        <div className="name_div">
            <h1>MYPERRO</h1>
        </div>
      <div className="cover">
      <button className="left" onClick={leftScroll}>&lt;</button>
      <div className="scrolling_div">
           {Dog.map((noteItem)=>(
            <Product
            name={noteItem.name}
            title={noteItem.title}
            image={noteItem.image}
            />
           ))}
        </div>
     <button className="right" onClick={rightScroll}>&gt;</button>
      </div>
      <div className="image_container">
        <img src="adimage.png" alt=""/>
      </div>
      <div className="aboutUs" id="About">
        <div className="aboutUs_left">
          <div className="first_div">
            ABOUT
          </div>
          <div className="second_div">
            US
          </div>
          <Button
          value="KNOW HERE"
          />
        </div>
        <div className="aboutUs_right">
        </div>
      </div>
      <div className="reviews_section">
        <div className="reviews_name">
          REVIEWS
        </div>
        <div className="review_image">
          <img src="reviews_image.png" alt=""/>
        </div>
        <div className="reviews_div_section">
        <div className="reviews_left">
          <div className="reviews_letters">
            <h2>OVERALL RATINGS</h2></div>
          <div className="rating">
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked2"></span>
          </div>
          <div className="reviews_letters">
            <h2>DOG WALKING</h2></div>
          <div className="rating">
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked2"></span>
          </div>
          <div className="reviews_letters">
            <h2>DOG BOARDING</h2></div>
          <div className="rating">
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked2"></span>
          </div>
          <div className="rate_us">
            <button>RATE US</button>
          </div>
        </div>
        <div className="reviews_right">
        <div className="reviews_cover">
        <button className="reviewsLeft" onClick={leftScrolldiv}>&lt;</button>
        <div className="reviews_scrolling_div">
            <RatingProduct
            name="aditya"
            />
            <RatingProduct
            name="shakshi"
            />
            <RatingProduct
            name="kushal"
            />
            <RatingProduct
            name="riya"
            />
            <RatingProduct
            name="sahil"
            />
            <RatingProduct
            name="girendra"
            />
        </div>
        <button className="reviewsRight" onClick={rightScrolldiv}>&gt;</button>
        </div>
        <div className="reviews_ellipse">
          <img src="ellipse.png" alt=""/>
        </div>
        </div>
        </div>
      </div>
      <div className="contact_us">
        <div className="contact_name">
          <h1>CONTACT US</h1>
        </div>
        <div id="container3">
                    <div class="contact_d">
                        <div class="a"><img class="i" src="logo 1.png" alt=""/></div>
                        <div class="b">
                            <p><span class="zero">Aditya Modi</span></p>
                            <p>AI ML engineer</p>
                            <p>adityamodi2112@gmail.com</p>
                            <p>+(91) 9999999999</p>
                            <p>@adityamodi</p></div>
                        <div class="c">
                            <a href=""><img src="github 1.png" alt=""/></a>
                            <a href=""><img src="linkedin 1.png" alt=""/></a>
                            <a href=""><img src="instagram 1.png" alt=""/></a>
                        </div>
                    </div>
    
                    <div class="line"></div>
                    <div class="contact_d">
                        <div class="a"><img class="i" src="logo 1.png" alt=""/></div>
                        <div class="b">
                            <p><span class="zero">Aditya Modi</span></p>
                            <p>Fronted Developer</p>
                            <p>adityamodi2112@gmail.com</p>
                            <p>+(91) 9999999999</p>
                            <p>@adityamodi</p></div>
                        <div class="c">
                            <a href=""><img src="github 1.png" alt=""/></a>
                            <a href=""><img src="linkedin 1.png" alt=""/></a>
                            <a href=""><img src="instagram 1.png" alt=""/></a>
                        </div>
                    </div>
    
                    <div class="line"></div>
                    <div class="contact_d">
                        <div class="a"><img class="i" src="logo 1.png" alt=""/></div>
                        <div class="b">
                            <p><span class="zero">Aditya Modi</span></p>
                            <p>Backend Developer</p>
                            <p>adityamodi2112@gmail.com</p>
                            <p>+(91) 9999999999</p>
                            <p>@adityamodi</p></div>
                        <div class="c">
                            <a href=""><img src="github 1.png" alt=""/></a>
                            <a href=""><img src="linkedin 1.png" alt=""/></a>
                            <a href=""><img src="instagram 1.png" alt=""/></a>
                        </div>
                    </div>
                </div>
                <div id="footer">
                    <p class="f">© 2024 frontedwithaditya</p>
                </div>
      </div>
    </div>
  )
}

export default Main;
