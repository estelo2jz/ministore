import React, { Component } from 'react';

import '../../styles/product.scss';

import CategoryContainer from './CategoryContainer';
import { PageTitle } from './CategoryContainer';

export default class Furniture extends Component {
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
              <h2>Furnitures</h2>
            </div>
            <div className="product-grid-container">
              <div className="Product-single-container">
                <div className="product-back-container">
                  <PageTitle title="Furniture 1" price="727.00" />
                </div>
              </div>
              <div className="Product-single-container">
                <div className="product-back-container">
                  <PageTitle title="Furniture 2" price="745.00" />
                </div>
              </div>
              <div className="Product-single-container">
                <div className="product-back-container">
                  <PageTitle title="Furniture 3" price="762.00" />
                </div>
              </div>
              <div className="Product-single-container">
                <div className="product-back-container">
                  <PageTitle title="Furniture 4" price="707.00" />
                </div>
              </div>
              <div className="Product-single-container">
                <div className="product-back-container">
                  <PageTitle title="Furniture 5" price="734.00" />
                </div>
              </div>
              <div className="Product-single-container">
                <div className="product-back-container">
                  <PageTitle title="Furniture 6" price="732.00" />
                </div>
              </div>
              <div className="Product-single-container">
                <div className="product-back-container">
                  <PageTitle title="Furniture 7" price="706.00" />
                </div>
              </div>
              <div className="Product-single-container">
                <div className="product-back-container">
                  <PageTitle title="Furniture 8" price="726.00" />
                </div>
              </div>
              <div className="Product-single-container">
                <div className="product-back-container">
                  <PageTitle title="Furniture 9" price="726.00" />
                </div>
              </div>
              <div className="Product-single-container">
                <div className="product-back-container">
                  <PageTitle title="Furniture 10" price="726.00" />
                </div>
              </div>
              <div className="Product-single-container">
                <div className="product-back-container">
                  <PageTitle title="Furniture 11" price="726.00" />
                </div>
              </div>
              <div className="Product-single-container">
                <div className="product-back-container">
                  <PageTitle title="Furniture 12" price="726.00" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}