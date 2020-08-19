import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../../styles/category.scss';

export default class CategoryContainer extends Component {
  render() {
    return (
      <div className="category-outer-container">
        <div className="category-grid-container">
          <div className="category-title">
            <div>
              <h2>Mini Store</h2>
            </div>
          </div>
          <div className="category-container">
            <NavLink activeClassName="main-nav-active" className="category-links" to="/books">
              <p activeClassName="main-nav-active">Books</p>
            </NavLink>
            <NavLink activeClassName="main-nav-active" className="category-links" to="/headphones">
              <p>Headphones</p>
            </NavLink>
            <NavLink activeClassName="main-nav-active" className="category-links" to="/pc">
              <p>PC</p>
            </NavLink>
            <NavLink activeClassName="main-nav-active" className="category-links" to="/laptop">
              <p>Laptop</p>
            </NavLink>
            <NavLink activeClassName="main-nav-active" className="category-links" to="/iphones">
              <p>Iphones</p>
            </NavLink>
            <NavLink activeClassName="main-nav-active" className="category-links" to="/samsung">
              <p>Samsung</p>
            </NavLink>
            <NavLink activeClassName="main-nav-active" className="category-links" to="/tablets">
              <p>Tablets</p>
            </NavLink>
            <NavLink activeClassName="main-nav-active" className="category-links" to="/camera">
              <p>Camera</p>
            </NavLink>
            <NavLink activeClassName="main-nav-active" className="category-links" to="/furniture">
              <p>Furniture</p>
            </NavLink>
            <NavLink activeClassName="main-nav-active" className="category-links" to="/gamingsystem">
              <p>Gaming System</p>
            </NavLink>
            <NavLink activeClassName="main-nav-active" className="category-links" to="/toys">
              <p>Toys</p>
            </NavLink>
            <NavLink activeClassName="main-nav-active" className="category-links" to="/tools">
              <p>Tools</p>
            </NavLink>
          </div>
        </div>
      </div>
    )
  }
}


export const PageTitle = (props) => {
  return (
    <div class="card">
      <div class="container">
        <div  className="container-img">
          <div className="img-container">
            <img src={props.productImage} />
          </div>
        </div>
        <h4 className="container-bio">{props.title}</h4> 
      </div>
      <div className="price-container">
        <div>
          <p>$ {props.price}</p> 
        </div>
        <div>
          <button  className="myButton">Add to cart</button>         
        </div>
      </div>
    </div>
  )
}