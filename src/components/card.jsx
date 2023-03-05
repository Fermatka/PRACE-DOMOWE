import React from "react";
import imgdesk from "../assets/images/image-product-desktop.jpg";

import imgcart from "../assets/images/icon-cart.svg";

const Card = () => {
  return (
    <div className="card">
      <div className="image">
        <img src={imgdesk} alt="perfume image" />
      </div>
      <div className="details">
        <h4 className="category">PERFUME</h4>
        <h2 className="name">Gabrielle Essence Eau De Parfum</h2>
        <p className="description">
          A floral, solar and voluptuous interpretation composed by Olivier
          Polge, Perfumer-Creator for the House of CHANEL.
        </p>

        <div className="price">
          <h2 className="new-price"> $149.99 </h2>
          <h5 className="old-price">$169.99 </h5>
        </div>
        <button className="button">
          <img src={imgcart} />
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Card;
