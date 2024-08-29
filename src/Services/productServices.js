import axios from "axios";

async function postProduct(item) {
  const route = process.env.REACT_APP_API_ROUTE;

  const formData = new FormData();
  formData.append("title", item.title);
  formData.append("description", item.description);
  formData.append("Category", item.Category);
  formData.append("Price", item.Price);
  formData.append("productImage", item.Image);

  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  };
  const response = await axios.post(`${route}/products`, formData, config);
  return response;
}

export { postProduct };
