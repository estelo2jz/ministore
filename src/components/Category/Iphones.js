import React, { Component } from 'react';

import '../../styles/product.scss';

import CategoryContainer from './CategoryContainer';
import { PageTitle } from './CategoryContainer';

export default class Iphones extends Component {
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
              <h2>iPhones</h2>
            </div>
            <div className="product-grid-container">
              <div className="Product-single-container">
                <div className="product-back-container">
                  <PageTitle title="iPhone 1" price="1227.00" />
                </div>
              </div>
              <div className="Product-single-container">
                <div className="product-back-container">
                  <PageTitle title="iPhone 2" price="1245.00" />
                </div>
              </div>
              <div className="Product-single-container">
                <div className="product-back-container">
                  <PageTitle title="iPhone 3" price="1262.00" />
                </div>
              </div>
              <div className="Product-single-container">
                <div className="product-back-container">
                  <PageTitle title="iPhone 4" price="1207.00" />
                </div>
              </div>
              <div className="Product-single-container">
                <div className="product-back-container">
                  <PageTitle title="iPhone 5" price="1214.00" />
                </div>
              </div>
              <div className="Product-single-container">
                <div className="product-back-container">
                  <PageTitle title="iPhone 6" price="1222.00" />
                </div>
              </div>
              <div className="Product-single-container">
                <div className="product-back-container">
                  <PageTitle title="iPhone 7" price="1206.00" />
                </div>
              </div>
              <div className="Product-single-container">
                <div className="product-back-container">
                  <PageTitle title="iPhone 8" price="1226.00" />
                </div>
              </div>
              <div className="Product-single-container">
                <div className="product-back-container">
                  <PageTitle title="iPhone 9" price="1226.00" />
                </div>
              </div>
              <div className="Product-single-container">
                <div className="product-back-container">
                  <PageTitle title="iPhone 10" price="1226.00" />
                </div>
              </div>
              <div className="Product-single-container">
                <div className="product-back-container">
                  <PageTitle title="iPhone 11" price="1226.00" />
                </div>
              </div>
              <div className="Product-single-container">
                <div className="product-back-container">
                  <PageTitle title="iPhone 12" price="1226.00" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}