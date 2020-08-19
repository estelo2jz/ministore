import React, { Component } from 'react';

import '../../styles/product.scss';

import CategoryContainer from './CategoryContainer';
import { PageTitle } from './CategoryContainer';

import Tool1 from '../../images/toolss/tool1.jpg';
import Tool2 from '../../images/toolss/tool2.jpg';
import Tool3 from '../../images/toolss/tool3.jpg';
import Tool4 from '../../images/toolss/tool4.jpg';
import Tool5 from '../../images/toolss/tool5.jpg';
import Tool6 from '../../images/toolss/tool6.jpg';
import Tool7 from '../../images/toolss/tool7.jpg';
import Tool8 from '../../images/toolss/tool8.jpg';
import Tool9 from '../../images/toolss/tool9.jpg';
import Tool10 from '../../images/toolss/tool10.jpg';
import Tool11 from '../../images/toolss/tool11.jpg';
import Tool12 from '../../images/toolss/tool12.jpg';

export default class Tools extends Component {
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
              <h2>Tools</h2>
            </div>
            <div className="product-grid-container">
              <div className="Product-single-container">
                <div className="product-back-container">
                  <PageTitle productImage={Tool1} title="41-Piece Tool Set General Household Home Repair Hand Tools Kit with Plastic Toolbox Storage Case" price="27.00" />
                </div>
              </div>
              <div className="Product-single-container">
                <div className="product-back-container">
                  <PageTitle productImage={Tool2} title="Cartman 148-Piece Tool Set - General Household Hand Tool Kit with Plastic Toolbox Storage Case" price="45.00" />
                </div>
              </div>
              <div className="Product-single-container">
                <div className="product-back-container">
                  <PageTitle productImage={Tool3} title="DEWALT 20V MAX Cordless Drill Combo Kit, 2-Tool (DCK240C2)" price="62.00" />
                </div>
              </div>
              <div className="Product-single-container">
                <div className="product-back-container">
                  <PageTitle productImage={Tool4} title="BLACK+DECKER 20V MAX Cordless Drill Combo Kit, 4-Tool (BD4KITCDCRL)" price="34.00" />
                </div>
              </div>
              <div className="Product-single-container">
                <div className="product-back-container">
                  <PageTitle productImage={Tool5} title="HORUSDY 100-Piece Magnetic Screwdriver Set with Plastic Racking" price="14.00" />
                </div>
              </div>
              <div className="Product-single-container">
                <div className="product-back-container">
                  <PageTitle productImage={Tool6} title="Qooltek Multipurpose Laser Level Laser Line 8 feet Measure Tape Ruler Adjustable" price="12.00" />
                </div>
              </div>
              <div className="Product-single-container">
                <div className="product-back-container">
                  <PageTitle productImage={Tool7} title="CARTMAN Orange 39-Piece Tool Set - General Household Hand Tool Kit" price="32.00" />
                </div>
              </div>
              <div className="Product-single-container">
                <div className="product-back-container">
                  <PageTitle productImage={Tool8} title="DOWELL 10-22 AWG Wire Stripper Cutter Wire Stripping Tool And Multi" price="43.00" />
                </div>
              </div>
              <div className="Product-single-container">
                <div className="product-back-container">
                  <PageTitle productImage={Tool9} title="DOWELL 24 Pieces Homeowner Tool Set, Home Repair Hand Tool Kit with Portable Tool Bag" price="43.00" />
                </div>
              </div>
              <div className="Product-single-container">
                <div className="product-back-container">
                  <PageTitle productImage={Tool10} title="DOWELL 10 Piece Small Tool Kit,Mini Portable Tool Set,Home Repair Hand Tool Kit with Plastic Tool box Storage Case" price="43.00" />
                </div>
              </div>
              <div className="Product-single-container">
                <div className="product-back-container">
                  <PageTitle productImage={Tool11} title="DOWELL Small Homeowner Tool Set 9 Pieces General Household Small Hand Tool Kit with Plastic Tool box Storage Case" price="43.00" />
                </div>
              </div>
              <div className="Product-single-container">
                <div className="product-back-container">
                  <PageTitle productImage={Tool12} title="DOWELL 49 Piece Tool Set,Home Repair Hand Tool Kit with Plastic Tool Box Storage Case" price="43.00" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}