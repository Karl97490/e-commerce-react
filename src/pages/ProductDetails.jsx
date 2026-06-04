import { NavLink, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "../styles/ProductDetails.css";

export const ProductDetails = ({ productsArr }) => {
  const { productId } = useParams();

  const product = productsArr.find(
    (product) => product.id === Number(productId),
  );

  return (
    <section className="page">
      <div className="details-card">
        <div className="details-image-container">
          <img
            src={product.thumbnail}
            alt={product.name}
            className="details-image"
          />
        </div>

        <div className="details-content">
          <div className="details-tags">
            {product.tags ? (
              product.tags.map((tag) => {
                return <span className="tags">{tag}</span>;
              })
            ) : (
              <span className="category">{product.category}</span>
            )}
          </div>

          <h1>{product.title}</h1>

          <p className="details-price">${product.price}</p>

          {product.availabilityStatus === "Low Stock" && (
            <p className="details-stock low-stock">
              Low stock: {product.stock}
            </p>
          )}
          {product.availabilityStatus === "In Stock" && (
            <p className="details-stock in-stock">In stock: {product.stock}</p>
          )}
          {product.availabilityStatus === "Out of Stock" && (
            <p className="details-stock out-of-stock">Out of stock</p>
          )}

          <div className="details-description">
            <h3>Description</h3>

            <p>{product.description}</p>
          </div>

          <div className="details-actions">
            <Link to="/">
              <button className="btn btn-back">Back</button>
            </Link>
            <NavLink to={`/edit/${product.id}`}>
              <button className="btn btn-edit">Edit</button>
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
};
