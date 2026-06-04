import "../styles/ProductCard.css";
import { NavLink } from "react-router-dom";

export const ProductCard = ({ product, onDeleteProduct }) => {
  return (
    <article className="product-card">
      <NavLink to={`/details/${product.id}`}>
        <div className="product-image-container">
          <img
            src={product.thumbnail}
            alt={`${product.brand} image`}
            className="product-image"
          />
        </div>
      </NavLink>
      <div className="product-content">
        <h3 className="product-title">{product.title}</h3>
       
        <span className="product-category">{product.category}</span>

        <div className="product-details">
          <p className="product-price">${product.price}</p>

          <p className="product-stock">Stock: {product.stock}</p>
        </div>

        <div className="product-actions">
          <NavLink to={`/edit/${product.id}`}>
            <button className="btn btn-edit">Edit</button>
          </NavLink>
          
          <button
            className="btn btn-delete"
            onClick={() => onDeleteProduct(product.id)}
          >
            Delete
          </button>
        </div>
      </div>
    </article>
  );
};

{
  /* <div className="product-card">
      <div className="product-image">
        <img src={product.thumbnail} alt="Product image" />
      </div>
      <div className="product-infos">
        <p id="title">
          <strong>{product.title}</strong>
        </p>
        <p id="tags">{product.tags[1]}</p>
        <p id="price">${product.price}</p>
      </div>
    </div> */
}
