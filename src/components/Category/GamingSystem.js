import React, { Component } from 'react';

import '../../styles/product.scss';

import CategoryContainer from './CategoryContainer';
import { PageTitle } from './CategoryContainer';

export default class GamingSystem extends Component {
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
              <h2>Gaming System</h2>
            </div>
            <div className="product-grid-container">
              <div className="Product-single-container">
                <div className="product-back-container">
                  <PageTitle title="Gaming System 1" price="527.00" />
                </div>
              </div>
              <div className="Product-single-container">
                <div className="product-back-container">
                  <PageTitle title="Gaming System 2" price="545.00" />
                </div>
              </div>
              <div className="Product-single-container">
                <div className="product-back-container">
                  <PageTitle title="Gaming System 3" price="562.00" />
                </div>
              </div>
              <div className="Product-single-container">
                <div className="product-back-container">
                  <PageTitle title="Gaming System 4" price="507.00" />
                </div>
              </div>
              <div className="Product-single-container">
                <div className="product-back-container">
                  <PageTitle title="Gaming System 5" price="534.00" />
                </div>
              </div>
              <div className="Product-single-container">
                <div className="product-back-container">
                  <PageTitle title="Gaming System 6" price="532.00" />
                </div>
              </div>
              <div className="Product-single-container">
                <div className="product-back-container">
                  <PageTitle title="Gaming System 7" price="506.00" />
                </div>
              </div>
              <div className="Product-single-container">
                <div className="product-back-container">
                  <PageTitle title="Gaming System 8" price="526.00" />
                </div>
              </div>
              <div className="Product-single-container">
                <div className="product-back-container">
                  <PageTitle title="Gaming System 9" price="526.00" />
                </div>
              </div>
              <div className="Product-single-container">
                <div className="product-back-container">
                  <PageTitle title="Gaming System 10" price="526.00" />
                </div>
              </div>
              <div className="Product-single-container">
                <div className="product-back-container">
                  <PageTitle title="Gaming System 11" price="526.00" />
                </div>
              </div>
              <div className="Product-single-container">
                <div className="product-back-container">
                  <PageTitle title="Gaming System 12" price="526.00" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}