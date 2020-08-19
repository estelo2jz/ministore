import React, { Component } from 'react';

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

export default class Laptop extends Component {
  render() {
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
                  <PageTitle productImage={Laptop1}  title="Acer Predator Helios 300 Gaming Laptop, Intel Core i7-9750H, GeForce GTX 1660 Ti, 15.6 Full HD 144Hz Display" price="1127.00" />
                </div>
              </div>
              <div className="Product-single-container">
                <div className="product-back-container">
                  <PageTitle productImage={Laptop2} title="Asus TUF FX505DT Gaming Laptop, 15.6” 120Hz Full HD, AMD Ryzen 5 R5-3550H Processor, GeForce GTX 1650 Graphics, 8GB DDR4" price="1145.00" />
                </div>
              </div>
              <div className="Product-single-container">
                <div className="product-back-container">
                  <PageTitle productImage={Laptop3} title="Acer Nitro 5 Gaming Laptop, 9th Gen Intel Core i5-9300H, NVIDIA GeForce GTX 1650, 15.6 Full HD IPS Display, 8GB DDR4, 256GB " price="1162.00" />
                </div>
              </div>
              <div className="Product-single-container">
                <div className="product-back-container">
                  <PageTitle productImage={Laptop4} title="Acer Predator Helios 300 Gaming Laptop, Intel i7-10750H, NVIDIA GeForce RTX 2060 6GB, 15.6 Full HD 144Hz 3ms IPS Display, 16GB " price="1107.00" />
                </div>
              </div>
              <div className="Product-single-container">
                <div className="product-back-container">
                  <PageTitle productImage={Laptop5} title="MSI GL65 Leopard 10SFK-062 15.6 FHD 144Hz 3ms Thin Bezel Gaming Laptop Intel Core i7-10750H RTX2070 16GB 512GB" price="1114.00" />
                </div>
              </div>
              <div className="Product-single-container">
                <div className="product-back-container">
                  <PageTitle productImage={Laptop6} title="Razer Blade 15 Gaming Laptop: Intel Core i7-9750H 6 Core, NVIDIA GeForce GTX 1660 Ti, 15.6 FHD 144Hz, 16GB RAM, 256GB SSD" price="1112.00" />
                </div>
              </div>
              <div className="Product-single-container">
                <div className="product-back-container">
                  <PageTitle productImage={Laptop7} title="ASUS TUF Gaming A15 Gaming Laptop, 15.6” 144Hz Full HD IPS-Type, AMD Ryzen 7 4800H, GeForce GTX 1660 Ti, 16GB DDR4" price="1106.00" />
                </div>
              </div>
              <div className="Product-single-container">
                <div className="product-back-container">
                  <PageTitle productImage={Laptop8} title="2019 ASUS ROG 15.6 FHD Gaming Laptop Computer, Intel Hexa-Core i7-9750H Up to 4.5GHz, 16GB DDR4, 1TB HDD + 512GB SSD" price="1206.00" />
                </div>
              </div>
              <div className="Product-single-container">
                <div className="product-back-container">
                  <PageTitle productImage={Laptop9} title="Lenovo Ideapad L340 Gaming Laptop, 15.6 Inch FHD (1920 X 1080) IPS Display, Intel Core i5-9300H Processor, 8GB DDR4 RAM, 512GB " price="1206.00" />
                </div>
              </div>
              <div className="Product-single-container">
                <div className="product-back-container">
                  <PageTitle productImage={Laptop10} title="Acer Nitro 5 AN515-42-R5ED Gaming Laptop, AMD Ryzen 5 2500U, AMD Radeon RX 560X Graphics, 15.6 Full HD IPS Display, 8GB " price="1206.00" />
                </div>
              </div>
              <div className="Product-single-container">
                <div className="product-back-container">
                  <PageTitle productImage={Laptop11} title="MSI GF63 Thin 9RCX -615 15.6 Gaming Laptop, Intel Core i5-9300H, NVIDIA GTX 1050Ti, 8GB, 512GB NVMe SSD, Win10" price="1206.00" />
                </div>
              </div>
              <div className="Product-single-container">
                <div className="product-back-container">
                  <PageTitle productImage={Laptop12} title="ASUS ROG G531GT-BI7N6 15.6 FHD Gaming Laptop Computer, Intel Hexa-Core i7-9750H Up to 4.5GHz, 8GB DDR4, 512GB SSD" price="1206.00" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}