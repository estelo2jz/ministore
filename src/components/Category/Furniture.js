import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addBasket } from '../../actions/addAction';

import '../../styles/product.scss';

import CategoryContainer from './CategoryContainer';
import { PageTitle } from './CategoryContainer';

import Furniture1 from '../../images/furniture/f1.jpg';
import Furniture2 from '../../images/furniture/f2.jpg';
import Furniture3 from '../../images/furniture/f3.jpg';
import Furniture4 from '../../images/furniture/f4.jpg';
import Furniture5 from '../../images/furniture/f5.jpg';
import Furniture6 from '../../images/furniture/f6.jpg';
import Furniture7 from '../../images/furniture/f7.jpg';
import Furniture8 from '../../images/furniture/f8.jpg';
import Furniture9 from '../../images/furniture/f9.jpg';
import Furniture10 from '../../images/furniture/f10.jpg';
import Furniture11 from '../../images/furniture/f11.jpg';
import Furniture12 from '../../images/furniture/f12.jpg';

const Furniture = (props) => {
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
              <h2>Furnitures</h2>
            </div>
            <div className="product-grid-container">
              <div className="Product-single-container">
                <div className="product-back-container">
                  <div class="card">
                    <div class="container">
                      <div  className="container-img">
                        <div className="img-container">
                          <img src={Furniture1} alt="Furniture1" />
                        </div>
                      </div>
                      <h4 className="container-bio">Ashley Furniture Signature Design - 12 Inch Chime Express Memory Foam Mattress - Bed in a Box - Queen - Firm Comfort Level - White</h4> 
                    </div>
                    <div className="price-container">
                      <div>
                        <p>$ 727.00</p> 
                      </div>
                      <div>
                        <p onClick={() => props.addBasket('furniture1')}>
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
                          <img src={Furniture2} alt="Furniture2" />
                        </div>
                      </div>
                      <h4 className="container-bio">Walker Edison WE Furniture TV Stand 58 White/Rustic Oak, White/Reclaimed Barnwood</h4> 
                    </div>
                    <div className="price-container">
                      <div>
                        <p>$ 745.00</p> 
                      </div>
                      <div>
                        <p onClick={() => props.addBasket('furniture2')}>
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
                          <img src={Furniture3} alt="Furniture3" />
                        </div>
                      </div>
                      <h4 className="container-bio">Walker Edison Furniture Company Modern Farmhouse Buffet Sideboard Kitchen Dining Storage Cabinet Living Room, 32 Inch</h4> 
                    </div>
                    <div className="price-container">
                      <div>
                        <p>$ 762.00</p> 
                      </div>
                      <div>
                        <p onClick={() => props.addBasket('furniture3')}>
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
                          <img src={Furniture4} alt="Furniture4" />
                        </div>
                      </div>
                      <h4 className="container-bio">Glitzhome Rustic Storage Bins Accent Side Table Home Furniture Galvanized Metal Stool Ottoman Seat with Round Wood Lid Set of 2</h4> 
                    </div>
                    <div className="price-container">
                      <div>
                        <p>$ 707.00</p> 
                      </div>
                      <div>
                        <p onClick={() => props.addBasket('furniture4')}>
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
                          <img src={Furniture5} alt="Furniture5" />
                        </div>
                      </div>
                      <h4 className="container-bio">Walker Edison Furniture Company Modern Round Coffee Accent Table Living Room, Marble/Gold</h4> 
                    </div>
                    <div className="price-container">
                      <div>
                        <p>$ 734.00</p> 
                      </div>
                      <div>
                        <p onClick={() => props.addBasket('furniture5')}>
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
                          <img src={Furniture6} alt="Furniture6" />
                        </div>
                      </div>
                      <h4 className="container-bio">WE Furniture Minimal Farmhouse Wood Universal Stand for TV's up to 64 Flat Screen Living Room Storage Shelves Entertainment</h4> 
                    </div>
                    <div className="price-container">
                      <div>
                        <p>$ 732.00</p> 
                      </div>
                      <div>
                        <p onClick={() => props.addBasket('furniture6')}>
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
                          <img src={Furniture7} alt="Furniture7" />
                        </div>
                      </div>
                      <h4 className="container-bio">Walker Edison Furniture Company Industrial Wood and Metal Bar Cabinet with Wheels Wine Glass and Bottle Kitchen Storage</h4> 
                    </div>
                    <div className="price-container">
                      <div>
                        <p>$ 706.00</p> 
                      </div>
                      <div>
                        <p onClick={() => props.addBasket('furniture7')}>
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
                          <img src={Furniture8} alt="Furniture8" />
                        </div>
                      </div>
                      <h4 className="container-bio">Walker Edison Furniture Company Modern Farmhouse Glass and Wood Stand with Cabinet Doors for TVs up to 80</h4> 
                    </div>
                    <div className="price-container">
                      <div>
                        <p>$ 726.00</p> 
                      </div>
                      <div>
                        <p onClick={() => props.addBasket('furniture8')}>
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
                          <img src={Furniture9} alt="Furniture9" />
                        </div>
                      </div>
                      <h4 className="container-bio">WComputer Desk with Furnitureshelf, Office Desk, Writing Desk, Wood and Metal Frame, Industrial Style, Study Table Workstation</h4> 
                    </div>
                    <div className="price-container">
                      <div>
                        <p>$ 718.00</p> 
                      </div>
                      <div>
                        <p onClick={() => props.addBasket('furniture9')}>
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
                          <img src={Furniture10} alt="Furniture10" />
                        </div>
                      </div>
                      <h4 className="container-bio">Flash Furniture High Back Designer Black Mesh Executive Swivel Ergonomic Office Chair with Adjustable Arms</h4> 
                    </div>
                    <div className="price-container">
                      <div>
                        <p>$ 785.00</p> 
                      </div>
                      <div>
                        <p onClick={() => props.addBasket('furniture10')}>
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
                          <img src={Furniture11} alt="Furniture11" />
                        </div>
                      </div>
                      <h4 className="container-bio">Riforla Vanity Set with Lighted Mirror, Makeup Vanity Dressing Table Dresser Desk with Large Drawer for Bedroom, White Bedroom Furniture</h4> 
                    </div>
                    <div className="price-container">
                      <div>
                        <p>$ 795.00</p> 
                      </div>
                      <div>
                        <p onClick={() => props.addBasket('furniture11')}>
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
                          <img src={Furniture12} alt="Furniture12" />
                        </div>
                      </div>
                      <h4 className="container-bio">Flash Furniture Mid-Back Black Mesh Swivel Ergonomic Task Office Chair with Flip-Up Arms</h4> 
                    </div>
                    <div className="price-container">
                      <div>
                        <p>$ 775.00</p> 
                      </div>
                      <div>
                        <p onClick={() => props.addBasket('furniture12')}>
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

  export default connect(null, { addBasket })(Furniture);
