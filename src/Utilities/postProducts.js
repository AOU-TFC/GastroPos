import { postProduct } from "Services/productServices";

async function handlePostProduct(item) {
  try {
    const { status, data } = await postProduct(item);
    if (status === 201) {
      alert(data.message);
    } else {
      console.warn(`Unexpected status code: ${status}`);
    }
  } catch (error) {
    console.error(`Error posting Product: ${error}`);
  }
}

export default handlePostProduct;
