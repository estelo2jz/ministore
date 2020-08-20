import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

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
  }

  productsInCart = productsInCart.map((product, index) => {
    // We have access to this name, price, inCart using the map() statement
    // console.log("My product is ");
    // console.log(product);
    // that what were doing in down here
    return (
      // Frangment is just a placeholder rather using a div
      <Fragment key={index}>
        <div className="test-container">
          <div className="test">
            <div className="product">
              <ion-icon name="close-circle"></ion-icon>
              <img src={productImages(product)} alt="productImages" />
              <span className="sm-hide">{product.name}</span>
            </div>
            <div className="price sm-hide">${product.price},00</div>
            <div className="quantity">
              <ion-icon className="decrease" name="arrow-back-circle-outline"></ion-icon>
                <span>{product.numbers}</span>
              <ion-icon className="increase" name="arrow-forward-circle-outline"></ion-icon>
            </div>
            <div className="total-price">${product.numbers * product.price},00</div>
          </div>
        </div>
      </Fragment>
    );
  });

  return (
    <div className="product-containers">
      <div className="product-header">
        <div className="product-title">PRODUCT</div>
        <div className="price">PRICE</div>
        <div className="quantity">QUANTITY</div>
        <div className="total"><h4>TOTAL</h4></div>
      </div> 
      <div className="products">
        {productsInCart}
      </div>
      <div className="basketTotalContainer">
        <h4 className="basketTotalTitle">{basketProps.name}</h4>
        <h3>Grand Total: </h3>
        <h4 className="basketTotal">${basketProps.cartCost},00</h4>
      </div>
      <NavLink to="/shipping">
        <div className="use-button">
          <p>Continue to Payment</p>
        </div>
      </NavLink>
    </div>
  )
}

const mapStateToProps = state => ({
  basketProps: state.basketState
})

export default connect(mapStateToProps)(Cart);
