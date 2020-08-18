import React, { Component } from 'react';

import '../../styles/product.scss';

import CategoryContainer from './CategoryContainer';
import { PageTitle } from './CategoryContainer';

export default class Headphone extends Component {
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
              <h2>Headphone</h2>
            </div>
            <div className="product-grid-container">
              <div className="Product-single-container">
                <div className="product-back-container">
                  <PageTitle title="Headphone 1" price="127.00" />
                </div>
              </div>
              <div className="Product-single-container">
                <div className="product-back-container">
                  <PageTitle title="Headphone 2" price="145.00" />
                </div>
              </div>
              <div className="Product-single-container">
                <div className="product-back-container">
                  <PageTitle title="Headphone 3" price="162.00" />
                </div>
              </div>
              <div className="Product-single-container">
                <div className="product-back-container">
                  <PageTitle title="Headphone 4" price="107.00" />
                </div>
              </div>
              <div className="Product-single-container">
                <div className="product-back-container">
                  <PageTitle title="Headphone 5" price="114.00" />
                </div>
              </div>
              <div className="Product-single-container">
                <div className="product-back-container">
                  <PageTitle title="Headphone 6" price="112.00" />
                </div>
              </div>
              <div className="Product-single-container">
                <div className="product-back-container">
                  <PageTitle title="Headphone 7" price="106.00" />
                </div>
              </div>
              <div className="Product-single-container">
                <div className="product-back-container">
                  <PageTitle title="Headphone 8" price="126.00" />
                </div>
              </div>
              <div className="Product-single-container">
                <div className="product-back-container">
                  <PageTitle title="Headphone 9" price="126.00" />
                </div>
              </div>
              <div className="Product-single-container">
                <div className="product-back-container">
                  <PageTitle title="Headphone 10" price="126.00" />
                </div>
              </div>
              <div className="Product-single-container">
                <div className="product-back-container">
                  <PageTitle title="Headphone 11" price="126.00" />
                </div>
              </div>
              <div className="Product-single-container">
                <div className="product-back-container">
                  <PageTitle title="Headphone 12" price="126.00" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}