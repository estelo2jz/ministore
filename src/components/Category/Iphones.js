import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addBasket } from '../../actions/addAction';

import '../../styles/product.scss';

import CategoryContainer from './CategoryContainer';

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

const Iphones = (props) => {
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
                  <div class="card">
                    <div class="container">
                      <div  className="container-img">
                        <div className="img-container">
                          <img src={I1} alt="I1" />
                        </div>
                      </div>
                      <h4 className="container-bio">Apple iPhone 7, 32GB, Black - Fully Unlocked (Renewed)</h4> 
                    </div>
                    <div className="price-container">
                      <div>
                        <p>$ 1227.00</p> 
                      </div>
                      <div>
                        <p onClick={() => props.addBasket('iphone1')}>
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
                          <img src={I2} alt="I2" />
                        </div>
                      </div>
                      <h4 className="container-bio">Apple iPhone X, 64GB, Space Gray - Fully Unlocked (Renewed)</h4> 
                    </div>
                    <div className="price-container">
                      <div>
                        <p>$ 1245.00</p> 
                      </div>
                      <div>
                        <p onClick={() => props.addBasket('iphone2')}>
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
                          <img src={I3} alt="I3" />
                        </div>
                      </div>
                      <h4 className="container-bio">Apple iPhone 11, 128GB, Black - Fully Unlocked (Renewed)</h4> 
                    </div>
                    <div className="price-container">
                      <div>
                        <p>$ 1262.00</p> 
                      </div>
                      <div>
                        <p onClick={() => props.addBasket('iphone3')}>
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
                          <img src={I4} alt="I4" />
                        </div>
                      </div>
                      <h4 className="container-bio">Apple iPhone 11 Pro, 64GB, Midnight Green - Fully Unlocked (Renewed)</h4> 
                    </div>
                    <div className="price-container">
                      <div>
                        <p>$ 1207.00</p> 
                      </div>
                      <div>
                        <p onClick={() => props.addBasket('iphone4')}>
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
                          <img src={I5} alt="I5" />
                        </div>
                      </div>
                      <h4 className="container-bio">Apple iPhone Xs Max, 256GB, Silver - Fully Unlocked (Renewed)</h4> 
                    </div>
                    <div className="price-container">
                      <div>
                        <p>$ 1214.00</p> 
                      </div>
                      <div>
                        <p onClick={() => props.addBasket('iphone5')}>
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
                          <img src={I6} alt="I6" />
                        </div>
                      </div>
                      <h4 className="container-bio">Apple iPhone XS, 256GB , Space Gray - Fully Unlocked (Renewed)</h4> 
                    </div>
                    <div className="price-container">
                      <div>
                        <p>$ 1222.00</p> 
                      </div>
                      <div>
                        <p onClick={() => props.addBasket('iphone6')}>
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
                          <img src={I7} alt="I7" />
                        </div>
                      </div>
                      <h4 className="container-bio">Apple iPhone 7 Matte Black 32GB Verizon Unlocked (Renewed)</h4> 
                    </div>
                    <div className="price-container">
                      <div>
                        <p>$ 1206.00</p> 
                      </div>
                      <div>
                        <p onClick={() => props.addBasket('iphone7')}>
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
                          <img src={I8} alt="I8" />
                        </div>
                      </div>
                      <h4 className="container-bio">Apple iPhone SE, 64GB, White - Fully Unlocked (Renewed)</h4> 
                    </div>
                    <div className="price-container">
                      <div>
                        <p>$ 1226.00</p> 
                      </div>
                      <div>
                        <p onClick={() => props.addBasket('iphone8')}>
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
                          <img src={I9} alt="I9" />
                        </div>
                      </div>
                      <h4 className="container-bio">Apple iPhone 7, 128GB, Red - for Sprint/Verizon (Renewed)</h4> 
                    </div>
                    <div className="price-container">
                      <div>
                        <p>$ 1145.00</p> 
                      </div>
                      <div>
                        <p onClick={() => props.addBasket('iphone9')}>
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
                          <img src={I10} alt="I10" />
                        </div>
                      </div>
                      <h4 className="container-bio">Apple iPhone X, 64GB, Space Gray - Fully Unlocked (Renewed)</h4> 
                    </div>
                    <div className="price-container">
                      <div>
                        <p>$ 1451.00</p> 
                      </div>
                      <div>
                        <p onClick={() => props.addBasket('iphone10')}>
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
                          <img src={I11} alt="I11" />
                        </div>
                      </div>
                      <h4 className="container-bio">Google Pixel XL - 32GB Factory Unlocked - Very Silver (Renewed)</h4> 
                    </div>
                    <div className="price-container">
                      <div>
                        <p>$ 1356.00</p> 
                      </div>
                      <div>
                        <p onClick={() => props.addBasket('iphone11')}>
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
                          <img src={I12} alt="I2" />
                        </div>
                      </div>
                      <h4 className="container-bio">Apple iPhone 8 256GB Unlocked GSM Phone - Silver (Renewed)</h4> 
                    </div>
                    <div className="price-container">
                      <div>
                        <p>$ 1266.00</p> 
                      </div>
                      <div>
                        <p onClick={() => props.addBasket('iphone12')}>
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

  export default connect(null, { addBasket })(Iphones);
