import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addBasket } from '../../actions/addAction';

import '../../styles/product.scss';

import CategoryContainer from './CategoryContainer';
import { PageTitle } from './CategoryContainer';

import Play1 from '../../images/gaming/ps1.jpg';
import Play2 from '../../images/gaming/ps2.jpg';
import Play3 from '../../images/gaming/ps3.jpg';
import Play4 from '../../images/gaming/ps4.jpg';
import Play5 from '../../images/gaming/ps5.jpg';
import Play6 from '../../images/gaming/ps6.jpg';
import Xb1 from '../../images/gaming/xb1.jpg';
import Xb2 from '../../images/gaming/xb2.jpg';
import Xb3 from '../../images/gaming/xb3.jpg';
import Xb4 from '../../images/gaming/xb4.jpg';
import Xb5 from '../../images/gaming/xb5.jpg';
import Xb6 from '../../images/gaming/xb6.jpg';

const GamingSystem = (props) => {
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
            <h2>Gaming System</h2>
          </div>
          <div className="product-grid-container">
            <div className="Product-single-container">
              <div className="product-back-container">
                    <div class="card">
                    <div class="container">
                      <div  className="container-img">
                        <div className="img-container">
                          <img src={Play1} alt="Play1" />
                        </div>
                      </div>
                      <h4 className="container-bio">NexiGo 2020 Playstation 4 PS4 Console Holiday Bundle 1TB HDD + Included 3X Games (The Last of Us, God of War, Horizon Zero Dawn)</h4> 
                    </div>
                    <div className="price-container">
                      <div>
                        <p>$ 527.00</p> 
                      </div>
                      <div>
                        <p onClick={() => props.addBasket('gamingsystem1')}>
                          <button className="myButton">Add to Cart</button>         
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
                          <img src={Play2} alt="Play2" />
                        </div>
                      </div>
                      <h4 className="container-bio">PlayStation 4 Slim 1TB Console</h4> 
                    </div>
                    <div className="price-container">
                      <div>
                        <p>$ 545.00</p> 
                      </div>
                      <div>
                        <p onClick={() => props.addBasket('gamingsystem2')}>
                          <button className="myButton">Add to Cart</button>         
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
                          <img src={Play3} alt="Play3" />
                        </div>
                      </div>
                      <h4 className="container-bio">PlayStation 4 Console - 1TB Slim Edition</h4> 
                    </div>
                    <div className="price-container">
                      <div>
                        <p>$ 562.00</p> 
                      </div>
                      <div>
                        <p onClick={() => props.addBasket('gamingsystem3')}>
                          <button className="myButton">Add to Cart</button>         
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
                          <img src={Play4} alt="Play4" />
                        </div>
                      </div>
                      <h4 className="container-bio">PlayStation 4 Slim 1TB Console - Only On PlayStation Bundle</h4> 
                    </div>
                    <div className="price-container">
                      <div>
                        <p>$ 507.00</p> 
                      </div>
                      <div>
                        <p onClick={() => props.addBasket('gamingsystem4')}>
                          <button className="myButton">Add to Cart</button>         
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
                          <img src={Play5} alt="Play5" />
                        </div>
                      </div>
                      <h4 className="container-bio">PlayStation 4 Pro 1TB Console</h4> 
                    </div>
                    <div className="price-container">
                      <div>
                        <p>$ 534.00</p> 
                      </div>
                      <div>
                        <p onClick={() => props.addBasket('gamingsystem5')}>
                          <button className="myButton">Add to Cart</button>         
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
                          <img src={Play6} alt="Play6" />
                        </div>
                      </div>
                      <h4 className="container-bio">PlayStation 4 Slim 1TB Console - Fortnite Bundle</h4> 
                    </div>
                    <div className="price-container">
                      <div>
                        <p>$ 532.00</p> 
                      </div>
                      <div>
                        <p onClick={() => props.addBasket('gamingsystem6')}>
                          <button className="myButton">Add to Cart</button>         
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
                          <img src={Xb1} alt="Xb1" />
                        </div>
                      </div>
                      <h4 className="container-bio">Xbox One S 1TB All-Digital Edition Console (Disc-Free Gaming) - Discontinued</h4> 
                    </div>
                    <div className="price-container">
                      <div>
                        <p>$ 506.00</p> 
                      </div>
                      <div>
                        <p onClick={() => props.addBasket('gamingsystem7')}>
                          <button className="myButton">Add to Cart</button>         
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
                          <img src={Xb2} alt="Xb2" />
                        </div>
                      </div>
                      <h4 className="container-bio">Newest Flagship Microsoft Xbox One S 1TB HDD Bundle with Two (2X) Wireless Controllers, 1-Month Game Pass Trial, 14-Day Xbox</h4> 
                    </div>
                    <div className="price-container">
                      <div>
                        <p>$ 526.00</p> 
                      </div>
                      <div>
                        <p onClick={() => props.addBasket('gamingsystem8')}>
                          <button className="myButton">Add to Cart</button>         
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
                          <img src={Xb3} alt="3" />
                        </div>
                      </div>
                      <h4 className="container-bio">Microsoft Xbox One X 1TB, 4K Ultra HD Gaming Console, Black (Renewed)</h4> 
                    </div>
                    <div className="price-container">
                      <div>
                        <p>$ 480.00</p> 
                      </div>
                      <div>
                        <p onClick={() => props.addBasket('gamingsystem9')}>
                          <button className="myButton">Add to Cart</button>         
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
                          <img src={Xb4} alt="Xb4" />
                        </div>
                      </div>
                      <h4 className="container-bio">Microsoft Xbox One X 1Tb Console With Wireless Controller: Xbox One X Enhanced, Hdr, Native 4K, Ultra Hd (Discontinued)</h4> 
                    </div>
                    <div className="price-container">
                      <div>
                        <p>$ 499.00</p> 
                      </div>
                      <div>
                        <p onClick={() => props.addBasket('gamingsystem10')}>
                          <button className="myButton">Add to Cart</button>         
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
                          <img src={Xb5} alt="Xb5" />
                        </div>
                      </div>
                      <h4 className="container-bio">Xbox One S 1TB Console - Star Wars Jedi: Fallen Order Bundle</h4> 
                    </div>
                    <div className="price-container">
                      <div>
                        <p>$ 500.00</p> 
                      </div>
                      <div>
                        <p onClick={() => props.addBasket('gamingsystem11')}>
                          <button className="myButton">Add to Cart</button>         
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
                          <img src={Xb6} alt="Xb6" />
                        </div>
                      </div>
                      <h4 className="container-bio">Xbox One 500 GB Console - Black [Discontinued]</h4> 
                    </div>
                    <div className="price-container">
                      <div>
                        <p>$ 540.00</p> 
                      </div>
                      <div>
                        <p onClick={() => props.addBasket('gamingsystem12')}>
                          <button className="myButton">Add to Cart</button>         
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

export default connect(null, { addBasket })(GamingSystem);
