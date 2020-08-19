import React, { Component } from 'react';

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

export default class Headphone extends Component {
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
              <h2>Headphone</h2>
            </div>
            <div className="product-grid-container">
              <div className="Product-single-container">
                <div className="product-back-container">
                  <PageTitle  productImage={Head1} title="Apple AirPods with Wired Charging Case" price="127.00" />
                </div>
              </div>
              <div className="Product-single-container">
                <div className="product-back-container">
                  <PageTitle  productImage={Head2} title="TaoTronics Hybrid Active Noise Cancelling Headphones with Mic, 3 ANC Modes 2020 Upgraded Bluetooth Headphones" price="145.00" />
                </div>
              </div>
              <div className="Product-single-container">
                <div className="product-back-container">
                  <PageTitle  productImage={Head3} title="Bose SoundLink Around Ear Wireless Headphones II - Black" price="162.00" />
                </div>
              </div>
              <div className="Product-single-container">
                <div className="product-back-container">
                  <PageTitle  productImage={Head4} title="Powerbeats Pro Wireless Earphones - Apple H1 Headphone Chip, Class 1 Bluetooth, 9 Hours Of Listening Time" price="107.00" />
                </div>
              </div>
              <div className="Product-single-container">
                <div className="product-back-container">
                  <PageTitle  productImage={Head5} title="Bose QuietComfort 35 II Wireless Bluetooth Headphones, Noise-Cancelling, with Alexa voice control - Black" price="114.00" />
                </div>
              </div>
              <div className="Product-single-container">
                <div className="product-back-container">
                  <PageTitle  productImage={Head6} title="Bose SoundSport, Wireless Earbuds, (Sweatproof Bluetooth Headphones for Running and Sports)" price="112.00" />
                </div>
              </div>
              <div className="Product-single-container">
                <div className="product-back-container">
                  <PageTitle  productImage={Head7} title="Denon AH-C720 In-Ear Wired Headphones | Designed For Professionals, Travelers & Music Enthusiasts on the Go" price="106.00" />
                </div>
              </div>
              <div className="Product-single-container">
                <div className="product-back-container">
                  <PageTitle  productImage={Head8} title="Sony MDR7506 Professional Large Diaphragm Headphone" price="126.00" />
                </div>
              </div>
              <div className="Product-single-container">
                <div className="product-back-container">
                  <PageTitle  productImage={Head9} title="Philips SHP9600 Wired Over-Ear Open-Back Headphones, 50mm Drivers, Hi-Fi, Comfortable + Durable" price="126.00" />
                </div>
              </div>
              <div className="Product-single-container">
                <div className="product-back-container">
                  <PageTitle  productImage={Head10} title="Audio-Technica ATH-M50x Professional Studio Monitor Headphones, Black, Professional Grade, Critically Acclaimed" price="126.00" />
                </div>
              </div>
              <div className="Product-single-container">
                <div className="product-back-container">
                  <PageTitle  productImage={Head11} title="JBL LIVE 500BT - Around-Ear Wireless Headphone - Black" price="126.00" />
                </div>
              </div>
              <div className="Product-single-container">
                <div className="product-back-container">
                  <PageTitle  productImage={Head12} title="Skullcandy Crusher Wireless Over-Ear Headphone - Deep Red" price="126.00" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}