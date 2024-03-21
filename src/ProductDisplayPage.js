// ProductDisplayPage.js
import React from "react";
import ProductDetails from "./ProductDetails";
import ProductImages from "./ProductImages";
import "./ProductDisplayPage.css";

const ProductDisplayPage = () => {
  return (
    <>
      <div className="product-display-container">
        <div className="left-section">
          <ProductImages />
        </div>
        <div className="right-section">
          <ProductDetails />
        </div>
      </div>

    </>
  );
};

export default ProductDisplayPage;
