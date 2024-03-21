// ProductImages.js
import React from 'react';
import { FaRegHeart } from "react-icons/fa";
import './ProductImages.css'; // Import CSS file

const ProductImages = () => {
  return (
    <div className="product-images-container">
      {/* Big image with heart icon */}
      <div className="big-image-container">
        <img src="https://images.unsplash.com/photo-1608501078713-8e445a709b39?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Big" />
        <FaRegHeart  className="heart-icon" />
      </div>

      {/* Small images */}
      <div className="small-images">
        <img src="https://images.unsplash.com/photo-1622737133809-d95047b9e673?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Small1" />
        <img src="https://plus.unsplash.com/premium_photo-1671229456411-659ff6049231?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Small2" />
        <img src="https://plus.unsplash.com/premium_photo-1675703550945-2fe113ac43ec?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Small3" />
        <img src="https://plus.unsplash.com/premium_photo-1666273175617-e8d2834f4fc0?q=80&w=1893&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Small4" />
      </div>

      {/* Buttons */}
      <div className="buttons">
        <button>Add to Cart</button>
        <button>Buy Now</button>
      </div>
    </div>
  );
};

export default ProductImages;
