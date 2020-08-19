import React, { Component } from 'react';

import '../../styles/product.scss';

import CategoryContainer from './CategoryContainer';
import { PageTitle } from './CategoryContainer';

import Furniture1 from '../../images/furniture/f1.jpg';
import Furniture2 from '../../images/furniture/f2.jpg';
import Furniture3 from '../../images/furniture/f3.jpg';
import Furniture4 from '../../images/furniture/f4.jpg';
import Furniture5 from '../../images/furniture/f5.jpg';
import Furniture6 from '../../images/furniture/f6.jpg';
import Furniture7 from '../../images/furniture/f7.jpg';
import Furniture8 from '../../images/furniture/f8.jpg';
import Furniture9 from '../../images/furniture/f9.jpg';
import Furniture10 from '../../images/furniture/f10.jpg';
import Furniture11 from '../../images/furniture/f11.jpg';
import Furniture12 from '../../images/furniture/f12.jpg';

export default class Furniture extends Component {
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
              <h2>Furnitures</h2>
            </div>
            <div className="product-grid-container">
              <div className="Product-single-container">
                <div className="product-back-container">
                  <PageTitle productImage={Furniture1} title="Ashley Furniture Signature Design - 12 Inch Chime Express Memory Foam Mattress - Bed in a Box - Queen - Firm Comfort Level - White" price="727.00" />
                </div>
              </div>
              <div className="Product-single-container">
                <div className="product-back-container">
                  <PageTitle productImage={Furniture2} title="Walker Edison WE Furniture TV Stand 58 White/Rustic Oak, White/Reclaimed Barnwood" price="745.00" />
                </div>
              </div>
              <div className="Product-single-container">
                <div className="product-back-container">
                  <PageTitle productImage={Furniture3} title="Walker Edison Furniture Company Modern Farmhouse Buffet Sideboard Kitchen Dining Storage Cabinet Living Room, 32 Inch" price="762.00" />
                </div>
              </div>
              <div className="Product-single-container">
                <div className="product-back-container">
                  <PageTitle productImage={Furniture4} title="Glitzhome Rustic Storage Bins Accent Side Table Home Furniture Galvanized Metal Stool Ottoman Seat with Round Wood Lid Set of 2" price="707.00" />
                </div>
              </div>
              <div className="Product-single-container">
                <div className="product-back-container">
                  <PageTitle productImage={Furniture5} title="Walker Edison Furniture Company Modern Round Coffee Accent Table Living Room, Marble/Gold" price="734.00" />
                </div>
              </div>
              <div className="Product-single-container">
                <div className="product-back-container">
                  <PageTitle productImage={Furniture6} title="WE Furniture Minimal Farmhouse Wood Universal Stand for TV's up to 64 Flat Screen Living Room Storage Shelves Entertainment " price="732.00" />
                </div>
              </div>
              <div className="Product-single-container">
                <div className="product-back-container">
                  <PageTitle productImage={Furniture7} title="Walker Edison Furniture Company Industrial Wood and Metal Bar Cabinet with Wheels Wine Glass and Bottle Kitchen Storage" price="706.00" />
                </div>
              </div>
              <div className="Product-single-container">
                <div className="product-back-container">
                  <PageTitle productImage={Furniture8} title="Walker Edison Furniture Company Modern Farmhouse Glass and Wood Stand with Cabinet Doors for TVs up to 80" price="726.00" />
                </div>
              </div>
              <div className="Product-single-container">
                <div className="product-back-container">
                  <PageTitle productImage={Furniture9} title="Computer Desk with Bookshelf, Office Desk, Writing Desk, Wood and Metal Frame, Industrial Style, Study Table Workstation" price="726.00" />
                </div>
              </div>
              <div className="Product-single-container">
                <div className="product-back-container">
                  <PageTitle productImage={Furniture10} title="Flash Furniture High Back Designer Black Mesh Executive Swivel Ergonomic Office Chair with Adjustable Arms" price="726.00" />
                </div>
              </div>
              <div className="Product-single-container">
                <div className="product-back-container">
                  <PageTitle productImage={Furniture11} title="Riforla Vanity Set with Lighted Mirror, Makeup Vanity Dressing Table Dresser Desk with Large Drawer for Bedroom, White Bedroom Furniture" price="726.00" />
                </div>
              </div>
              <div className="Product-single-container">
                <div className="product-back-container">
                  <PageTitle productImage={Furniture12} title="Flash Furniture Mid-Back Black Mesh Swivel Ergonomic Task Office Chair with Flip-Up Arms" price="726.00" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}