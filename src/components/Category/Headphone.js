import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addBasket } from '../../actions/addAction';

import '../../styles/product.scss';

import CategoryContainer from './CategoryContainer';
import { PageTitle } from './CategoryContainer';

import Head1 from '../../images/headphone/head1.jpg';
import Head2 from '../../images/headphone/head2.jpg';
import Head3 from '../../images/headphone/head3.jpg';
import Head4 from '../../images/headphone/head4.jpg';
import Head5 from '../../images/headphone/head5.jpg';
import Head6 from '../../images/headphone/head6.jpg';
import Head7 from '../../images/headphone/head7.jpg';
import Head8 from '../../images/headphone/head8.jpg';
import Head9 from '../../images/headphone/head9.jpg';
import Head10 from '../../images/headphone/head10.jpg';
import Head11 from '../../images/headphone/head11.jpg';
import Head12 from '../../images/headphone/head12.jpg';

const Headphone = (props) => {
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
              <h2>Headphone</h2>
            </div>
            <div className="product-grid-container">
              <div className="Product-single-container">
                <div className="product-back-container">
                  <div class="card">
                    <div class="container">
                      <div  className="container-img">
                        <div className="img-container">
                          <img src={Head1} alt="Head1" />
                        </div>
                      </div>
                      <h4 className="container-bio">Apple AirPods with Wired Charging Case</h4> 
                    </div>
                    <div className="price-container">
                      <div>
                        <p>$ 127.00</p> 
                      </div>
                      <div>
                        <p onClick={() => props.addBasket('AppleAirPods')}>
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
                          <img src={Head2} alt="Head2" />
                        </div>
                      </div>
                      <h4 className="container-bio">TaoTronics Hybrid Active Noise Cancelling Headphones with Mic, 3 ANC Modes 2020 Upgraded Bluetooth Headphones</h4> 
                    </div>
                    <div className="price-container">
                      <div>
                        <p>$ 145.00</p> 
                      </div>
                      <div>
                        <p onClick={() => props.addBasket('TaoTronicsHybrid')}>
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
                          <img src={Head3} alt="Head3" />
                        </div>
                      </div>
                      <h4 className="container-bio">Bose SoundLink Around Ear Wireless Headphones II - Black</h4> 
                    </div>
                    <div className="price-container">
                      <div>
                        <p>$ 162.00</p> 
                      </div>
                      <div>
                        <p onClick={() => props.addBasket('BoseSoundLink')}>
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
                          <img src={Head4} alt="Head4" />
                        </div>
                      </div>
                      <h4 className="container-bio">Powerbeats Pro Wireless Earphones - Apple H1 Headphone Chip, Class 1 Bluetooth, 9 Hours Of Listening Time</h4> 
                    </div>
                    <div className="price-container">
                      <div>
                        <p>$ 107.00</p> 
                      </div>
                      <div>
                        <p onClick={() => props.addBasket('PowerbeatsPro')}>
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
                          <img src={Head5} alt="Head5" />
                        </div>
                      </div>
                      <h4 className="container-bio">Bose QuietComfort 35 II Wireless Bluetooth Headphones, Noise-Cancelling, with Alexa voice control - Black</h4> 
                    </div>
                    <div className="price-container">
                      <div>
                        <p>$ 114.00</p> 
                      </div>
                      <div>
                        <p onClick={() => props.addBasket('BoseQuietComfort35')}>
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
                          <img src={Head6} alt="Head6" />
                        </div>
                      </div>
                      <h4 className="container-bio">Bose SoundSport, Wireless Earbuds, (Sweatproof Bluetooth Headphones for Running and Sports)</h4> 
                    </div>
                    <div className="price-container">
                      <div>
                        <p>$ 112.00</p> 
                      </div>
                      <div>
                        <p onClick={() => props.addBasket('BoseSoundSport')}>
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
                          <img src={Head7} alt="Head7" />
                        </div>
                      </div>
                      <h4 className="container-bio">Denon AH-C720 In-Ear Wired Headphones | Designed For Professionals, Travelers & Music Enthusiasts on the Go</h4> 
                    </div>
                    <div className="price-container">
                      <div>
                        <p>$ 106.00</p> 
                      </div>
                      <div>
                        <p onClick={() => props.addBasket('DenonAHC720')}>
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
                          <img src={Head8} alt="Head8" />
                        </div>
                      </div>
                      <h4 className="container-bio">Sony MDR7506 Professional Large Diaphragm Headphone</h4> 
                    </div>
                    <div className="price-container">
                      <div>
                        <p>$ 126.00</p> 
                      </div>
                      <div>
                        <p onClick={() => props.addBasket('SonyMDR7506')}>
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
                          <img src={Head9} alt="Head9" />
                        </div>
                      </div>
                      <h4 className="container-bio">Philips SHP9600 Wired Over-Ear Open-Back Headphones, 50mm Drivers, Hi-Fi, Comfortable + Durable</h4> 
                    </div>
                    <div className="price-container">
                      <div>
                        <p>$ 126.00</p> 
                      </div>
                      <div>
                        <p onClick={() => props.addBasket('PhilipsSHP9600')}>
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
                          <img src={Head10} alt="Head10" />
                        </div>
                      </div>
                      <h4 className="container-bio">Audio-Technica ATH-M50x Professional Studio Monitor Headphones, Black, Professional Grade, Critically Acclaimed</h4> 
                    </div>
                    <div className="price-container">
                      <div>
                        <p>$ 126.00</p> 
                      </div>
                      <div>
                        <p onClick={() => props.addBasket('AudioTechnicaATHM50')}>
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
                          <img src={Head11} alt="Head11" />
                        </div>
                      </div>
                      <h4 className="container-bio">JBL LIVE 500BT - Around-Ear Wireless Headphone - Black</h4> 
                    </div>
                    <div className="price-container">
                      <div>
                        <p>$ 126.00</p> 
                      </div>
                      <div>
                        <p onClick={() => props.addBasket('JBLLIVE500BT')}>
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
                          <img src={Head12} alt="Head12" />
                        </div>
                      </div>
                      <h4 className="container-bio">Skullcandy Crusher Wireless Over-Ear Headphone - Deep Red</h4> 
                    </div>
                    <div className="price-container">
                      <div>
                        <p>$ 126.00</p> 
                      </div>
                      <div>
                        <p onClick={() => props.addBasket('SkullcandyCrusher')}>
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

export default connect(null, { addBasket })(Headphone);