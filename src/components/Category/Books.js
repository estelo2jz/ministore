import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addBasket } from '../../actions/addAction';
import CategoryContainer from './CategoryContainer';

import Book1 from '../../images/book/book1.jpg';
import Book2 from '../../images/book/bokk2.jpg';
import Book3 from '../../images/book/book3.jpg';
import Book4 from '../../images/book/book4.jpg';
import Book5 from '../../images/book/book5.jpg';
import Book6 from '../../images/book/book6.jpg';
import Book7 from '../../images/book/book7.jpg';
import Book8 from '../../images/book/book8.jpg';
import Book9 from '../../images/book/book9.jpg';
import Book10 from '../../images/book/book10.jpg';
import Book11 from '../../images/book/book11.jpg';
import Book12 from '../../images/book/book12.jpg';

const Books = (props) => {
    return (
      <div className="product-outer-container">
        <div className="product-inner-container">
          <div className="product-category-header">
            <div>
              <CategoryContainer />
            </div>
          </div>
          <div className="product-container">
            <div className="product-header">
              <h2>Books</h2>
            </div>
            <div className="product-grid-container">
              <div className="product-single-container">
                <div className="product-back-container">
                  <div class="card">
                    <div class="container">
                      <div  className="container-img">
                        <div className="img-container">
                          <img src={Book1} alt="book1" />
                        </div>
                      </div>
                      <h4 className="container-bio">Web Design Playground: HTML & CSS the Interactive Way</h4> 
                    </div>
                    <div className="price-container">
                      <div>
                        <p>$ 27.00</p> 
                      </div>
                      <div>
                        <p onClick={() => props.addBasket('WebDesignPlayground')}>
                          <button className="myButton">Add to cart</button>         
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="product-single-container">
                <div className="product-back-container">
                  <div class="card">
                    <div class="container">
                      <div  className="container-img">
                        <div className="img-container">
                          <img src={Book2} alt="book2" />
                        </div>
                      </div>
                      <h4 className="container-bio">Learning Node.js Development: Learn the fundamentals of Node.js, and deploy and test Node.js applications on the web</h4> 
                    </div>
                    <div className="price-container">
                      <div>
                        <p>$ 25.99</p> 
                      </div>
                      <div>
                        <p onClick={() => props.addBasket('LearningNodeDevelopment')}>
                          <button className="myButton">Add to Cart</button>         
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="product-single-container">
                <div className="product-back-container">
                  <div class="card">
                    <div class="container">
                      <div  className="container-img">
                        <div className="img-container">
                          <img src={Book3} alt="book2" />
                        </div>
                      </div>
                      <h4 className="container-bio">Web Design with HTML, CSS, JavaScript and jQuery Set</h4> 
                    </div>
                    <div className="price-container">
                      <div>
                        <p>$ 26.99</p> 
                      </div>
                      <div>
                        <p onClick={() => props.addBasket('WebDesignHTML')}>
                          <button className="myButton">Add to Cart</button>         
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="product-single-container">
                <div className="product-back-container">
                  <div class="card">
                    <div class="container">
                      <div  className="container-img">
                        <div className="img-container">
                          <img src={Book4} alt="book2" />
                        </div>
                      </div>
                      <h4 className="container-bio">Fundamentals of Web Development (2nd Edition)</h4> 
                    </div>
                    <div className="price-container">
                      <div>
                        <p>$ 25.99</p> 
                      </div>
                      <div>
                        <p onClick={() => props.addBasket('FundamentalsWeb')}>
                          <button className="myButton">Add to Cart</button>         
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="product-single-container">
                <div className="product-back-container">
                  <div class="card">
                    <div class="container">
                      <div  className="container-img">
                        <div className="img-container">
                          <img src={Book5} alt="book2" />
                        </div>
                      </div>
                      <h4 className="container-bio">Web Coding & Development All-in-One For Dummies (For Dummies (Computer/Tech))</h4> 
                    </div>
                    <div className="price-container">
                      <div>
                        <p>$ 29.99</p> 
                      </div>
                      <div>
                        <p onClick={() => props.addBasket('WebCodingDevelopment')}>
                          <button className="myButton">Add to Cart</button>         
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="product-single-container">
                <div className="product-back-container">
                  <div class="card">
                    <div class="container">
                      <div  className="container-img">
                        <div className="img-container">
                          <img src={Book6} alt="book2" />
                        </div>
                      </div>
                      <h4 className="container-bio">Become an Awesome Software Architect: Book 1: Foundation 2019</h4> 
                    </div>
                    <div className="price-container">
                      <div>
                        <p>$ 22.99</p> 
                      </div>
                      <div>
                        <p onClick={() => props.addBasket('BecomeAwesome')}>
                          <button className="myButton">Add to Cart</button>         
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="product-single-container">
                <div className="product-back-container">
                  <div class="card">
                    <div class="container">
                      <div  className="container-img">
                        <div className="img-container">
                          <img src={Book7} alt="book2" />
                        </div>
                      </div>
                      <h4 className="container-bio">The Full Stack Developer: Your Essential Guide to the Everyday Skills Expected of a Modern Full Stack Web Developer</h4> 
                    </div>
                    <div className="price-container">
                      <div>
                        <p>$ 23.99</p> 
                      </div>
                      <div>
                        <p onClick={() => props.addBasket('TheFullStackDeveloper')}>
                          <button className="myButton">Add to Cart</button>         
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="product-single-container">
                <div className="product-back-container">
                  <div class="card">
                    <div class="container">
                      <div  className="container-img">
                        <div className="img-container">
                          <img src={Book8} alt="book2" />
                        </div>
                      </div>
                      <h4 className="container-bio">PHP & MySQL: Server-side Web Development</h4> 
                    </div>
                    <div className="price-container">
                      <div>
                        <p>$ 24.99</p> 
                      </div>
                      <div>
                        <p onClick={() => props.addBasket('PHPMySQL')}>
                          <button className="myButton">Add to Cart</button>         
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="product-single-container">
                <div className="product-back-container">
                  <div class="card">
                    <div class="container">
                      <div  className="container-img">
                        <div className="img-container">
                          <img src={Book9} alt="book2" />
                        </div>
                      </div>
                      <h4 className="container-bio">HTML, CSS, and JavaScript All in One, Sams Teach Yourself (3rd Edition)</h4> 
                    </div>
                    <div className="price-container">
                      <div>
                        <p>$ 29.99</p> 
                      </div>
                      <div>
                        <p onClick={() => props.addBasket('HTMLAllOne')}>
                          <button className="myButton">Add to Cart</button>         
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="product-single-container">
                <div className="product-back-container">
                  <div class="card">
                    <div class="container">
                      <div  className="container-img">
                        <div className="img-container">
                          <img src={Book10} alt="book2" />
                        </div>
                      </div>
                      <h4 className="container-bio">JavaScript: The Definitive Guide: Master the World's Most-Used Programming Language</h4> 
                    </div>
                    <div className="price-container">
                      <div>
                        <p>$ 27.99</p> 
                      </div>
                      <div>
                        <p onClick={() => props.addBasket('JavaScriptDefinitiveGuide')}>
                          <button className="myButton">Add to Cart</button>         
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="product-single-container">
                <div className="product-back-container">
                  <div class="card">
                    <div class="container">
                      <div  className="container-img">
                        <div className="img-container">
                          <img src={Book11} alt="book2" />
                        </div>
                      </div>
                      <h4 className="container-bio">JavaScript Explained: Step-by-Step Guide to the Most Common and Reliable JS Techniques</h4> 
                    </div>
                    <div className="price-container">
                      <div>
                        <p>$ 26.99</p> 
                      </div>
                      <div>
                        <p onClick={() => props.addBasket('JavaScriptExplained')}>
                          <button className="myButton">Add to Cart</button>         
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="product-single-container">
                <div className="product-back-container">
                  <div class="card">
                    <div class="container">
                      <div  className="container-img">
                        <div className="img-container">
                          <img src={Book12} alt="book2" />
                        </div>
                      </div>
                      <h4 className="container-bio">Ruby Programming for Beginners: An Introduction to Learning Ruby Programming with Tutorials and Hands-On Examples</h4> 
                    </div>
                    <div className="price-container">
                      <div>
                        <p>$ 21.99</p> 
                      </div>
                      <div>
                        <p onClick={() => props.addBasket('RubProgramming')}>
                          <button className="myButton">Add to Cart</button>         
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

export default connect(null, { addBasket })(Books);