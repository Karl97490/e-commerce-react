import "./App.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { ProductDetails } from "./pages/ProductDetails";
import { Layout } from "./pages/Layout";
import { EditPage } from "./pages/EditPage";
import { DashboardPage } from "./pages/DashboardPage";
import productsArr from "./data/products.json";

function App() {
  const [products, setProducts] = useState(productsArr.slice(0, 10));

  const handleDeleteProduct = (productID) => {
    const newList = products.filter((product) => product.id !== productID);
    setProducts(newList);
    console.log(products);
  };

  const handleAddProduct = (newProduct) => {
    const id = Math.max(...products.map((product) => product.id)) + 1;
    newProduct = {
      ...newProduct,
      id,
      thumbnail: newProduct.thumbnail || null,
    };

    setProducts([newProduct, ...products]);
    console.log(newProduct);
  };

  const handleEditProduct = (updateProduct) => {
    console.log("updating from App component...");
    updateProduct = {
      ...updateProduct,
      thumbnail: updateProduct.thumbnail || null,
    };
    const newList = products.map((product) => {
      if (product.id === updateProduct.id) {
        return updateProduct;
      }
      return product;
    });
    console.log(updateProduct);
    // console.log(newList);
    setProducts(newList);
  };

  return (
    <div className="App">
      <Routes>
        <Route element={<Layout />}>
          <Route
            path="/"
            element={
              <DashboardPage
                onDeleteProduct={handleDeleteProduct}
                onAddProduct={handleAddProduct}
                productsArr={products}
              />
            }
          ></Route>
          <Route
            path="/details/:productId"
            element={<ProductDetails productsArr={products} />}
          ></Route>
          <Route
            path="/edit/:productId"
            element={
              <EditPage
                productsArr={products}
                onEditProduct={handleEditProduct}
              />
            }
          ></Route>
          <Route path="/about" element={undefined}></Route>
          <Route path="*" element={undefined}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
