import React, { Component } from 'react';

import '../../styles/product.scss';

import CategoryContainer from './CategoryContainer';
import { PageTitle } from './CategoryContainer';

import T1 from '../../images/tablet/t1.jpg';
import T2 from '../../images/tablet/t2.jpg';
import T3 from '../../images/tablet/t3.jpg';
import T4 from '../../images/tablet/t4.jpg';
import T5 from '../../images/tablet/t5.jpg';
import T6 from '../../images/tablet/t6.jpg';
import T7 from '../../images/tablet/t7.jpg';
import T8 from '../../images/tablet/t8.jpg';
import T9 from '../../images/tablet/t9.jpg';
import T10 from '../../images/tablet/t10.jpg';
import T11 from '../../images/tablet/t11.jpg';
import T12 from '../../images/tablet/t12.jpg';

export default class Tablets extends Component {
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
              <h2>Tablets</h2>
            </div>
            <div className="product-grid-container">
              <div className="Product-single-container">
                <div className="product-back-container">
                  <PageTitle productImage={T1} title="New Apple iPad Pro (12.9-inch, Wi-Fi + Cellular, 128GB) - Silver (4th Generation)" price="327.00" />
                </div>
              </div>
              <div className="Product-single-container">
                <div className="product-back-container">
                  <PageTitle productImage={T2} title="Apple iPad (10.2-inch, Wi-Fi, 32GB) - Space Gray (Latest Model)" price="345.00" />
                </div>
              </div>
              <div className="Product-single-container">
                <div className="product-back-container">
                  <PageTitle productImage={T3} title="New Apple iPad (10.2-Inch, Wi-Fi, 32GB) - Silver (Latest Model) with AppleCare+ Bundle" price="362.00" />
                </div>
              </div>
              <div className="Product-single-container">
                <div className="product-back-container">
                  <PageTitle productImage={T4} title="New Apple iPad (10.2-Inch, Wi-Fi, 32GB) - Space Gray (Latest Model) with AppleCare+ Bundle" price="307.00" />
                </div>
              </div>
              <div className="Product-single-container">
                <div className="product-back-container">
                  <PageTitle productImage={T5} title="New Apple iPad (10.2-Inch, Wi-Fi, 32GB) - Gold (Latest Model) with AppleCare+ Bundle" price="334.00" />
                </div>
              </div>
              <div className="Product-single-container">
                <div className="product-back-container">
                  <PageTitle productImage={T6} title="New Apple iPad (10.2-Inch, Wi-Fi, 128GB) - Silver (Latest Model) with AppleCare+ Bundle" price="332.00" />
                </div>
              </div>
              <div className="Product-single-container">
                <div className="product-back-container">
                  <PageTitle productImage={T7} title="Apple iPad Air (10.5-inch, Wi-Fi, 64GB) - Space Gray" price="306.00" />
                </div>
              </div>
              <div className="Product-single-container">
                <div className="product-back-container">
                  <PageTitle productImage={T8} title="Apple iPad Mini (Wi-Fi, 64GB) - Space Gray (Latest Model)" price="326.00" />
                </div>
              </div>
              <div className="Product-single-container">
                <div className="product-back-container">
                  <PageTitle productImage={T9} title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Space Gray (4th Generation)" price="326.00" />
                </div>
              </div>
              <div className="Product-single-container">
                <div className="product-back-container">
                  <PageTitle productImage={T10} title="Apple iPad 9.7in with WiFi, 32GB-Silver (2017 Newest Model) (Renewed)" price="326.00" />
                </div>
              </div>
              <div className="Product-single-container">
                <div className="product-back-container">
                  <PageTitle productImage={T11} title="New Apple iPad Pro (11-inch, Wi-Fi, 256GB) - Space Gray (2nd Generation)" price="326.00" />
                </div>
              </div>
              <div className="Product-single-container">
                <div className="product-back-container">
                  <PageTitle productImage={T12} title="Apple iPad (10.2-Inch, Wi-Fi, 32GB) - Space Gray (Latest Model) (Renewed)" price="326.00" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}