import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addBasket } from '../../actions/addAction';

import '../../styles/product.scss';

import CategoryContainer from './CategoryContainer';
import { PageTitle } from './CategoryContainer';

import Camera1 from '../../images/camera/c1.jpg';
import Camera2 from '../../images/camera/c2.jpg';
import Camera3 from '../../images/camera/c3.jpg';
import Camera4 from '../../images/camera/c4.jpg';
import Camera5 from '../../images/camera/c5.jpg';
import Camera6 from '../../images/camera/c6.jpg';
import Camera7 from '../../images/camera/c7.jpg';
import Camera8 from '../../images/camera/c8.jpg';
import Camera9 from '../../images/camera/c9.jpg';
import Camera10 from '../../images/camera/c10.jpg';
import Camera11 from '../../images/camera/c11.jpg';
import Camera12 from '../../images/camera/c12.jpg';

const Camera = (props) => {
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
              <h2>Camera</h2>
            </div>
            <div className="product-grid-container">
              <div className="Product-single-container">
                <div className="product-back-container">
                  <div class="card">
                    <div class="container">
                      <div  className="container-img">
                        <div className="img-container">
                          <img src={Camera1} alt="Camera1" />
                        </div>
                      </div>
                      <h4 className="container-bio">Canon EOS 4000D DSLR Camera w/Canon EF-S 18-55mm F/3.5-5.6 III Zoom Lens + Case + 32GB SD Card (15pc Bundle)</h4> 
                    </div>
                    <div className="price-container">
                      <div>
                        <p>$ 1227.00</p> 
                      </div>
                      <div>
                        <p onClick={() => props.addBasket('camera1')}>
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
                          <img src={Camera2} alt="Camera2" />
                        </div>
                      </div>
                      <h4 className="container-bio">Canon EOS Rebel T7 DSLR Camera Bundle with Canon EF-S 18-55mm f/3.5-5.6 is II Lens + 2pc SanDisk 32GB Memory Cards + Accessory Kit</h4> 
                    </div>
                    <div className="price-container">
                      <div>
                        <p>$ 1245.00</p> 
                      </div>
                      <div>
                        <p onClick={() => props.addBasket('camera2')}>
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
                          <img src={Camera3} alt="Camera3" />
                        </div>
                      </div>
                      <h4 className="container-bio">Canon EOS Rebel T7 DSLR Camera with EF-S 18-55mm and EF 75-300mm Lens Complete Bundle with Bag, Battery, Charger, Filter Kit</h4> 
                    </div>
                    <div className="price-container">
                      <div>
                        <p>$ 1262.00</p> 
                      </div>
                      <div>
                        <p onClick={() => props.addBasket('camera3')}>
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
                          <img src={Camera4} alt="Camera4" />
                        </div>
                      </div>
                      <h4 className="container-bio">Canon EOS Rebel T7 DSLR Camera + Canon EF-S 18-55mm + Canon 75-300mm & 500mm Telephoto Lens + Wide Angle & Telephoto Lens + Macro Filter Kit</h4> 
                    </div>
                    <div className="price-container">
                      <div>
                        <p>$ 1207.00</p> 
                      </div>
                      <div>
                        <p onClick={() => props.addBasket('camera4')}>
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
                          <img src={Camera5} alt="Camera5" />
                        </div>
                      </div>
                      <h4 className="container-bio">Canon EOS Rebel T6 DSLR Camera with 18-55mm is II Lens Bundle + Canon EF 75-300mm f/4-5.6 III Lens and 500mm Preset Lens</h4> 
                    </div>
                    <div className="price-container">
                      <div>
                        <p>$ 1234.00</p> 
                      </div>
                      <div>
                        <p onClick={() => props.addBasket('camera5')}>
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
                          <img src={Camera6} alt="Camera6" />
                        </div>
                      </div>
                      <h4 className="container-bio">Canon EOS 4000D w/EF-S 18-55mm f/3.5-5.6 III Lens with Professional Accessory Bundle - Includes: Spare LPE10 Battery</h4> 
                    </div>
                    <div className="price-container">
                      <div>
                        <p>$ 1232.00</p> 
                      </div>
                      <div>
                        <p onClick={() => props.addBasket('camera6')}>
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
                          <img src={Camera7} alt="Camera7" />
                        </div>
                      </div>
                      <h4 className="container-bio">Canon EOS Rebel T6 DSLR Camera Bundle with Canon EF-S 18-55mm f/3.5-5.6 is II Lens + 2pc SanDisk 32GB Memory Cards + Premium Accessory Kit</h4> 
                    </div>
                    <div className="price-container">
                      <div>
                        <p>$ 1206.00</p> 
                      </div>
                      <div>
                        <p onClick={() => props.addBasket('camera7')}>
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
                          <img src={Camera8} alt="Camera8" />
                        </div>
                      </div>
                      <h4 className="container-bio">Canon EOS Rebel T7 DSLR Camera with EF-S 18-55mm and EF 75-300mm Lens Bundle with Bag, 64GB SD Card, Corel PC Photo</h4> 
                    </div>
                    <div className="price-container">
                      <div>
                        <p>$ 1226.00</p> 
                      </div>
                      <div>
                        <p onClick={() => props.addBasket('camera8')}>
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
                          <img src={Camera9} alt="Camera9" />
                        </div>
                      </div>
                      <h4 className="container-bio">Canon EOS Rebel T7 Digital SLR Camera with 18-55mm EF-S f/3.5-5.6 is II Lens + 58mm Wide Angle Lens + 2X Telephoto Lens</h4> 
                    </div>
                    <div className="price-container">
                      <div>
                        <p>$ 1234.00</p> 
                      </div>
                      <div>
                        <p onClick={() => props.addBasket('camera9')}>
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
                          <img src={Camera10} alt="Camera10" />
                        </div>
                      </div>
                      <h4 className="container-bio">Canon EOS Rebel T7 DSLR Camera with EF-S 18-55mm and EF 75-300mm Lens Starter Bundle with Bag, Wrist Strap, Extra Battery</h4> 
                    </div>
                    <div className="price-container">
                      <div>
                        <p>$ 1232.00</p> 
                      </div>
                      <div>
                        <p onClick={() => props.addBasket('camera10')}>
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
                          <img src={Camera11} alt="Camera11" />
                        </div>
                      </div>
                      <h4 className="container-bio">Canon EOS Rebel T6 Digital SLR Camera with Canon EF-S 18-55mm Image Stabilization II Lens, Sandisk 32GB SDHC Memory Cards</h4> 
                    </div>
                    <div className="price-container">
                      <div>
                        <p>$ 1206.0</p> 
                      </div>
                      <div>
                        <p onClick={() => props.addBasket('camera11')}>
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
                          <img src={Camera12} alt="Camera12" />
                        </div>
                      </div>
                      <h4 className="container-bio">Canon EOS Rebel T7 DSLR Camera with 18-55mm is II Lens Bundle + Canon EF 75-300mm f/4-5.6 III Lens and 500mm Preset Lens + 32GB Memory</h4> 
                    </div>
                    <div className="price-container">
                      <div>
                        <p>$ 1226.00</p> 
                      </div>
                      <div>
                        <p onClick={() => props.addBasket('camera12')}>
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

export default connect(null, { addBasket })(Camera);
