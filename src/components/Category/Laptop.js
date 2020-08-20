import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addBasket } from '../../actions/addAction';

import '../../styles/product.scss';

import CategoryContainer from './CategoryContainer';
import { PageTitle } from './CategoryContainer';

import Laptop1 from '../../images/laptop/laptop1.jpg';
import Laptop2 from '../../images/laptop/laptop2.jpg';
import Laptop3 from '../../images/laptop/laptop3.jpg';
import Laptop4 from '../../images/laptop/laptop4.jpg';
import Laptop5 from '../../images/laptop/laptop5.jpg';
import Laptop6 from '../../images/laptop/laptop6.jpg';
import Laptop7 from '../../images/laptop/laptop7.jpg';
import Laptop8 from '../../images/laptop/laptop8.jpg';
import Laptop9 from '../../images/laptop/laptop9.jpg';
import Laptop10 from '../../images/laptop/laptop10.jpg';
import Laptop11 from '../../images/laptop/laptop11.jpg';
import Laptop12 from '../../images/laptop/laptop12.jpg';

const Laptop = (props) => {
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
            <h2>Laptop</h2>
          </div>
          <div className="product-grid-container">
            <div className="Product-single-container">
              <div className="product-back-container">
                                  <div class="card">
                    <div class="container">
                      <div  className="container-img">
                        <div className="img-container">
                          <img src={Laptop1} alt="Laptop1" />
                        </div>
                      </div>
                      <h4 className="container-bio">Acer Predator Helios 300 Gaming Laptop, Intel Core i7-9750H, GeForce GTX 1660 Ti, 15.6 Full HD 144Hz Display</h4> 
                    </div>
                    <div className="price-container">
                      <div>
                        <p>$ 1127.00</p> 
                      </div>
                      <div>
                        <p onClick={() => props.addBasket('laptop1')}>
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
                          <img src={Laptop2} alt="Laptop2" />
                        </div>
                      </div>
                      <h4 className="container-bio">Asus TUF FX505DT Gaming Laptop, 15.6” 120Hz Full HD, AMD Ryzen 5 R5-3550H Processor, GeForce GTX 1650 Graphics, 8GB DDR4</h4> 
                    </div>
                    <div className="price-container">
                      <div>
                        <p>$ 1145.00</p> 
                      </div>
                      <div>
                        <p onClick={() => props.addBasket('laptop2')}>
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
                          <img src={Laptop3} alt="Laptop3" />
                        </div>
                      </div>
                      <h4 className="container-bio">Acer Nitro 5 Gaming Laptop, 9th Gen Intel Core i5-9300H, NVIDIA GeForce GTX 1650, 15.6 Full HD IPS Display, 8GB DDR4, 256GB</h4> 
                    </div>
                    <div className="price-container">
                      <div>
                        <p>$ 1162.00</p> 
                      </div>
                      <div>
                        <p onClick={() => props.addBasket('laptop3')}>
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
                          <img src={Laptop4} alt="Laptop4" />
                        </div>
                      </div>
                      <h4 className="container-bio">Acer Predator Helios 300 Gaming Laptop, Intel i7-10750H, NVIDIA GeForce RTX 2060 6GB, 15.6 Full HD 144Hz 3ms IPS Display, 16GB</h4> 
                    </div>
                    <div className="price-container">
                      <div>
                        <p>$ 1107.00</p> 
                      </div>
                      <div>
                        <p onClick={() => props.addBasket('laptop4')}>
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
                          <img src={Laptop5} alt="Laptop5" />
                        </div>
                      </div>
                      <h4 className="container-bio">MSI GL65 Leopard 10SFK-062 15.6 FHD 144Hz 3ms Thin Bezel Gaming Laptop Intel Core i7-10750H RTX2070 16GB 512GB</h4> 
                    </div>
                    <div className="price-container">
                      <div>
                        <p>$ 1114.00</p> 
                      </div>
                      <div>
                        <p onClick={() => props.addBasket('laptop5')}>
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
                          <img src={Laptop6} alt="Laptop6" />
                        </div>
                      </div>
                      <h4 className="container-bio">Razer Blade 15 Gaming Laptop: Intel Core i7-9750H 6 Core, NVIDIA GeForce GTX 1660 Ti, 15.6 FHD 144Hz, 16GB RAM, 256GB SSD</h4> 
                    </div>
                    <div className="price-container">
                      <div>
                        <p>$ 1112.00</p> 
                      </div>
                      <div>
                        <p onClick={() => props.addBasket('laptop6')}>
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
                          <img src={Laptop7} alt="Laptop7" />
                        </div>
                      </div>
                      <h4 className="container-bio">ASUS TUF Gaming A15 Gaming Laptop, 15.6” 144Hz Full HD IPS-Type, AMD Ryzen 7 4800H, GeForce GTX 1660 Ti, 16GB DDR4</h4> 
                    </div>
                    <div className="price-container">
                      <div>
                        <p>$ 1106.00</p> 
                      </div>
                      <div>
                        <p onClick={() => props.addBasket('laptop7')}>
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
                          <img src={Laptop8} alt="Laptop8" />
                        </div>
                      </div>
                      <h4 className="container-bio">2019 ASUS ROG 15.6 FHD Gaming Laptop Computer, Intel Hexa-Core i7-9750H Up to 4.5GHz, 16GB DDR4, 1TB HDD + 512GB SSD</h4> 
                    </div>
                    <div className="price-container">
                      <div>
                        <p>$ 1456.00</p> 
                      </div>
                      <div>
                        <p onClick={() => props.addBasket('laptop8')}>
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
                          <img src={Laptop9} alt="Laptop9" />
                        </div>
                      </div>
                      <h4 className="container-bio">Lenovo Ideapad L340 Gaming Laptop, 15.6 Inch FHD (1920 X 1080) IPS Display, Intel Core i5-9300H Processor, 8GB DDR4 RAM, 512GB</h4> 
                    </div>
                    <div className="price-container">
                      <div>
                        <p>$ 1236.00</p> 
                      </div>
                      <div>
                        <p onClick={() => props.addBasket('laptop9')}>
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
                          <img src={Laptop10} alt="Laptop10" />
                        </div>
                      </div>
                      <h4 className="container-bio">Acer Nitro 5 AN515-42-R5ED Gaming Laptop, AMD Ryzen 5 2500U, AMD Radeon RX 560X Graphics, 15.6 Full HD IPS Display, 8GB</h4> 
                    </div>
                    <div className="price-container">
                      <div>
                        <p>$ 1256.00</p> 
                      </div>
                      <div>
                        <p onClick={() => props.addBasket('laptop10')}>
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
                          <img src={Laptop11} alt="Laptop11" />
                        </div>
                      </div>
                      <h4 className="container-bio">MSI GF63 Thin 9RCX -615 15.6 Gaming Laptop, Intel Core i5-9300H, NVIDIA GTX 1050Ti, 8GB, 512GB NVMe SSD, Win10</h4> 
                    </div>
                    <div className="price-container">
                      <div>
                        <p>$ 1316.00</p> 
                      </div>
                      <div>
                        <p onClick={() => props.addBasket('laptop11')}>
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
                          <img src={Laptop12} alt="Laptop12" />
                        </div>
                      </div>
                      <h4 className="container-bio">ASUS ROG G531GT-BI7N6 15.6 FHD Gaming Laptop Computer, Intel Hexa-Core i7-9750H Up to 4.5GHz, 8GB DDR4, 512GB SSD</h4> 
                    </div>
                    <div className="price-container">
                      <div>
                        <p>$ 1456.00</p> 
                      </div>
                      <div>
                        <p onClick={() => props.addBasket('laptop12')}>
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

export default connect(null, { addBasket })(Laptop);