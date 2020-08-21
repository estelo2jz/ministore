import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addBasket } from '../../actions/addAction';

import '../../styles/product.scss';

import CategoryContainer from './CategoryContainer';
import { PageTitle } from './CategoryContainer';

import PC1 from '../../images/pc/pc1.jpg';
import PC2 from '../../images/pc/pc2.jpg';
import PC3 from '../../images/pc/pc3.jpg';
import PC4 from '../../images/pc/pc4.jpg';
import PC5 from '../../images/pc/pc5.jpg';
import PC6 from '../../images/pc/pc6.jpg';
import PC7 from '../../images/pc/pc7.jpg';
import PC8 from '../../images/pc/pc8.jpg';
import PC9 from '../../images/pc/pc9.jpg';
import PC10 from '../../images/pc/pc10.jpg';
import PC11 from '../../images/pc/pc11.jpg';
import PC12 from '../../images/pc/pc12.jpg';

const PC = (props) => {
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
            <h2>PC</h2>
          </div>
          <div className="product-grid-container">
            <div className="Product-single-container">
              <div className="product-back-container">
                                  <div class="card">
                  <div class="container">
                    <div  className="container-img">
                      <div className="img-container">
                        <img src={PC1} alt="PC1" />
                      </div>
                    </div>
                    <h4 className="container-bio">CYBERPOWERPC Gamer Xtreme VR Gaming PC, Intel Core i5-9400F 2.9GHz, NVIDIA GeForce GTX 1660 6GB, 8GB DDR4, 240GB SSD, 1TB HDD</h4> 
                  </div>
                  <div className="price-container">
                    <div>
                      <p>$ 1427.00</p> 
                    </div>
                    <div>
                      <p onClick={() => props.addBasket('gamingpc1')}>
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
                        <img src={PC2} alt="PC2" />
                      </div>
                    </div>
                    <h4 className="container-bio">Gaming PC Desktop Computer Intel i5 3.10GHz,8GB Ram,1TB Hard Drive,Windows 10 pro,WiFi Ready,Video Card Nvidia GTX 650 1GB</h4> 
                  </div>
                  <div className="price-container">
                    <div>
                      <p>$ 1545.00</p> 
                    </div>
                    <div>
                      <p onClick={() => props.addBasket('gamingpc2')}>
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
                        <img src={PC3} alt="PC3" />
                      </div>
                    </div>
                    <h4 className="container-bio">CORSAIR ONE a100 Compact Gaming PC (AMD RYZEN 9 3900X, GEFORCE RTX 2080)</h4> 
                  </div>
                  <div className="price-container">
                    <div>
                      <p>$ 1562.00</p> 
                    </div>
                    <div>
                      <p onClick={() => props.addBasket('gamingpc3')}>
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
                        <img src={PC4} alt="PC4" />
                      </div>
                    </div>
                    <h4 className="container-bio">Gaming PC Desktop Computer Intel i5 3.10GHz,8GB Ram,1TB Hard Drive Storage</h4> 
                  </div>
                  <div className="price-container">
                    <div>
                      <p>$ 1507.00</p> 
                    </div>
                    <div>
                      <p onClick={() => props.addBasket('gamingpc4')}>
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
                        <img src={PC5} alt="PC5" />
                      </div>
                    </div>
                    <h4 className="container-bio">SkyTech Blaze II Gaming Computer PC Desktop – Ryzen 5 2600 6-Core 3.4 GHz, NVIDIA GeForce GTX 1660 6G, 500G SSD, 8GB DDR4</h4> 
                  </div>
                  <div className="price-container">
                    <div>
                      <p>$ 1854.00</p> 
                    </div>
                    <div>
                      <p onClick={() => props.addBasket('gamingpc5')}>
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
                        <img src={PC6} alt="PC6" />
                      </div>
                    </div>
                    <h4 className="container-bio">Gaming PC Desktop Computer Intel i5 3.10GHz,8GB Ram,1TB Hard Drive,Windows 10 pro,WiFi Ready,Video Card Nvidia GTX 650 1GB</h4> 
                  </div>
                  <div className="price-container">
                    <div>
                      <p>$ 1352.00</p> 
                    </div>
                    <div>
                      <p onClick={() => props.addBasket('gamingpc6')}>
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
                        <img src={PC7} alt="PC7" />
                      </div>
                    </div>
                    <h4 className="container-bio">Gaming PC Desktop Computer Intel i5 3.10GHz,8GB Ram,1TB Hard Drive,Windows 10 pro,WiFi Ready,Video Card Nvidia GTX 650 1GB</h4> 
                  </div>
                  <div className="price-container">
                    <div>
                      <p>$ 1506.00</p> 
                    </div>
                    <div>
                      <p onClick={() => props.addBasket('gamingpc7')}>
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
                        <img src={PC8} alt="PC8" />
                      </div>
                    </div>
                    <h4 className="container-bio">[Ryzen & GTX 1050 Ti Edition] SkyTech Archangel Gaming Computer Desktop PC Ryzen 1200 3.1GHz Quad-Core, GTX 1050 Ti 4GB</h4> 
                  </div>
                  <div className="price-container">
                    <div>
                      <p>$ 1406.00</p> 
                    </div>
                    <div>
                      <p onClick={() => props.addBasket('gamingpc8')}>
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
                        <img src={PC9} alt="PC9" />
                      </div>
                    </div>
                    <h4 className="container-bio">CORSAIR Vengeance a4100 Series Gaming PC - AMD Ryzen 7 3700X CPU - GeForce RTX 2070 Super Graphics - 16GB</h4> 
                  </div>
                  <div className="price-container">
                    <div>
                      <p>$ 1786.00</p> 
                    </div>
                    <div>
                      <p onClick={() => props.addBasket('gamingpc9')}>
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
                        <img src={PC10} alt="PC10" />
                      </div>
                    </div>
                    <h4 className="container-bio">Omen by HP Obelisk Gaming Desktop Computer, 9th Generation Intel Core i9-9900K Processor, NVIDIA GeForce RTX 2080 SUPER 8GB</h4> 
                  </div>
                  <div className="price-container">
                    <div>
                      <p>$ 1656.00</p> 
                    </div>
                    <div>
                      <p onClick={() => props.addBasket('gamingpc10')}>
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
                        <img src={PC11} alt="PC11" />
                      </div>
                    </div>
                    <h4 className="container-bio">XOTIC V200 Enthusiast Pro (RYZEN 9 3900X 12-core 4.6GHZ Turbo, 32GB DDR4 RAM, 500GB NVMe SSD + 2TB HDD, RTX 2080 Ti 11GB</h4> 
                  </div>
                  <div className="price-container">
                    <div>
                      <p>$ 1366.00</p> 
                    </div>
                    <div>
                      <p onClick={() => props.addBasket('gamingpc11')}>
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
                        <img src={PC12} alt="PC12" />
                      </div>
                    </div>
                    <h4 className="container-bio">iBUYPOWER Pro Gaming PC Computer Desktop MCT3900V2 (Ryzen 9 3900X 3.8GHz, NVIDIA RTX 2080 Super 8GB, 32GB DDR4 RAM</h4> 
                  </div>
                  <div className="price-container">
                    <div>
                      <p>$ 1506.00</p> 
                    </div>
                    <div>
                      <p onClick={() => props.addBasket('gamingpc12')}>
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


export default connect(null, { addBasket })(PC);
