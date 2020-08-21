import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import '../styles/cart.scss';

// Book Images
import book1 from '../images/book/book1.jpg';
import book2 from '../images/book/bokk2.jpg';
import book3 from '../images/book/book3.jpg';
import book4 from '../images/book/book4.jpg';
import book5 from '../images/book/book5.jpg';
import book6 from '../images/book/book6.jpg';
import book7 from '../images/book/book7.jpg';
import book8 from '../images/book/book8.jpg';
import book9 from '../images/book/book9.jpg';
import book10 from '../images/book/book10.jpg';
import book11 from '../images/book/book11.jpg';
import book12 from '../images/book/book12.jpg';

// Headphone Images
import headphone1 from '../images/headphone/head1.jpg';
import headphone2 from '../images/headphone/head2.jpg';
import headphone3 from '../images/headphone/head3.jpg';
import headphone4 from '../images/headphone/head4.jpg';
import headphone5 from '../images/headphone/head5.jpg';
import headphone6 from '../images/headphone/head6.jpg';
import headphone7 from '../images/headphone/head7.jpg';
import headphone8 from '../images/headphone/head8.jpg';
import headphone9 from '../images/headphone/head9.jpg';
import headphone10 from '../images/headphone/head10.jpg';
import headphone11 from '../images/headphone/head11.jpg';
import headphone12 from '../images/headphone/head12.jpg';

// GamingPC Images
import gamingpc1 from '../images/pc/pc1.jpg';
import gamingpc2 from '../images/pc/pc2.jpg';
import gamingpc3 from '../images/pc/pc3.jpg';
import gamingpc4 from '../images/pc/pc4.jpg';
import gamingpc5 from '../images/pc/pc5.jpg';
import gamingpc6 from '../images/pc/pc6.jpg';
import gamingpc7 from '../images/pc/pc7.jpg';
import gamingpc8 from '../images/pc/pc8.jpg';
import gamingpc9 from '../images/pc/pc9.jpg';
import gamingpc10 from '../images/pc/pc10.jpg';
import gamingpc11 from '../images/pc/pc11.jpg';
import gamingpc12 from '../images/pc/pc12.jpg';

// Laptop Images
import laptop1 from '../images/laptop/laptop1.jpg';
import laptop2 from '../images/laptop/laptop2.jpg';
import laptop3 from '../images/laptop/laptop3.jpg';
import laptop4 from '../images/laptop/laptop4.jpg';
import laptop5 from '../images/laptop/laptop5.jpg';
import laptop6 from '../images/laptop/laptop6.jpg';
import laptop7 from '../images/laptop/laptop7.jpg';
import laptop8 from '../images/laptop/laptop8.jpg';
import laptop9 from '../images/laptop/laptop9.jpg';
import laptop10 from '../images/laptop/laptop10.jpg';
import laptop11 from '../images/laptop/laptop11.jpg';
import laptop12 from '../images/laptop/laptop12.jpg';

// Iphone Images
import iphone1 from '../images/iphone/i1.jpg';
import iphone2 from '../images/iphone/i2.jpg';
import iphone3 from '../images/iphone/i3.jpg';
import iphone4 from '../images/iphone/i4.jpg';
import iphone5 from '../images/iphone/i5.jpg';
import iphone6 from '../images/iphone/i6.jpg';
import iphone7 from '../images/iphone/i7.jpg';
import iphone8 from '../images/iphone/i8.jpg';
import iphone9 from '../images/iphone/i9.jpg';
import iphone10 from '../images/iphone/i10.jpg';
import iphone11 from '../images/iphone/i11.jpg';
import iphone12 from '../images/iphone/i12.jpg';

// Samsung Images
import samsung1 from '../images/samsung/s1.jpg';
import samsung2 from '../images/samsung/s2.jpg';
import samsung3 from '../images/samsung/s3.jpg';
import samsung4 from '../images/samsung/s4.jpg';
import samsung5 from '../images/samsung/s5.jpg';
import samsung6 from '../images/samsung/s6.jpg';
import samsung7 from '../images/samsung/s7.jpg';
import samsung8 from '../images/samsung/s8.jpg';
import samsung9 from '../images/samsung/s9.jpg';
import samsung10 from '../images/samsung/s10.jpg';
import samsung11 from '../images/samsung/s11.jpg';
import samsung12 from '../images/samsung/s12.jpg';

// Tablet Images
import tablet1 from '../images/tablet/t1.jpg';
import tablet2 from '../images/tablet/t2.jpg';
import tablet3 from '../images/tablet/t3.jpg';
import tablet4 from '../images/tablet/t4.jpg';
import tablet5 from '../images/tablet/t5.jpg';
import tablet6 from '../images/tablet/t6.jpg';
import tablet7 from '../images/tablet/t7.jpg';
import tablet8 from '../images/tablet/t8.jpg';
import tablet9 from '../images/tablet/t9.jpg';
import tablet10 from '../images/tablet/t10.jpg';
import tablet11 from '../images/tablet/t11.jpg';
import tablet12 from '../images/tablet/t12.jpg';

// Camera Images
import camera1 from '../images/camera/c1.jpg';
import camera2 from '../images/camera/c2.jpg';
import camera3 from '../images/camera/c3.jpg';
import camera4 from '../images/camera/c4.jpg';
import camera5 from '../images/camera/c5.jpg';
import camera6 from '../images/camera/c6.jpg';
import camera7 from '../images/camera/c7.jpg';
import camera8 from '../images/camera/c8.jpg';
import camera9 from '../images/camera/c9.jpg';
import camera10 from '../images/camera/c10.jpg';
import camera11 from '../images/camera/c11.jpg';
import camera12 from '../images/camera/c12.jpg';

// Furniture Images
import furniture1 from '../images/furniture/f1.jpg';
import furniture2 from '../images/furniture/f2.jpg';
import furniture3 from '../images/furniture/f3.jpg';
import furniture4 from '../images/furniture/f4.jpg';
import furniture5 from '../images/furniture/f5.jpg';
import furniture6 from '../images/furniture/f6.jpg';
import furniture7 from '../images/furniture/f7.jpg';
import furniture8 from '../images/furniture/f8.jpg';
import furniture9 from '../images/furniture/f9.jpg';
import furniture10 from '../images/furniture/f10.jpg';
import furniture11 from '../images/furniture/f11.jpg';
import furniture12 from '../images/furniture/f12.jpg';

// Furniture Images
import gamingsystem1 from '../images/gaming/ps1.jpg';
import gamingsystem2 from '../images/gaming/ps2.jpg';
import gamingsystem3 from '../images/gaming/ps3.jpg';
import gamingsystem4 from '../images/gaming/ps4.jpg';
import gamingsystem5 from '../images/gaming/ps5.jpg';
import gamingsystem6 from '../images/gaming/ps6.jpg';
import gamingsystem7 from '../images/gaming/xb1.jpg';
import gamingsystem8 from '../images/gaming/xb2.jpg';
import gamingsystem9 from '../images/gaming/xb3.jpg';
import gamingsystem10 from '../images/gaming/xb4.jpg';
import gamingsystem11 from '../images/gaming/xb5.jpg';
import gamingsystem12 from '../images/gaming/xb6.jpg';

// Toys Images
import toy1 from '../images/toys/to1.jpg';
import toy2 from '../images/toys/to2.jpg';
import toy3 from '../images/toys/to3.jpg';
import toy4 from '../images/toys/to4.jpg';
import toy5 from '../images/toys/to5.jpg';
import toy6 from '../images/toys/to6.jpg';
import toy7 from '../images/toys/to7.jpg';
import toy8 from '../images/toys/to8.jpg';
import toy9 from '../images/toys/to9.jpg';
import toy10 from '../images/toys/to10.jpg';
import toy11 from '../images/toys/to11.jpg';
import toy12 from '../images/toys/to12.jpg';

// Tools Images
import tool1 from '../images/toolss/tool1.jpg';
import tool2 from '../images/toolss/tool2.jpg';
import tool3 from '../images/toolss/tool3.jpg';
import tool4 from '../images/toolss/tool4.jpg';
import tool5 from '../images/toolss/tool5.jpg';
import tool6 from '../images/toolss/tool6.jpg';
import tool7 from '../images/toolss/tool7.jpg';
import tool8 from '../images/toolss/tool8.jpg';
import tool9 from '../images/toolss/tool9.jpg';
import tool10 from '../images/toolss/tool10.jpg';
import tool11 from '../images/toolss/tool11.jpg';
import tool12 from '../images/toolss/tool12.jpg';

function Cart({basketProps}) {
  // console.log(basketProps);

  let productsInCart = [];
 
  Object.keys(basketProps.products).forEach( function(item) {
    // console.log(item);
    // console.log(basketProps.products[item].inCart);
    if(basketProps.products[item].inCart) {
      productsInCart.push(basketProps.products[item])
    }
    // console.log(productsInCart);
  })

  const productImages = (product) => {
    // Book Images
    if (product.tagName === 'book1') {
      return book1;
    } else if(product.tagName === 'book2') {
      return book2;
    } else if(product.tagName === 'book3') {
      return book3;
    } else if(product.tagName === 'book4') {
      return book4;
    } else if(product.tagName === 'book5') {
      return book5;
    } else if(product.tagName === 'book6') {
      return book6;
    } else if(product.tagName === 'book7') {
      return book7;
    } else if(product.tagName === 'book8') {
      return book8;
    } else if(product.tagName === 'book9') {
      return book9;
    } else if(product.tagName === 'book10') {
      return book10;
    } else if(product.tagName === 'book11') {
      return book11;
    } else if(product.tagName === 'book12') {
      return book12;
    }
    // Headphone Images
      else if(product.tagName === 'headphone1') {
      return headphone1;
    } else if(product.tagName === 'headphone2') {
      return headphone2;
    } else if(product.tagName === 'headphone3') {
      return headphone3;
    }  else if(product.tagName === 'headphone4') {
      return headphone4;
    } else if(product.tagName === 'headphone5') {
      return headphone5;
    } else if(product.tagName === 'headphone6') {
      return headphone6;
    } else if(product.tagName === 'headphone7') {
      return headphone7;
    } else if(product.tagName === 'headphone8') {
      return headphone8;
    } else if(product.tagName === 'headphone9') {
      return headphone9;
    } else if(product.tagName === 'headphone10') {
      return headphone10;
    } else if(product.tagName === 'headphone11') {
      return headphone11;
    } else if(product.tagName === 'headphone12') {
      return headphone12;
    }
    // GamingPC Images
    else if(product.tagName === 'gamingpc1') {
      return gamingpc1;
    } else if(product.tagName === 'gamingpc2') {
      return gamingpc2;
    } else if(product.tagName === 'gamingpc3') {
      return gamingpc3;
    }  else if(product.tagName === 'gamingpc4') {
      return gamingpc4;
    } else if(product.tagName === 'gamingpc5') {
      return gamingpc5;
    } else if(product.tagName === 'gamingpc6') {
      return gamingpc6;
    } else if(product.tagName === 'gamingpc7') {
      return gamingpc7;
    } else if(product.tagName === 'gamingpc8') {
      return gamingpc8;
    } else if(product.tagName === 'gamingpc9') {
      return gamingpc9;
    } else if(product.tagName === 'gamingpc10') {
      return gamingpc10;
    } else if(product.tagName === 'gamingpc11') {
      return gamingpc11;
    } else if(product.tagName === 'gamingpc12') {
      return gamingpc12;
    }
    // Laptop Images
    else if(product.tagName === 'laptop1') {
      return laptop1;
    } else if(product.tagName === 'laptop2') {
      return laptop2;
    } else if(product.tagName === 'laptop3') {
      return laptop3;
    }  else if(product.tagName === 'laptop4') {
      return laptop4;
    } else if(product.tagName === 'laptop5') {
      return laptop5;
    } else if(product.tagName === 'laptop6') {
      return laptop6;
    } else if(product.tagName === 'laptop7') {
      return laptop7;
    } else if(product.tagName === 'laptop8') {
      return laptop8;
    } else if(product.tagName === 'laptop9') {
      return laptop9;
    } else if(product.tagName === 'laptop10') {
      return laptop10;
    } else if(product.tagName === 'laptop11') {
      return laptop11;
    } else if(product.tagName === 'laptop12') {
      return laptop12;
    }
    // Iphones Images
    else if(product.tagName === 'iphone1') {
      return iphone1;
    } else if(product.tagName === 'iphone2') {
      return iphone2;
    } else if(product.tagName === 'iphone3') {
      return iphone3;
    }  else if(product.tagName === 'iphone4') {
      return iphone4;
    } else if(product.tagName === 'iphone5') {
      return iphone5;
    } else if(product.tagName === 'iphone6') {
      return iphone6;
    } else if(product.tagName === 'iphone7') {
      return iphone7;
    } else if(product.tagName === 'iphone8') {
      return iphone8;
    } else if(product.tagName === 'iphone9') {
      return iphone9;
    } else if(product.tagName === 'iphone10') {
      return iphone10;
    } else if(product.tagName === 'iphone11') {
      return iphone11;
    } else if(product.tagName === 'iphone12') {
      return iphone12;
    }
    // Samsung Images
    else if(product.tagName === 'samsung1') {
      return samsung1;
    } else if(product.tagName === 'samsung2') {
      return samsung2;
    } else if(product.tagName === 'samsung3') {
      return samsung3;
    }  else if(product.tagName === 'samsung4') {
      return samsung4;
    } else if(product.tagName === 'samsung5') {
      return samsung5;
    } else if(product.tagName === 'samsung6') {
      return samsung6;
    } else if(product.tagName === 'samsung7') {
      return samsung7;
    } else if(product.tagName === 'samsung8') {
      return samsung8;
    } else if(product.tagName === 'samsung9') {
      return samsung9;
    } else if(product.tagName === 'samsung10') {
      return samsung10;
    } else if(product.tagName === 'samsung11') {
      return samsung11;
    } else if(product.tagName === 'samsung12') {
      return samsung12;
    }
    // Tablets Images
    else if(product.tagName === 'tablet1') {
      return tablet1;
    } else if(product.tagName === 'tablet2') {
      return tablet2;
    } else if(product.tagName === 'tablet3') {
      return tablet3;
    }  else if(product.tagName === 'tablet4') {
      return tablet4;
    } else if(product.tagName === 'tablet5') {
      return tablet5;
    } else if(product.tagName === 'tablet6') {
      return tablet6;
    } else if(product.tagName === 'tablet7') {
      return tablet7;
    } else if(product.tagName === 'tablet8') {
      return tablet8;
    } else if(product.tagName === 'tablet9') {
      return tablet9;
    } else if(product.tagName === 'tablet10') {
      return tablet10;
    } else if(product.tagName === 'tablet11') {
      return tablet11;
    } else if(product.tagName === 'tablet12') {
      return tablet12;
    }
    // Camera Images
    else if(product.tagName === 'camera1') {
      return camera1;
    } else if(product.tagName === 'camera2') {
      return camera2;
    } else if(product.tagName === 'camera3') {
      return camera3;
    }  else if(product.tagName === 'camera4') {
      return camera4;
    } else if(product.tagName === 'camera5') {
      return camera5;
    } else if(product.tagName === 'camera6') {
      return camera6;
    } else if(product.tagName === 'camera7') {
      return camera7;
    } else if(product.tagName === 'camera8') {
      return camera8;
    } else if(product.tagName === 'camera9') {
      return camera9;
    } else if(product.tagName === 'camera10') {
      return camera10;
    } else if(product.tagName === 'camera11') {
      return camera11;
    } else if(product.tagName === 'camera12') {
      return camera12;
    }
    // Funiture Images
    else if(product.tagName === 'furniture1') {
      return furniture1;
    } else if(product.tagName === 'furniture2') {
      return furniture2;
    } else if(product.tagName === 'furniture3') {
      return furniture3;
    }  else if(product.tagName === 'furniture4') {
      return furniture4;
    } else if(product.tagName === 'furniture5') {
      return furniture5;
    } else if(product.tagName === 'furniture6') {
      return furniture6;
    } else if(product.tagName === 'furniture7') {
      return furniture7;
    } else if(product.tagName === 'furniture8') {
      return furniture8;
    } else if(product.tagName === 'furniture9') {
      return furniture9;
    } else if(product.tagName === 'furniture10') {
      return furniture10;
    } else if(product.tagName === 'furniture11') {
      return furniture11;
    } else if(product.tagName === 'furniture12') {
      return furniture12;
    }
    // GamingSystem Images
    else if(product.tagName === 'gamingsystem1') {
      return gamingsystem1;
    } else if(product.tagName === 'gamingsystem2') {
      return gamingsystem2;
    } else if(product.tagName === 'gamingsystem3') {
      return gamingsystem3;
    }  else if(product.tagName === 'gamingsystem4') {
      return gamingsystem4;
    } else if(product.tagName === 'gamingsystem5') {
      return gamingsystem5;
    } else if(product.tagName === 'gamingsystem6') {
      return gamingsystem6;
    } else if(product.tagName === 'gamingsystem7') {
      return gamingsystem7;
    } else if(product.tagName === 'gamingsystem8') {
      return gamingsystem8;
    } else if(product.tagName === 'gamingsystem9') {
      return gamingsystem9;
    } else if(product.tagName === 'gamingsystem10') {
      return gamingsystem10;
    } else if(product.tagName === 'gamingsystem11') {
      return gamingsystem11;
    } else if(product.tagName === 'gamingsystem12') {
      return gamingsystem12;
    }
    // Toys Images
    else if(product.tagName === 'toy1') {
      return toy1;
    } else if(product.tagName === 'toy2') {
      return toy2;
    } else if(product.tagName === 'toy3') {
      return toy3;
    }  else if(product.tagName === 'toy4') {
      return toy4;
    } else if(product.tagName === 'toy5') {
      return toy5;
    } else if(product.tagName === 'toy6') {
      return toy6;
    } else if(product.tagName === 'toy7') {
      return toy7;
    } else if(product.tagName === 'toy8') {
      return toy8;
    } else if(product.tagName === 'toy9') {
      return toy9;
    } else if(product.tagName === 'toy10') {
      return toy10;
    } else if(product.tagName === 'toy11') {
      return toy11;
    } else if(product.tagName === 'toy12') {
      return toy12;
    }
    // Tools Images
    else if(product.tagName === 'tool1') {
      return tool1;
    } else if(product.tagName === 'tool2') {
      return tool2;
    } else if(product.tagName === 'tool3') {
      return tool3;
    }  else if(product.tagName === 'tool4') {
      return tool4;
    } else if(product.tagName === 'tool5') {
      return tool5;
    } else if(product.tagName === 'tool6') {
      return tool6;
    } else if(product.tagName === 'tool7') {
      return tool7;
    } else if(product.tagName === 'tool8') {
      return tool8;
    } else if(product.tagName === 'tool9') {
      return tool9;
    } else if(product.tagName === 'tool10') {
      return tool10;
    } else if(product.tagName === 'tool11') {
      return tool11;
    } else if(product.tagName === 'tool12') {
      return tool12;
    }
  }

  productsInCart = productsInCart.map((product, index) => {
    // We have access to this name, price, inCart using the map() statement
    // console.log("My product is ");
    // console.log(product);
    // that what were doing in down here
    return (
      // Frangment is just a placeholder rather using a div
      <Fragment key={index}>
        <div className="cart-header-outer-container">
          <div className="cart-header-inner-container">
            <div className="cart-flex-container">
              <div  className="cart-name-image-container">
                <div className="name-image-container">
                  <div className="cart-centering-items">
                    <p className="cart-icon"><ion-icon name="close-circle"></ion-icon></p>
                  </div>
                </div>
                <div className="name-image-container">
                  <div className="cart-centering-items">
                    <p className="cart-image-container"><img src={productImages(product)} alt="productImages" /></p>                
                  </div>
                </div>  
                <div className="name-image-container">
                  <div className="cart-centering-items">
                    <p><span className="cart-product-name">{product.name}</span>   </p>             
                  </div>
                </div>
              </div>
              <div className="cart-price-container">
                <div className="cart-product-price">
                  <div className="cart-centering-items">
                    <p>${product.price},00</p>
                  </div>
                </div>
                <div className="quantity">
                  <div className="cart-centering-items">
                    <p><span>{product.numbers}</span></p>
                  </div>

                </div>
                <div className="total-price">
                  <div className="cart-centering-items">
                    <p>${product.numbers * product.price},00</p>
                  </div>
                </div>
              </div>
            </div>
            </div>
        </div>
      </Fragment>
    );
  });

  return (
    <div className="cart-outer-product-containers">
      <div className="cart-inner-product-containers">
        <div className="cart-product-header">
          <div className="cart-product-title">
            <div className="cart-product-title-container">
              <p>PRODUCT</p>
            </div>
          </div>
          <div className="cart-price-total-container">
            <div className="cart-price">
              <p>PRICE</p>
            </div>
            <div className="cart-quantity">
              <p>QUANTITY</p>
            </div>
            <div className="cart-total">
              <p><strong>TOTAL</strong></p>
            </div>
          </div>
        </div> 
        <div className="cart-basketTotalContainer">
          <div className="cart-products">
            {productsInCart}
          </div>
          <div>
            <h4 className="cart-basketTotalTitle">{basketProps.name}</h4>
          </div>
          <div>
            <h3>Grand Total: </h3>
          </div>
          <div>
            <h4 className="cart-basketTotal">${basketProps.cartCost},00</h4>
          </div>
        </div>
        <NavLink to="/shipping">
          <div className="cart-use-button">
            <p>Continue to Payment</p>
          </div>
        </NavLink>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  basketProps: state.basketState
})

export default connect(mapStateToProps)(Cart);
