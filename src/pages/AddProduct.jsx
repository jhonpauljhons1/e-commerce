import { useState } from "react";
import axios from "axios";

const AddProduct = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("https://api.escuelajs.co/api/v1/products", { title, price })
      .then(() => alert("Producto agregado"))
      .catch(error => console.error(error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Nombre" required />
      <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Precio" required />
      <button type="submit">Agregar Producto</button>
    </form>
  );
};

export default AddProduct;
