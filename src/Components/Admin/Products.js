import React, { useContext, useRef, useState } from "react";
import { CategoriesContext } from "Contexts/CategoriesContext";
import handlePostProduct from "Utilities/postProducts";
import "Styles/Desktop/Products.css";

function Products() {
  const { categories } = useContext(CategoriesContext);
  const [item, setItem] = useState({
    title: "",
    description: "",
    Price: 0,
    Category: "",
    productImage: null,
  });
  const formRef = useRef(null);
  const handleChanges = (e) => {
    if (e.target.name === "Image") {
      setItem({
        ...item,
        Image: e.target.file[0],
      });
    } else {
      setItem({
        ...item,
        [e.target.name]: e.target.value,
      });
    }
  };
  const addProduct = async (e) => {
    e.preventDefault();
    await handlePostProduct(item);
    setItem({
      title: "",
      description: "",
      Price: 0,
      Category: "",
      productImage: null,
    });
    formRef.current.reset();
  };
  return (
    <React.Fragment>
      <div className="products-Container">
        <h1>Welcome to Products</h1>
        <div className="products-Content">
          <form ref={formRef} className="products-form" onSubmit={addProduct}>
            <input
              type="text"
              name="title"
              required
              placeholder="Title"
              onChange={handleChanges}
            />
            <input
              type="text"
              name="description"
              required
              placeholder="Description"
              onChange={handleChanges}
            />
            <select name="Category" onChange={handleChanges}>
              <option>--select Category</option>
              {categories.map((category) => (
                <option key={category.Number} value={category.Number}>
                  {category.Category}
                </option>
              ))}
            </select>
            <input
              type="text"
              name="Price"
              required
              placeholder="Price"
              onChange={handleChanges}
            />
            <input type="file" name="Image" required onChange={handleChanges} />
            <button type="submit">Add Product</button>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Products;
