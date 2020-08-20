import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addBasket } from '../../actions/addAction';

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

const Tablet = (props) => {
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
                <div class="card">
                  <div class="container">
                    <div  className="container-img">
                      <div className="img-container">
                        <img src={T1} alt="T1" />
                      </div>
                    </div>
                    <h4 className="container-bio">New Apple iPad Pro (12.9-inch, Wi-Fi + Cellular, 128GB) - Silver (4th Generation)</h4> 
                  </div>
                  <div className="price-container">
                    <div>
                      <p>$ 327.00</p> 
                    </div>
                    <div>
                      <p onClick={() => props.addBasket('tablet1')}>
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
                        <img src={T2} alt="T2" />
                      </div>
                    </div>
                    <h4 className="container-bio">Apple iPad (10.2-inch, Wi-Fi, 32GB) - Space Gray (Latest Model)</h4> 
                  </div>
                  <div className="price-container">
                    <div>
                      <p>$ 345.00</p> 
                    </div>
                    <div>
                      <p onClick={() => props.addBasket('tablet2')}>
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
                        <img src={T3} alt="T3" />
                      </div>
                    </div>
                    <h4 className="container-bio">New Apple iPad (10.2-Inch, Wi-Fi, 32GB) - Silver (Latest Model) with AppleCare+ Bundle</h4> 
                  </div>
                  <div className="price-container">
                    <div>
                      <p>$ 362.00</p> 
                    </div>
                    <div>
                      <p onClick={() => props.addBasket('tablet3')}>
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
                        <img src={T4} alt="T4" />
                      </div>
                    </div>
                    <h4 className="container-bio">New Apple iPad (10.2-Inch, Wi-Fi, 32GB) - Space Gray (Latest Model) with AppleCare+ Bundle</h4> 
                  </div>
                  <div className="price-container">
                    <div>
                      <p>$ 307.00</p> 
                    </div>
                    <div>
                      <p onClick={() => props.addBasket('tablet4')}>
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
                        <img src={T5} alt="T5" />
                      </div>
                    </div>
                    <h4 className="container-bio">New Apple iPad (10.2-Inch, Wi-Fi, 32GB) - Gold (Latest Model) with AppleCare+ Bundle</h4> 
                  </div>
                  <div className="price-container">
                    <div>
                      <p>$ 334.00</p> 
                    </div>
                    <div>
                      <p onClick={() => props.addBasket('tablet5')}>
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
                        <img src={T6} alt="T6" />
                      </div>
                    </div>
                    <h4 className="container-bio">New Apple iPad (10.2-Inch, Wi-Fi, 128GB) - Silver (Latest Model) with AppleCare+ Bundle</h4> 
                  </div>
                  <div className="price-container">
                    <div>
                      <p>$ 332.00</p> 
                    </div>
                    <div>
                      <p onClick={() => props.addBasket('tablet6')}>
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
                        <img src={T7} alt="T7" />
                      </div>
                    </div>
                    <h4 className="container-bio">Apple iPad Air (10.5-inch, Wi-Fi, 64GB) - Space Gray</h4> 
                  </div>
                  <div className="price-container">
                    <div>
                      <p>$ 306.00</p> 
                    </div>
                    <div>
                      <p onClick={() => props.addBasket('tablet7')}>
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
                        <img src={T8} alt="T8" />
                      </div>
                    </div>
                    <h4 className="container-bio">Apple iPad Mini (Wi-Fi, 64GB) - Space Gray (Latest Model)</h4> 
                  </div>
                  <div className="price-container">
                    <div>
                      <p>$ 326.00</p> 
                    </div>
                    <div>
                      <p onClick={() => props.addBasket('tablet8')}>
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
                        <img src={T9} alt="T9" />
                      </div>
                    </div>
                    <h4 className="container-bio">New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Space Gray (4th Generation)</h4> 
                  </div>
                  <div className="price-container">
                    <div>
                      <p>$ 456.00</p> 
                    </div>
                    <div>
                      <p onClick={() => props.addBasket('tablet9')}>
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
                        <img src={T10} alt="T10" />
                      </div>
                    </div>
                    <h4 className="container-bio">Apple iPad 9.7in with WiFi, 32GB-Silver (2017 Newest Model) (Renewed)</h4> 
                  </div>
                  <div className="price-container">
                    <div>
                      <p>$ 423.00</p> 
                    </div>
                    <div>
                      <p onClick={() => props.addBasket('tablet10')}>
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
                        <img src={T11} alt="T11" />
                      </div>
                    </div>
                    <h4 className="container-bio">New Apple iPad Pro (11-inch, Wi-Fi, 256GB) - Space Gray (2nd Generation)</h4> 
                  </div>
                  <div className="price-container">
                    <div>
                      <p>$ 396.00</p> 
                    </div>
                    <div>
                      <p onClick={() => props.addBasket('tablet11')}>
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
                        <img src={T12} alt="T12" />
                      </div>
                    </div>
                    <h4 className="container-bio">Apple iPad (10.2-Inch, Wi-Fi, 32GB) - Space Gray (Latest Model) (Renewed)</h4> 
                  </div>
                  <div className="price-container">
                    <div>
                      <p>$ 375.00</p> 
                    </div>
                    <div>
                      <p onClick={() => props.addBasket('tablet12')}>
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

export default connect(null, { addBasket })(Tablet);
