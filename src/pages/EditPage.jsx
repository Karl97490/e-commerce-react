import { useState } from "react";
import "../styles/EditPage.css";
import { Link, useActionData, useNavigate, useParams } from "react-router-dom";

export const EditPage = ({ productsArr, onEditProduct }) => {
  const { productId } = useParams();
  const navigate = useNavigate();

  const product = productsArr.find(
    (product) => product.id === Number(productId),
  );

  const initialStateForm = {
    id: product.id,
    title: product.title,
    brand: product.brand ?? "",
    category: product.category,
    sku: product.sku ?? "",
    price: product.price,
    stock: product.stock ?? 0,
    description: product.description ?? "",
    thumbnail: product.thumbnail ?? "",
    minimumOrderQuantity: product.minimumOrderQuantity ?? 0,
  };

  const [stateForm, setStateForm] = useState(initialStateForm);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitting...");
    onEditProduct(stateForm);
    navigate("/");
  };

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setStateForm((prev) => ({
      ...stateForm,
      [name]: value,
    }));
  };

  return (
    <section className="edit-product-page">
      <div className="edit-product-container">
        <header className="edit-header">
          <h1>Edit Product</h1>
          <p>Update product information.</p>
        </header>

        <form className="edit-form" onSubmit={handleSubmit}>
          <div className="form-section">
            <h2>Product Information</h2>

            <div className="form-grid">
              <div className="form-group">
                <label>Product Name</label>
                <input
                  type="text"
                  name="title"
                  value={stateForm.title}
                  onChange={handleChange}
                  required={true}
                />
              </div>

              <div className="form-group">
                <label>Brand</label>
                <input
                  type="text"
                  name="brand"
                  value={stateForm.brand}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label>Category</label>
                <input
                  type="text"
                  name="category"
                  value={stateForm.category}
                  onChange={handleChange}
                  required={true}
                />
              </div>

              <div className="form-group">
                <label>SKU</label>
                <input
                  type="text"
                  name="sku"
                  value={stateForm.sku}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label>Price</label>
                <input
                  type="number"
                  name="price"
                  min={0}
                  step={0.01}
                  value={stateForm.price}
                  onChange={handleChange}
                  required={true}
                />
              </div>

              <div className="form-group">
                <label>Stock</label>
                <input
                  type="number"
                  name="stock"
                  min={0}
                  value={stateForm.stock}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label>Thumbnail</label>
                <input
                  type="url"
                  name="thumbnail"
                  placeholder="https://..."
                  value={stateForm.thumbnail}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label>Minimum Order Quantity</label>
                <input
                  type="number"
                  name="minimumOrderQuantity"
                  value={stateForm.minimumOrderQuantity}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-group">
              <label>Description</label>
              <textarea
                rows={6}
                name="description"
                value={stateForm.description}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-actions">
            <Link to="/">
              <button type="button" className="btn-cancel">
                Cancel
              </button>
            </Link>

            <button type="submit" className="btn-save">
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};
