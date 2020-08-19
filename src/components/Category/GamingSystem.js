import React, { Component } from 'react';

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

export default class GamingSystem extends Component {
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
              <h2>Gaming System</h2>
            </div>
            <div className="product-grid-container">
              <div className="Product-single-container">
                <div className="product-back-container">
                  <PageTitle productImage={Play1} title="NexiGo 2020 Playstation 4 PS4 Console Holiday Bundle 1TB HDD + Included 3X Games (The Last of Us, God of War, Horizon Zero Dawn)" price="527.00" />
                </div>
              </div>
              <div className="Product-single-container">
                <div className="product-back-container">
                  <PageTitle productImage={Play2} title="PlayStation 4 Slim 1TB Console" price="545.00" />
                </div>
              </div>
              <div className="Product-single-container">
                <div className="product-back-container">
                  <PageTitle productImage={Play3} title="PlayStation 4 Console - 1TB Slim Edition" price="562.00" />
                </div>
              </div>
              <div className="Product-single-container">
                <div className="product-back-container">
                  <PageTitle productImage={Play4} title="PlayStation 4 Slim 1TB Console - Only On PlayStation Bundle" price="507.00" />
                </div>
              </div>
              <div className="Product-single-container">
                <div className="product-back-container">
                  <PageTitle productImage={Play5} title="PlayStation 4 Pro 1TB Console" price="534.00" />
                </div>
              </div>
              <div className="Product-single-container">
                <div className="product-back-container">
                  <PageTitle productImage={Play6} title="PlayStation 4 Slim 1TB Console - Fortnite Bundle" price="532.00" />
                </div>
              </div>
              <div className="Product-single-container">
                <div className="product-back-container">
                  <PageTitle productImage={Xb1} title="Xbox One S 1TB All-Digital Edition Console (Disc-Free Gaming) - Discontinued" price="506.00" />
                </div>
              </div>
              <div className="Product-single-container">
                <div className="product-back-container">
                  <PageTitle productImage={Xb2} title="Newest Flagship Microsoft Xbox One S 1TB HDD Bundle with Two (2X) Wireless Controllers, 1-Month Game Pass Trial, 14-Day Xbox " price="526.00" />
                </div>
              </div>
              <div className="Product-single-container">
                <div className="product-back-container">
                  <PageTitle productImage={Xb3} title="Microsoft Xbox One X 1TB, 4K Ultra HD Gaming Console, Black (Renewed)" price="526.00" />
                </div>
              </div>
              <div className="Product-single-container">
                <div className="product-back-container">
                  <PageTitle productImage={Xb4} title="Microsoft Xbox One X 1Tb Console With Wireless Controller: Xbox One X Enhanced, Hdr, Native 4K, Ultra Hd (Discontinued)" price="526.00" />
                </div>
              </div>
              <div className="Product-single-container">
                <div className="product-back-container">
                  <PageTitle productImage={Xb5} title="Xbox One S 1TB Console - Star Wars Jedi: Fallen Order Bundle" price="526.00" />
                </div>
              </div>
              <div className="Product-single-container">
                <div className="product-back-container">
                  <PageTitle productImage={Xb6} title="Xbox One 500 GB Console - Black [Discontinued]" price="526.00" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}