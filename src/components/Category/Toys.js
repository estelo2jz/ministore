import React, { Component } from 'react';

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

export default class Toys extends Component {
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
              <h2>Toys</h2>
            </div>
            <div className="product-grid-container">
              <div className="Product-single-container">
                <div className="product-back-container">
                  <PageTitle productImage={Toy1} title="NEW DJI Mavic Air 2 Fly More Combo - Drone Quadcopter UAV with 48MP Camera 4K Video 1/2 CMOS Sensor 3-Axis Gimbal 34min Flight Time " price="27.00" />
                </div>
              </div>
              <div className="Product-single-container">
                <div className="product-back-container">
                  <PageTitle productImage={Toy2} title="Magic: The Gathering Double Masters Draft Booster (24 Packs) & 2 Box Toppers" price="45.00" />
                </div>
              </div>
              <div className="Product-single-container">
                <div className="product-back-container">
                  <PageTitle productImage={Toy3} title="LEGO Technic Lamborghini Sián FKP 37 (42115), Building Project for Adults, Build and Display This Distinctive Model" price="62.00" />
                </div>
              </div>
              <div className="Product-single-container">
                <div className="product-back-container">
                  <PageTitle productImage={Toy4} title="HONEY JOY Inflatable Bounce House, Kids Castle Jumping Bouncer W/Slide &Splash Pool, Includes Carry Bag, Repairing Kit, Stakes, Ocean Balls" price="72.00" />
                </div>
              </div>
              <div className="Product-single-container">
                <div className="product-back-container">
                  <PageTitle productImage={Toy5} title="WARHAMMER 40000: INDOMITUS" price="54.00" />
                </div>
              </div>
              <div className="Product-single-container">
                <div className="product-back-container">
                  <PageTitle productImage={Toy6} title="SereneLife Trampoline with Net Enclosure – ASTM Approved, Stable, Strong Kids and Adult Trampoline with Net – Outdoor Trampoline for Kids" price="42.00" />
                </div>
              </div>
              <div className="Product-single-container">
                <div className="product-back-container">
                  <PageTitle productImage={Toy7} title="Best Choice Products 12V 3.7 MPH 2-Seater Licensed Land Rover Ride On w/ Parent Remote Control, MP3 Player - Pink" price="66.00" />
                </div>
              </div>
              <div className="Product-single-container">
                <div className="product-back-container">
                  <PageTitle productImage={Toy8} title="Kid Trax Electric Kids Luxury Range Rover Car Ride-On Toy, 6 Volt Battery, Remote Control, Ages 3-5 Years, Silver (KT1550I)" price="50.00" />
                </div>
              </div>
              <div className="Product-single-container">
                <div className="product-back-container">
                  <PageTitle productImage={Toy9} title="Wow World of Watersports Super Slide" price="50.00" />
                </div>
              </div>
              <div className="Product-single-container">
                <div className="product-back-container">
                  <PageTitle productImage={Toy10} title="BABLE 2 Seats Kids Electric Car 12V Ride On Car Truck with Remote Control, Kids Car Ride on Toy Motorized Vehicles with USB/MP3 Music" price="50.00" />
                </div>
              </div>
              <div className="Product-single-container">
                <div className="product-back-container">
                  <PageTitle productImage={Toy11} title="Magic: The Gathering Zendikar Rising Collector Booster Box | 12 Packs (180 Cards)" price="50.00" />
                </div>
              </div>
              <div className="Product-single-container">
                <div className="product-back-container">
                  <PageTitle productImage={Toy12} title="Magic: The Gathering Double Masters Draft Booster Box | 24 Packs (360 Cards) | 2 Box Toppers" price="50.00" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}