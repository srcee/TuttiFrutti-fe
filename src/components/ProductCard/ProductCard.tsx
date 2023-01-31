import React from "react";

import { FruitModel } from "src/ts/models/fruit.model";
import { baseUrl } from "src/constants/general";

import "./ProductCard.css";

interface ProductCardProps {
  product: FruitModel;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { name, price, color, unit, quantity, fruit_image } = product;
  const isInStock: boolean = quantity > 0;

  return (
    <div className="product-card">
      <img
        src={`${baseUrl}/uploads/${fruit_image}`}
        alt=""
        className="product-card-image"
      />
      <div className="product-card-name">
        {name}({color})
      </div>
      <div className="product-card-price">
        {price} {unit}
      </div>
      {!isInStock && (
        <div className="product-card-quantity out-of-stock">Out of stock</div>
      )}
    </div>
  );
};

export default ProductCard;
