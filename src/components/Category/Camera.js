import React, { Component } from 'react';

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

export default class Camera extends Component {
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
              <h2>Camera</h2>
            </div>
            <div className="product-grid-container">
              <div className="Product-single-container">
                <div className="product-back-container">
                  <PageTitle productImage={Camera1} title="Canon EOS 4000D DSLR Camera w/Canon EF-S 18-55mm F/3.5-5.6 III Zoom Lens + Case + 32GB SD Card (15pc Bundle)" price="1227.00" />
                </div>
              </div>
              <div className="Product-single-container">
                <div className="product-back-container">
                  <PageTitle productImage={Camera2} title="Canon EOS Rebel T7 DSLR Camera Bundle with Canon EF-S 18-55mm f/3.5-5.6 is II Lens + 2pc SanDisk 32GB Memory Cards + Accessory Kit" price="1245.00" />
                </div>
              </div>
              <div className="Product-single-container">
                <div className="product-back-container">
                  <PageTitle productImage={Camera3} title="Canon EOS Rebel T7 DSLR Camera with EF-S 18-55mm and EF 75-300mm Lens Complete Bundle with Bag, Battery, Charger, Filter Kit" price="1262.00" />
                </div>
              </div>
              <div className="Product-single-container">
                <div className="product-back-container">
                  <PageTitle productImage={Camera4} title="Canon EOS Rebel T7 DSLR Camera + Canon EF-S 18-55mm + Canon 75-300mm & 500mm Telephoto Lens + Wide Angle & Telephoto Lens + Macro Filter Kit" price="1207.00" />
                </div>
              </div>
              <div className="Product-single-container">
                <div className="product-back-container">
                  <PageTitle productImage={Camera5} title="Canon EOS Rebel T6 DSLR Camera with 18-55mm is II Lens Bundle + Canon EF 75-300mm f/4-5.6 III Lens and 500mm Preset Lens" price="1234.00" />
                </div>
              </div>
              <div className="Product-single-container">
                <div className="product-back-container">
                  <PageTitle productImage={Camera6} title="Canon EOS 4000D w/EF-S 18-55mm f/3.5-5.6 III Lens with Professional Accessory Bundle - Includes: Spare LPE10 Battery" price="1232.00" />
                </div>
              </div>
              <div className="Product-single-container">
                <div className="product-back-container">
                  <PageTitle productImage={Camera7} title="Canon EOS Rebel T6 DSLR Camera Bundle with Canon EF-S 18-55mm f/3.5-5.6 is II Lens + 2pc SanDisk 32GB Memory Cards + Premium Accessory Kit" price="1206.00" />
                </div>
              </div>
              <div className="Product-single-container">
                <div className="product-back-container">
                  <PageTitle productImage={Camera8} title="Canon EOS Rebel T7 DSLR Camera with EF-S 18-55mm and EF 75-300mm Lens Bundle with Bag, 64GB SD Card, Corel PC Photo" price="1226.00" />
                </div>
              </div>
              <div className="Product-single-container">
                <div className="product-back-container">
                  <PageTitle productImage={Camera9} title="Canon EOS Rebel T7 Digital SLR Camera with 18-55mm EF-S f/3.5-5.6 is II Lens + 58mm Wide Angle Lens + 2X Telephoto Lens" price="1234.00" />
                </div>
              </div>
              <div className="Product-single-container">
                <div className="product-back-container">
                  <PageTitle productImage={Camera10} title="Canon EOS Rebel T7 DSLR Camera with EF-S 18-55mm and EF 75-300mm Lens Starter Bundle with Bag, Wrist Strap, Extra Battery" price="1232.00" />
                </div>
              </div>
              <div className="Product-single-container">
                <div className="product-back-container">
                  <PageTitle productImage={Camera11} title="Canon EOS Rebel T6 Digital SLR Camera with Canon EF-S 18-55mm Image Stabilization II Lens, Sandisk 32GB SDHC Memory Cards" price="1206.00" />
                </div>
              </div>
              <div className="Product-single-container">
                <div className="product-back-container">
                  <PageTitle productImage={Camera12} title="Canon EOS Rebel T7 DSLR Camera with 18-55mm is II Lens Bundle + Canon EF 75-300mm f/4-5.6 III Lens and 500mm Preset Lens + 32GB Memory" price="1226.00" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}