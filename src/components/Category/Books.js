import React, { Component } from 'react';
import CategoryContainer from './CategoryContainer';

import { PageTitle } from './CategoryContainer';

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
                  <PageTitle title="Book 1" price="27.00" />
                </div>
              </div>
              <div className="product-single-container">
                <div className="product-back-container">
                  <PageTitle title="Book 2" price="21.00" />
                </div>
              </div>
              <div className="product-single-container">
                <div className="product-back-container">
                  <PageTitle title="Book 3" price="26.00" />
                </div>
              </div>
              <div className="product-single-container">
                <div className="product-back-container">
                  <PageTitle title="Book 4" price="25.00" />
                </div>
              </div>
              <div className="product-single-container">
                <div className="product-back-container">
                  <PageTitle title="Book 5" price="29.00" />
                </div>
              </div>
              <div className="product-single-container">
                <div className="product-back-container">
                  <PageTitle title="Book 6" price="22.00" />
                </div>
              </div>
              <div className="product-single-container">
                <div className="product-back-container">
                  <PageTitle title="Book 7" price="23.00" />
                </div>
              </div>
              <div className="product-single-container">
                <div className="product-back-container">
                  <PageTitle title="Book 8" price="24.00" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
