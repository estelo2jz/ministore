import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getNumbers } from '../actions/getAction';
import '../styles/nav.scss';
import { NavLink } from 'react-router-dom';

function Nav(props) {
  console.log(props)

  useEffect(() => {
    getNumbers();
  }, []);
    return (
      <div className="nav-container" >
        <div className="nav-nav-title">
          <div>
            <h2>ONLINE SHOPPING</h2>
          </div>
        </div>
        <div className="nav-nav-container">
          <div>
            <NavLink to="/home"><p>Home</p></NavLink>
          </div>
          <div>
            <NavLink to="/"><p>Store</p></NavLink>
          </div>   
          <div>
            <NavLink to="/cart">
              <p className="nav-cart">
                Cart <span>{props.basketProps.basketNumbers}</span>
              </p>
            </NavLink>
          </div>   
        </div>
      </div>
    )
  }

  const mapStateToProps = state => ({
    basketProps: state.basketState
  })
  
  export default connect(mapStateToProps, { getNumbers })(Nav);
