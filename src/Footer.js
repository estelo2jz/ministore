import React, { Component } from 'react';
import './styles/footer.scss';

export default class Footer extends Component {
  render() {
    return (
      <div className="footer-outer-container">
        <div className="flex-container">
          <div className="left-footer">
            <div className="left-address-container">
              <p>123 Street Address</p>
              <h3>Paris, France</h3>
            </div>
            <div className="left-number-container">
              <h3>+1 55 1234 5678</h3>
            </div>
            <div className="left-link-container">
              <a href="/home">support@company.com</a>
            </div>
          </div>

          <div className="right-footer">
            <div className="right-about-container">
              <h3>About the company</h3>
            </div>
            <div className="right-bio-container">
              <p>
                lorem ipsum dodlor sit amet,
                consectateur adispicing elit. Fusce
                euismod convallis velit, eu auctor alcus
                vehicula sit amet.
              </p>
            </div>
            <div className="right-links-container">
              <a href="https://www.facebook.com/">
                <ion-icon name="logo-facebook"></ion-icon>
              </a>
              <a href="https://www.linkedin.com/feed/">
                <ion-icon name="logo-linkedin"></ion-icon>
              </a>
              <a href="https://twitter.com/home">
                <ion-icon name="logo-twitter"></ion-icon>
              </a>
              <a href="https://github.com/estelo2jz/ministore">
                <ion-icon name="logo-github"></ion-icon>
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
