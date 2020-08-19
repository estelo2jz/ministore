import React, { Component } from 'react';
import CategoryContainer from './CategoryContainer';

import { PageTitle } from './CategoryContainer';

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

export default class Books extends Component {
  render() {
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
                  <PageTitle productImage={Book1} title="Web Design Playground: HTML & CSS the Interactive Way" price="27.00" />
                </div>
              </div>
              <div className="product-single-container">
                <div className="product-back-container">
                  <PageTitle productImage={Book2} title="Learning Node.js Development: Learn the fundamentals of Node.js, and deploy and test Node.js applications on the web" price="25.99" />
                </div>
              </div>
              <div className="product-single-container">
                <div className="product-back-container">
                  <PageTitle productImage={Book3} title="Web Design with HTML, CSS, JavaScript and jQuery Set" price="26.99" />
                </div>
              </div>
              <div className="product-single-container">
                <div className="product-back-container">
                  <PageTitle productImage={Book4} title="Fundamentals of Web Development (2nd Edition)" price="25.99" />
                </div>
              </div>
              <div className="product-single-container">
                <div className="product-back-container">
                  <PageTitle productImage={Book5} title="Web Coding & Development All-in-One For Dummies (For Dummies (Computer/Tech))" price="29.99" />
                </div>
              </div>
              <div className="product-single-container">
                <div className="product-back-container">
                  <PageTitle productImage={Book6} title="Become an Awesome Software Architect: Book 1: Foundation 2019" price="22.99" />
                </div>
              </div>
              <div className="product-single-container">
                <div className="product-back-container">
                  <PageTitle productImage={Book7} title="The Full Stack Developer: Your Essential Guide to the Everyday Skills Expected of a Modern Full Stack Web Developer" price="23.99" />
                </div>
              </div>
              <div className="product-single-container">
                <div className="product-back-container">
                  <PageTitle productImage={Book8} title="PHP & MySQL: Server-side Web Development" price="24.99" />
                </div>
              </div>
              <div className="product-single-container">
                <div className="product-back-container">
                  <PageTitle productImage={Book9} title="HTML, CSS, and JavaScript All in One, Sams Teach Yourself (3rd Edition)" price="29.99" />
                </div>
              </div>
              <div className="product-single-container">
                <div className="product-back-container">
                  <PageTitle productImage={Book10} title="JavaScript: The Definitive Guide: Master the World's Most-Used Programming Language" price="27.99" />
                </div>
              </div>
              <div className="product-single-container">
                <div className="product-back-container">
                  <PageTitle productImage={Book11} title="JavaScript Explained: Step-by-Step Guide to the Most Common and Reliable JS Techniques" price="26.99" />
                </div>
              </div>
              <div className="product-single-container">
                <div className="product-back-container">
                  <PageTitle productImage={Book12} title="Ruby Programming for Beginners: An Introduction to Learning Ruby Programming with Tutorials and Hands-On Examples" price="21.99" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
