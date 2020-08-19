import React, { Component } from 'react';

import '../../styles/product.scss';

import CategoryContainer from './CategoryContainer';
import { PageTitle } from './CategoryContainer';

import I1 from '../../images/iphone/i1.jpg';
import I2 from '../../images/iphone/i2.jpg';
import I3 from '../../images/iphone/i3.jpg';
import I4 from '../../images/iphone/i4.jpg';
import I5 from '../../images/iphone/i5.jpg';
import I6 from '../../images/iphone/i6.jpg';
import I7 from '../../images/iphone/i7.jpg';
import I8 from '../../images/iphone/i8.jpg';
import I9 from '../../images/iphone/i9.jpg';
import I10 from '../../images/iphone/i10.jpg';
import I11 from '../../images/iphone/i11.jpg';
import I12 from '../../images/iphone/i12.jpg';

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
                  <PageTitle productImage={I1} title="Apple iPhone 7, 32GB, Black - Fully Unlocked (Renewed)" price="1227.00" />
                </div>
              </div>
              <div className="Product-single-container">
                <div className="product-back-container">
                  <PageTitle productImage={I2} title="Apple iPhone X, 64GB, Space Gray - Fully Unlocked (Renewed)" price="1245.00" />
                </div>
              </div>
              <div className="Product-single-container">
                <div className="product-back-container">
                  <PageTitle productImage={I3} title="Apple iPhone 11, 128GB, Black - Fully Unlocked (Renewed)" price="1262.00" />
                </div>
              </div>
              <div className="Product-single-container">
                <div className="product-back-container">
                  <PageTitle productImage={I4} title="Apple iPhone 11 Pro, 64GB, Midnight Green - Fully Unlocked (Renewed)" price="1207.00" />
                </div>
              </div>
              <div className="Product-single-container">
                <div className="product-back-container">
                  <PageTitle productImage={I5} title="Apple iPhone Xs Max, 256GB, Silver - Fully Unlocked (Renewed)" price="1214.00" />
                </div>
              </div>
              <div className="Product-single-container">
                <div className="product-back-container">
                  <PageTitle productImage={I6} title="Apple iPhone XS, 256GB , Space Gray - Fully Unlocked (Renewed)" price="1222.00" />
                </div>
              </div>
              <div className="Product-single-container">
                <div className="product-back-container">
                  <PageTitle productImage={I7} title="Apple iPhone 7 Matte Black 32GB Verizon Unlocked (Renewed)" price="1206.00" />
                </div>
              </div>
              <div className="Product-single-container">
                <div className="product-back-container">
                  <PageTitle productImage={I8} title="Apple iPhone SE, 64GB, White - Fully Unlocked (Renewed)" price="1226.00" />
                </div>
              </div>
              <div className="Product-single-container">
                <div className="product-back-container">
                  <PageTitle productImage={I9} title="Apple iPhone 7, 128GB, Red - for Sprint/Verizon (Renewed)" price="1226.00" />
                </div>
              </div>
              <div className="Product-single-container">
                <div className="product-back-container">
                  <PageTitle productImage={I10} title="Apple iPhone X, 64GB, Space Gray - Fully Unlocked (Renewed)" price="1226.00" />
                </div>
              </div>
              <div className="Product-single-container">
                <div className="product-back-container">
                  <PageTitle productImage={I11} title="Google Pixel XL - 32GB Factory Unlocked - Very Silver (Renewed)" price="1226.00" />
                </div>
              </div>
              <div className="Product-single-container">
                <div className="product-back-container">
                  <PageTitle productImage={I12} title="Apple iPhone 8 256GB Unlocked GSM Phone - Silver (Renewed)" price="1226.00" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}