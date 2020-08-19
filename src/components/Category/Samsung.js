import React, { Component } from 'react';

import '../../styles/product.scss';

import CategoryContainer from './CategoryContainer';
import { PageTitle } from './CategoryContainer';

import S1 from '../../images/samsung/s1.jpg';
import S2 from '../../images/samsung/s2.jpg';
import S3 from '../../images/samsung/s3.jpg';
import S4 from '../../images/samsung/s4.jpg';
import S5 from '../../images/samsung/s5.jpg';
import S6 from '../../images/samsung/s6.jpg';
import S7 from '../../images/samsung/s7.jpg';
import S8 from '../../images/samsung/s8.jpg';
import S9 from '../../images/samsung/s9.jpg';
import S10 from '../../images/samsung/s10.jpg';
import S11 from '../../images/samsung/s11.jpg';
import S12 from '../../images/samsung/s12.jpg';

export default class Samsung extends Component {
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
              <h2>Samsung</h2>
            </div>
            <div className="product-grid-container">
              <div className="Product-single-container">
                <div className="product-back-container">
                  <PageTitle productImage={S1} title="Samsung Galaxy A10e 32GB A102U GSM Unlocked Phone - Black " price="1327.00" />
                </div>
              </div>
              <div className="Product-single-container">
                <div className="product-back-container">
                  <PageTitle productImage={S2} title="Samsung Galaxy A20S w/Triple Cameras (32GB, 3GB RAM) 6.5" price="1345.00" />
                </div>
              </div>
              <div className="Product-single-container">
                <div className="product-back-container">
                  <PageTitle productImage={S3} title="Samsung Galaxy S9 G960U 64GB Unlocked GSM 4G LTE Phone w/ 12MP Camera - Midnight Black" price="1362.00" />
                </div>
              </div>
              <div className="Product-single-container">
                <div className="product-back-container">
                  <PageTitle productImage={S4} title="Samsung Galaxy S9, 64GB, Lilac Purple - Fully Unlocked (Renewed)" price="1307.00" />
                </div>
              </div>
              <div className="Product-single-container">
                <div className="product-back-container">
                  <PageTitle productImage={S5} title="Samsung Galaxy A31-128GB / 4GB - A315G/DSL Unlocked Dual Sim Phone w/Quad Camera 48MP+8MP+5MP+5MP" price="1334.00" />
                </div>
              </div>
              <div className="Product-single-container">
                <div className="product-back-container">
                  <PageTitle productImage={S6} title="Samsung Galaxy A10 32GB A105M 6.2 HD+ Infinity-V 4G LTE Factory Unlocked GSM Smartphone - Black" price="1312.00" />
                </div>
              </div>
              <div className="Product-single-container">
                <div className="product-back-container">
                  <PageTitle productImage={S7} title="Samsung Galaxy A10s A107M - 32GB, 6.2 HD+ Infinity-V Display, 13MP+2MP Dual Rear +8MP Front Cameras, GSM Unlocked " price="1306.00" />
                </div>
              </div>
              <div className="Product-single-container">
                <div className="product-back-container">
                  <PageTitle productImage={S8} title="Samsung Galaxy A51 (128GB, 4GB) 6.5, 48MP Quad Camera, Dual SIM GSM Unlocked A515F/DS- Global 4G LTE International Model" price="1326.00" />
                </div>
              </div>
              <div className="Product-single-container">
                <div className="product-back-container">
                  <PageTitle productImage={S9} title="Samsung Galaxy S10 Factory Unlocked Android Cell Phone | US Version | 128GB of Storage | Fingerprint ID and Facial Recognition" price="1326.00" />
                </div>
              </div>
              <div className="Product-single-container">
                <div className="product-back-container">
                  <PageTitle productImage={S10} title="Samsung Galaxy A01 16GB/2GB RAM (SM-A015M/DS) Dual SIM, 5.7” Display, GSM Unlocked, International Version - Blue" price="1326.00" />
                </div>
              </div>
              <div className="Product-single-container">
                <div className="product-back-container">
                  <PageTitle productImage={S11} title="Samsung Galaxy A11 Unlocked | 6.4 Screen | 32GB of Storage | Long Lasting Battery | 2020 Model | Black" price="1326.00" />
                </div>
              </div>
              <div className="Product-single-container">
                <div className="product-back-container">
                  <PageTitle productImage={S12} title="Samsung Galaxy S8 G950U 64GB - Verizon + GSM Unlocked Android Smartphone, Midnight Black (Renewed)" price="1326.00" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}