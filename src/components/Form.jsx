import "../styles/Form.css";
import { useState } from "react";

export const Form = ({ onAddProduct }) => {
  const initialStateForm = {
    title: "",
    category: "",
    price: 0,
    thumbnail: "",
  };

  const [stateForm, setStateForm] = useState(initialStateForm);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value

    setStateForm((prev) => ({
      ...stateForm,
      [name]: value // check for thumbnail value
    })); 
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("submit form...");

    onAddProduct(stateForm);

    setStateForm(initialStateForm);
  };

  return (
    <form className="product-form" onSubmit={handleSubmit}>
      <h2>Add Product</h2>

      <input
        type="text"
        name="title"
        placeholder="Product name"
        value={stateForm.title}
        required={true}
        onChange={handleChange}
      />

      <input
        type="text"
        name="category"
        placeholder="Category"
        value={stateForm.category}
        required={true}
        onChange={handleChange}
      />

      <input
        type="url"
        name="thumbnail"
        placeholder="Thumbnail url"
        value={stateForm.thumbnail}
        onChange={handleChange}
      />

      <input
        type="number"
        name="price"
        placeholder="Price"
        min={0}
        step={0.01}
        value={stateForm.price}
        required={true}
        onChange={handleChange}
      />

      <button type="submit">Add Product</button>
    </form>
  );
};
