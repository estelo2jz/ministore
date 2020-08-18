import React, { Component } from 'react';
import './styles/footer.scss';

export default class Footer extends Component {
  render() {
    return (
      <div className="footer-outer-container">
        <div className="flex-container">
          <div className="left-footer">
            <div>
              <p>21 Revolution Street</p>
              <h3>Paris, France</h3>
            </div>
            <div>
              <h3>+1 55 1234 5678</h3>
            </div>
            <div>
              <a href=""><h3>support@company.com</h3></a>
            </div>
          </div>

          <div className="right-container">
            <div>
              <h3>About the company</h3>
            </div>
            <div>
              <p>
                lorem ipsum dodlor sit amet,
                consectateur adispicing elit. Fusce
                euismod convallis velit, eu auctor alcus
                vehicula sit amet.
              </p>
            </div>
            <div>
              <a href="">
                <ion-icon name="logo-facebook"></ion-icon>
              </a>
              <a href="">
                <ion-icon name="logo-linkedin"></ion-icon>
              </a>
              <a href="">
                <ion-icon name="logo-twitter"></ion-icon>
              </a>
              <a href="">
                <ion-icon name="logo-github"></ion-icon>
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
