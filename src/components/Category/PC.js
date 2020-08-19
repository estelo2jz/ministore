import React, { Component } from 'react';

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

export default class PC extends Component {
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
              <h2>PC</h2>
            </div>
            <div className="product-grid-container">
              <div className="Product-single-container">
                <div className="product-back-container">
                  <PageTitle productImage={PC1} title="CYBERPOWERPC Gamer Xtreme VR Gaming PC, Intel Core i5-9400F 2.9GHz, NVIDIA GeForce GTX 1660 6GB, 8GB DDR4, 240GB SSD, 1TB HDD" price="1427.00" />
                </div>
              </div>
              <div className="Product-single-container">
                <div className="product-back-container">
                  <PageTitle productImage={PC2} title="Gaming PC Desktop Computer Intel i5 3.10GHz,8GB Ram,1TB Hard Drive,Windows 10 pro,WiFi Ready,Video Card Nvidia GTX 650 1GB" price="1545.00" />
                </div>
              </div>
              <div className="Product-single-container">
                <div className="product-back-container">
                  <PageTitle productImage={PC3} title="CORSAIR ONE a100 Compact Gaming PC (AMD RYZEN 9 3900X, GEFORCE RTX 2080)" price="1562.00" />
                </div>
              </div>
              <div className="Product-single-container">
                <div className="product-back-container">
                  <PageTitle productImage={PC4} title="Gaming PC Desktop Computer Intel i5 3.10GHz,8GB Ram,1TB Hard Drive Storage" price="1507.00" />
                </div>
              </div>
              <div className="Product-single-container">
                <div className="product-back-container">
                  <PageTitle productImage={PC5} title="SkyTech Blaze II Gaming Computer PC Desktop – Ryzen 5 2600 6-Core 3.4 GHz, NVIDIA GeForce GTX 1660 6G, 500G SSD, 8GB DDR4" price="1854.00" />
                </div>
              </div>
              <div className="Product-single-container">
                <div className="product-back-container">
                  <PageTitle productImage={PC6} title="Gaming PC Desktop Computer Intel i5 3.10GHz,8GB Ram,1TB Hard Drive,Windows 10 pro,WiFi Ready,Video Card Nvidia GTX 650 1GB" price="1352.00" />
                </div>
              </div>
              <div className="Product-single-container">
                <div className="product-back-container">
                  <PageTitle productImage={PC7} title="Gaming PC Desktop Computer Intel i5 3.10GHz,8GB Ram,1TB Hard Drive,Windows 10 pro,WiFi Ready,Video Card Nvidia GTX 650 1GB" price="1506.00" />
                </div>
              </div>
              <div className="Product-single-container">
                <div className="product-back-container">
                  <PageTitle productImage={PC8} title="[Ryzen & GTX 1050 Ti Edition] SkyTech Archangel Gaming Computer Desktop PC Ryzen 1200 3.1GHz Quad-Core, GTX 1050 Ti 4GB" price="1406.00" />
                </div>
              </div>
              <div className="Product-single-container">
                <div className="product-back-container">
                  <PageTitle productImage={PC9} title="CORSAIR Vengeance a4100 Series Gaming PC - AMD Ryzen 7 3700X CPU - GeForce RTX 2070 Super Graphics - 16GB" price="1406.00" />
                </div>
              </div>
              <div className="Product-single-container">
                <div className="product-back-container">
                  <PageTitle productImage={PC10} title="Omen by HP Obelisk Gaming Desktop Computer, 9th Generation Intel Core i9-9900K Processor, NVIDIA GeForce RTX 2080 SUPER 8GB" price="1406.00" />
                </div>
              </div>
              <div className="Product-single-container">
                <div className="product-back-container">
                  <PageTitle productImage={PC11} title="XOTIC V200 Enthusiast Pro (RYZEN 9 3900X 12-core 4.6GHZ Turbo, 32GB DDR4 RAM, 500GB NVMe SSD + 2TB HDD, RTX 2080 Ti 11GB" price="1406.00" />
                </div>
              </div>
              <div className="Product-single-container">
                <div className="product-back-container">
                  <PageTitle productImage={PC12} title="iBUYPOWER Pro Gaming PC Computer Desktop MCT3900V2 (Ryzen 9 3900X 3.8GHz, NVIDIA RTX 2080 Super 8GB, 32GB DDR4 RAM" price="1406.00" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}