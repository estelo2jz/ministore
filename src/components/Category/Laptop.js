import React, { Component } from 'react';

import '../../styles/product.scss';

import CategoryContainer from './CategoryContainer';
import { PageTitle } from './CategoryContainer';

export default class Laptop extends Component {
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
              <h2>Laptop</h2>
            </div>
            <div className="product-grid-container">
              <div className="Product-single-container">
                <div className="product-back-container">
                  <PageTitle title="Laptop 1" price="1127.00" />
                </div>
              </div>
              <div className="Product-single-container">
                <div className="product-back-container">
                  <PageTitle title="Laptop 2" price="1145.00" />
                </div>
              </div>
              <div className="Product-single-container">
                <div className="product-back-container">
                  <PageTitle title="Laptop 3" price="1162.00" />
                </div>
              </div>
              <div className="Product-single-container">
                <div className="product-back-container">
                  <PageTitle title="Laptop 4" price="1107.00" />
                </div>
              </div>
              <div className="Product-single-container">
                <div className="product-back-container">
                  <PageTitle title="Laptop 5" price="1114.00" />
                </div>
              </div>
              <div className="Product-single-container">
                <div className="product-back-container">
                  <PageTitle title="Laptop 6" price="1112.00" />
                </div>
              </div>
              <div className="Product-single-container">
                <div className="product-back-container">
                  <PageTitle title="Laptop 7" price="1106.00" />
                </div>
              </div>
              <div className="Product-single-container">
                <div className="product-back-container">
                  <PageTitle title="Laptop 8" price="1206.00" />
                </div>
              </div>
              <div className="Product-single-container">
                <div className="product-back-container">
                  <PageTitle title="Laptop 9" price="1206.00" />
                </div>
              </div>
              <div className="Product-single-container">
                <div className="product-back-container">
                  <PageTitle title="Laptop 10" price="1206.00" />
                </div>
              </div>
              <div className="Product-single-container">
                <div className="product-back-container">
                  <PageTitle title="Laptop 11" price="1206.00" />
                </div>
              </div>
              <div className="Product-single-container">
                <div className="product-back-container">
                  <PageTitle title="Laptop 12" price="1206.00" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}