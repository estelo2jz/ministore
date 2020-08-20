import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addBasket } from '../../actions/addAction';

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

const Samsung = (props) => {
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
                  <div class="card">
                    <div class="container">
                      <div  className="container-img">
                        <div className="img-container">
                          <img src={S1} alt="S1" />
                        </div>
                      </div>
                      <h4 className="container-bio">Samsung Galaxy A10e 32GB A102U GSM Unlocked Phone - Black</h4> 
                    </div>
                    <div className="price-container">
                      <div>
                        <p>$ 1325.00</p> 
                      </div>
                      <div>
                        <p onClick={() => props.addBasket('samsung1')}>
                          <button className="myButton">Add to cart</button>         
                        </p>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
            <div className="Product-single-container">
              <div className="product-back-container">
                  <div class="card">
                    <div class="container">
                      <div  className="container-img">
                        <div className="img-container">
                          <img src={S2} alt="S2" />
                        </div>
                      </div>
                      <h4 className="container-bio">Samsung Galaxy A20S w/Triple Cameras (32GB, 3GB RAM) 6.5</h4> 
                    </div>
                    <div className="price-container">
                      <div>
                        <p>$ 1345.00</p> 
                      </div>
                      <div>
                        <p onClick={() => props.addBasket('samsung2')}>
                          <button className="myButton">Add to cart</button>         
                        </p>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
            <div className="Product-single-container">
              <div className="product-back-container">
                  <div class="card">
                    <div class="container">
                      <div  className="container-img">
                        <div className="img-container">
                          <img src={S3} alt="S3" />
                        </div>
                      </div>
                      <h4 className="container-bio">Samsung Galaxy S9 G960U 64GB Unlocked GSM 4G LTE Phone w/ 12MP Camera - Midnight Black</h4> 
                    </div>
                    <div className="price-container">
                      <div>
                        <p>$ 1362.00</p> 
                      </div>
                      <div>
                        <p onClick={() => props.addBasket('samsung3')}>
                          <button className="myButton">Add to cart</button>         
                        </p>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
            <div className="Product-single-container">
              <div className="product-back-container">
                  <div class="card">
                    <div class="container">
                      <div  className="container-img">
                        <div className="img-container">
                          <img src={S4} alt="S4" />
                        </div>
                      </div>
                      <h4 className="container-bio">Samsung Galaxy S9, 64GB, Lilac Purple - Fully Unlocked (Renewed)</h4> 
                    </div>
                    <div className="price-container">
                      <div>
                        <p>$ 1254.00</p> 
                      </div>
                      <div>
                        <p onClick={() => props.addBasket('samsung4')}>
                          <button className="myButton">Add to cart</button>         
                        </p>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
            <div className="Product-single-container">
              <div className="product-back-container">
                  <div class="card">
                    <div class="container">
                      <div  className="container-img">
                        <div className="img-container">
                          <img src={S5} alt="S5" />
                        </div>
                      </div>
                      <h4 className="container-bio">Samsung Galaxy A31-128GB / 4GB - A315G/DSL Unlocked Dual Sim Phone w/Quad Camera 48MP+8MP+5MP+5MP</h4> 
                    </div>
                    <div className="price-container">
                      <div>
                        <p>$ 1334.00</p> 
                      </div>
                      <div>
                        <p onClick={() => props.addBasket('samsung5')}>
                          <button className="myButton">Add to cart</button>         
                        </p>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
            <div className="Product-single-container">
              <div className="product-back-container">
                  <div class="card">
                    <div class="container">
                      <div  className="container-img">
                        <div className="img-container">
                          <img src={S6} alt="S6" />
                        </div>
                      </div>
                      <h4 className="container-bio">Samsung Galaxy A10 32GB A105M 6.2 HD+ Infinity-V 4G LTE Factory Unlocked GSM Smartphone - Black</h4> 
                    </div>
                    <div className="price-container">
                      <div>
                        <p>$ 1312.00</p> 
                      </div>
                      <div>
                        <p onClick={() => props.addBasket('samsung6')}>
                          <button className="myButton">Add to cart</button>         
                        </p>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
            <div className="Product-single-container">
              <div className="product-back-container">
                  <div class="card">
                    <div class="container">
                      <div  className="container-img">
                        <div className="img-container">
                          <img src={S7} alt="S7" />
                        </div>
                      </div>
                      <h4 className="container-bio">Samsung Galaxy A10s A107M - 32GB, 6.2 HD+ Infinity-V Display, 13MP+2MP Dual Rear +8MP Front Cameras, GSM Unlocked</h4> 
                    </div>
                    <div className="price-container">
                      <div>
                        <p>$ 1306.00</p> 
                      </div>
                      <div>
                        <p onClick={() => props.addBasket('samsung7')}>
                          <button className="myButton">Add to cart</button>         
                        </p>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
            <div className="Product-single-container">
              <div className="product-back-container">
                  <div class="card">
                    <div class="container">
                      <div  className="container-img">
                        <div className="img-container">
                          <img src={S8} alt="S8" />
                        </div>
                      </div>
                      <h4 className="container-bio">Samsung Galaxy A51 (128GB, 4GB) 6.5, 48MP Quad Camera, Dual SIM GSM Unlocked A515F/DS- Global 4G LTE International Model</h4> 
                    </div>
                    <div className="price-container">
                      <div>
                        <p>$ 1326.00</p> 
                      </div>
                      <div>
                        <p onClick={() => props.addBasket('samsung8')}>
                          <button className="myButton">Add to cart</button>         
                        </p>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
            <div className="Product-single-container">
              <div className="product-back-container">
                  <div class="card">
                    <div class="container">
                      <div  className="container-img">
                        <div className="img-container">
                          <img src={S9} alt="S9" />
                        </div>
                      </div>
                      <h4 className="container-bio">Samsung Galaxy S10 Factory Unlocked Android Cell Phone | US Version | 128GB of Storage | Fingerprint ID and Facial Recognition</h4> 
                    </div>
                    <div className="price-container">
                      <div>
                        <p>$ 1235.00</p> 
                      </div>
                      <div>
                        <p onClick={() => props.addBasket('samsung9')}>
                          <button className="myButton">Add to cart</button>         
                        </p>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
            <div className="Product-single-container">
              <div className="product-back-container">
                  <div class="card">
                    <div class="container">
                      <div  className="container-img">
                        <div className="img-container">
                          <img src={S10} alt="S10" />
                        </div>
                      </div>
                      <h4 className="container-bio">Samsung Galaxy A01 16GB/2GB RAM (SM-A015M/DS) Dual SIM, 5.7” Display, GSM Unlocked, International Version - Blue</h4> 
                    </div>
                    <div className="price-container">
                      <div>
                        <p>$ 1512.00</p> 
                      </div>
                      <div>
                        <p onClick={() => props.addBasket('samsung10')}>
                          <button className="myButton">Add to cart</button>         
                        </p>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
            <div className="Product-single-container">
              <div className="product-back-container">
                  <div class="card">
                    <div class="container">
                      <div  className="container-img">
                        <div className="img-container">
                          <img src={S11} alt="S11" />
                        </div>
                      </div>
                      <h4 className="container-bio">Samsung Galaxy A11 Unlocked | 6.4 Screen | 32GB of Storage | Long Lasting Battery | 2020 Model | Black</h4> 
                    </div>
                    <div className="price-container">
                      <div>
                        <p>$ 1132.00</p> 
                      </div>
                      <div>
                        <p onClick={() => props.addBasket('samsung11')}>
                          <button className="myButton">Add to cart</button>         
                        </p>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
            <div className="Product-single-container">
              <div className="product-back-container">
                  <div class="card">
                    <div class="container">
                      <div  className="container-img">
                        <div className="img-container">
                          <img src={S12} alt="S12" />
                        </div>
                      </div>
                      <h4 className="container-bio">Samsung Galaxy S8 G950U 64GB - Verizon + GSM Unlocked Android Smartphone, Midnight Black (Renewed)</h4> 
                    </div>
                    <div className="price-container">
                      <div>
                        <p>$ 1451.00</p> 
                      </div>
                      <div>
                        <p onClick={() => props.addBasket('samsung12')}>
                          <button className="myButton">Add to cart</button>         
                        </p>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default connect(null, { addBasket })(Samsung);