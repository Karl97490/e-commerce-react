import { useState } from "react";
import { ProductCard } from "../components/ProductCard";
import { Form } from "../components/Form";

export const DashboardPage = ({ onDeleteProduct, onAddProduct, productsArr }) => {
  return (
    <div className="page">
      {/* <div className="btns-container">
        <button>Filter by</button>
      </div> */}
      <Form onAddProduct={onAddProduct} />
      <div className="products-container grid">
        {productsArr.map((product) => {
          return (
            <ProductCard
              key={product.id}
              product={product}
              onDeleteProduct={onDeleteProduct}
            />
          );
        })}
      </div>
    </div>
  );
};
