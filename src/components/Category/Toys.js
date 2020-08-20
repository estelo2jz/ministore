import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addBasket } from '../../actions/addAction';

import '../../styles/product.scss';

import CategoryContainer from './CategoryContainer';
import { PageTitle } from './CategoryContainer';

import Toy1 from '../../images/toys/to1.jpg';
import Toy2 from '../../images/toys/to2.jpg';
import Toy3 from '../../images/toys/to3.jpg';
import Toy4 from '../../images/toys/to4.jpg';
import Toy5 from '../../images/toys/to5.jpg';
import Toy6 from '../../images/toys/to6.jpg';
import Toy7 from '../../images/toys/to7.jpg';
import Toy8 from '../../images/toys/to8.jpg';
import Toy9 from '../../images/toys/to9.jpg';
import Toy10 from '../../images/toys/to10.jpg';
import Toy11 from '../../images/toys/to11.jpg';
import Toy12 from '../../images/toys/to12.jpg';

const Toys = (props) => {
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
            <h2>Toys</h2>
          </div>
          <div className="product-grid-container">
            <div className="Product-single-container">
              <div className="product-back-container">
                  <div class="card">
                    <div class="container">
                      <div  className="container-img">
                        <div className="img-container">
                          <img src={Toy1} alt="Toy1" />
                        </div>
                      </div>
                      <h4 className="container-bio">NEW DJI Mavic Air 2 Fly More Combo - Drone Quadcopter UAV with 48MP Camera 4K Video 1/2 CMOS Sensor 3-Axis Gimbal 34min Flight Time</h4> 
                    </div>
                    <div className="price-container">
                      <div>
                        <p>$ 27.00</p> 
                      </div>
                      <div>
                        <p onClick={() => props.addBasket('toy1')}>
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
                          <img src={Toy2} alt="Toy2" />
                        </div>
                      </div>
                      <h4 className="container-bio">Magic: The Gathering Double Masters Draft Booster (24 Packs) & 2 Box Toppers</h4> 
                    </div>
                    <div className="price-container">
                      <div>
                        <p>$ 45.00</p> 
                      </div>
                      <div>
                        <p onClick={() => props.addBasket('toy2')}>
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
                          <img src={Toy3} alt="Toy3" />
                        </div>
                      </div>
                      <h4 className="container-bio">LEGO Technic Lamborghini Sián FKP 37 (42115), Building Project for Adults, Build and Display This Distinctive Model</h4> 
                    </div>
                    <div className="price-container">
                      <div>
                        <p>$ 62.00</p> 
                      </div>
                      <div>
                        <p onClick={() => props.addBasket('toy3')}>
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
                          <img src={Toy4} alt="Toy4" />
                        </div>
                      </div>
                      <h4 className="container-bio">HONEY JOY Inflatable Bounce House, Kids Castle Jumping Bouncer W/Slide &Splash Pool, Includes Carry Bag, Repairing Kit, Stakes, Ocean Balls</h4> 
                    </div>
                    <div className="price-container">
                      <div>
                        <p>$ 72.00</p> 
                      </div>
                      <div>
                        <p onClick={() => props.addBasket('toy4')}>
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
                          <img src={Toy5} alt="Toy5" />
                        </div>
                      </div>
                      <h4 className="container-bio">WARHAMMER 40000: INDOMITUS</h4> 
                    </div>
                    <div className="price-container">
                      <div>
                        <p>$ 54.00</p> 
                      </div>
                      <div>
                        <p onClick={() => props.addBasket('toy5')}>
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
                          <img src={Toy6} alt="Toy6" />
                        </div>
                      </div>
                      <h4 className="container-bio">SereneLife Trampoline with Net Enclosure – ASTM Approved, Stable, Strong Kids and Adult Trampoline with Net – Outdoor Trampoline for Kids</h4> 
                    </div>
                    <div className="price-container">
                      <div>
                        <p>$ 42.00</p> 
                      </div>
                      <div>
                        <p onClick={() => props.addBasket('toy6')}>
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
                          <img src={Toy7} alt="Toy7" />
                        </div>
                      </div>
                      <h4 className="container-bio">Best Choice Products 12V 3.7 MPH 2-Seater Licensed Land Rover Ride On w/ Parent Remote Control, MP3 Player - Pink</h4> 
                    </div>
                    <div className="price-container">
                      <div>
                        <p>$ 66.00</p> 
                      </div>
                      <div>
                        <p onClick={() => props.addBasket('toy7')}>
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
                          <img src={Toy8} alt="Toy8" />
                        </div>
                      </div>
                      <h4 className="container-bio">Kid Trax Electric Kids Luxury Range Rover Car Ride-On Toy, 6 Volt Battery, Remote Control, Ages 3-5 Years, Silver (KT1550I)</h4> 
                    </div>
                    <div className="price-container">
                      <div>
                        <p>$ 50.00</p> 
                      </div>
                      <div>
                        <p onClick={() => props.addBasket('toy8')}>
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
                          <img src={Toy9} alt="Toy9" />
                        </div>
                      </div>
                      <h4 className="container-bio">Wow World of Watersports Super Slide</h4> 
                    </div>
                    <div className="price-container">
                      <div>
                        <p>$ 32.00</p> 
                      </div>
                      <div>
                        <p onClick={() => props.addBasket('toy9')}>
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
                          <img src={Toy10} alt="Toy10" />
                        </div>
                      </div>
                      <h4 className="container-bio">BABLE 2 Seats Kids Electric Car 12V Ride On Car Truck with Remote Control, Kids Car Ride on Toy Motorized Vehicles with USB/MP3 Music</h4> 
                    </div>
                    <div className="price-container">
                      <div>
                        <p>$ 90.00</p> 
                      </div>
                      <div>
                        <p onClick={() => props.addBasket('toy10')}>
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
                          <img src={Toy11} alt="Toy11" />
                        </div>
                      </div>
                      <h4 className="container-bio">Magic: The Gathering Zendikar Rising Collector Booster Box | 12 Packs (180 Cards)</h4> 
                    </div>
                    <div className="price-container">
                      <div>
                        <p>$ 23.00</p> 
                      </div>
                      <div>
                        <p onClick={() => props.addBasket('toy11')}>
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
                          <img src={Toy12} alt="Toy12" />
                        </div>
                      </div>
                      <h4 className="container-bio">Magic: The Gathering Double Masters Draft Booster Box | 24 Packs (360 Cards) | 2 Box Toppers</h4> 
                    </div>
                    <div className="price-container">
                      <div>
                        <p>$ 25.00</p> 
                      </div>
                      <div>
                        <p onClick={() => props.addBasket('toy12')}>
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

export default connect(null, { addBasket })(Toys);
