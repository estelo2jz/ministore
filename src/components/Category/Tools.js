import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addBasket } from '../../actions/addAction';

import '../../styles/product.scss';

import CategoryContainer from './CategoryContainer';
import { PageTitle } from './CategoryContainer';

import Tool1 from '../../images/toolss/tool1.jpg';
import Tool2 from '../../images/toolss/tool2.jpg';
import Tool3 from '../../images/toolss/tool3.jpg';
import Tool4 from '../../images/toolss/tool4.jpg';
import Tool5 from '../../images/toolss/tool5.jpg';
import Tool6 from '../../images/toolss/tool6.jpg';
import Tool7 from '../../images/toolss/tool7.jpg';
import Tool8 from '../../images/toolss/tool8.jpg';
import Tool9 from '../../images/toolss/tool9.jpg';
import Tool10 from '../../images/toolss/tool10.jpg';
import Tool11 from '../../images/toolss/tool11.jpg';
import Tool12 from '../../images/toolss/tool12.jpg';

const Tools = (props) => {
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
            <h2>Tools</h2>
          </div>
          <div className="product-grid-container">
            <div className="Product-single-container">
              <div className="product-back-container">
                  <div class="card">
                    <div class="container">
                      <div  className="container-img">
                        <div className="img-container">
                          <img src={Tool1} alt="Tool1" />
                        </div>
                      </div>
                      <h4 className="container-bio">41-Piece Tool Set General Household Home Repair Hand Tools Kit with Plastic Toolbox Storage Case</h4> 
                    </div>
                    <div className="price-container">
                      <div>
                        <p>$ 27.00</p> 
                      </div>
                      <div>
                        <p onClick={() => props.addBasket('tool1')}>
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
                          <img src={Tool2} alt="Tool2" />
                        </div>
                      </div>
                      <h4 className="container-bio">Cartman 148-Piece Tool Set - General Household Hand Tool Kit with Plastic Toolbox Storage Case</h4> 
                    </div>
                    <div className="price-container">
                      <div>
                        <p>$ 45.00</p> 
                      </div>
                      <div>
                        <p onClick={() => props.addBasket('tool2')}>
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
                          <img src={Tool3} alt="Tool3" />
                        </div>
                      </div>
                      <h4 className="container-bio">DEWALT 20V MAX Cordless Drill Combo Kit, 2-Tool (DCK240C2)</h4> 
                    </div>
                    <div className="price-container">
                      <div>
                        <p>$ 62.00</p> 
                      </div>
                      <div>
                        <p onClick={() => props.addBasket('tool3')}>
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
                          <img src={Tool4} alt="Tool4" />
                        </div>
                      </div>
                      <h4 className="container-bio">BLACK+DECKER 20V MAX Cordless Drill Combo Kit, 4-Tool (BD4KITCDCRL)</h4> 
                    </div>
                    <div className="price-container">
                      <div>
                        <p>$ 34.00</p> 
                      </div>
                      <div>
                        <p onClick={() => props.addBasket('tool4')}>
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
                          <img src={Tool5} alt="Tool5" />
                        </div>
                      </div>
                      <h4 className="container-bio">HORUSDY 100-Piece Magnetic Screwdriver Set with Plastic Racking</h4> 
                    </div>
                    <div className="price-container">
                      <div>
                        <p>$ 14.00</p> 
                      </div>
                      <div>
                        <p onClick={() => props.addBasket('tool5')}>
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
                          <img src={Tool6} alt="Tool6" />
                        </div>
                      </div>
                      <h4 className="container-bio">Qooltek Multipurpose Laser Level Laser Line 8 feet Measure Tape Ruler Adjustable</h4> 
                    </div>
                    <div className="price-container">
                      <div>
                        <p>$ 12.00</p> 
                      </div>
                      <div>
                        <p onClick={() => props.addBasket('tool6')}>
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
                          <img src={Tool7} alt="Tool7" />
                        </div>
                      </div>
                      <h4 className="container-bio">CARTMAN Orange 39-Piece Tool Set - General Household Hand Tool Kit</h4> 
                    </div>
                    <div className="price-container">
                      <div>
                        <p>$ 32.00</p> 
                      </div>
                      <div>
                        <p onClick={() => props.addBasket('tool7')}>
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
                          <img src={Tool8} alt="Tool8" />
                        </div>
                      </div>
                      <h4 className="container-bio">DOWELL 10-22 AWG Wire Stripper Cutter Wire Stripping Tool And Multi</h4> 
                    </div>
                    <div className="price-container">
                      <div>
                        <p>$ 43.00</p> 
                      </div>
                      <div>
                        <p onClick={() => props.addBasket('tool8')}>
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
                          <img src={Tool9} alt="Tool9" />
                        </div>
                      </div>
                      <h4 className="container-bio">DOWELL 24 Pieces Homeowner Tool Set, Home Repair Hand Tool Kit with Portable Tool Bag</h4> 
                    </div>
                    <div className="price-container">
                      <div>
                        <p>$ 43.00</p> 
                      </div>
                      <div>
                        <p onClick={() => props.addBasket('tool9')}>
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
                          <img src={Tool10} alt="Tool10" />
                        </div>
                      </div>
                      <h4 className="container-bio">DOWELL 10 Piece Small Tool Kit,Mini Portable Tool Set,Home Repair Hand Tool Kit with Plastic Tool box Storage Case</h4> 
                    </div>
                    <div className="price-container">
                      <div>
                        <p>$ 43.00</p> 
                      </div>
                      <div>
                        <p onClick={() => props.addBasket('tool10')}>
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
                          <img src={Tool11} alt="Tool11" />
                        </div>
                      </div>
                      <h4 className="container-bio">DOWELL Small Homeowner Tool Set 9 Pieces General Household Small Hand Tool Kit with Plastic Tool box Storage Case</h4> 
                    </div>
                    <div className="price-container">
                      <div>
                        <p>$ 43.00</p> 
                      </div>
                      <div>
                        <p onClick={() => props.addBasket('tool11')}>
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
                          <img src={Tool12} alt="Tool12" />
                        </div>
                      </div>
                      <h4 className="container-bio">DOWELL 49 Piece Tool Set,Home Repair Hand Tool Kit with Plastic Tool Box Storage Case</h4> 
                    </div>
                    <div className="price-container">
                      <div>
                        <p>$ 43.00</p> 
                      </div>
                      <div>
                        <p onClick={() => props.addBasket('tool12')}>
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

export default connect(null, { addBasket })(Tools);