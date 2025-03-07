import { useEffect, useState } from "react";
import { getProducts } from "../services/Api"; 

const Products = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null); // Para manejar errores

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        if (Array.isArray(data)) {
          // Validar que los datos son un array
          setProducts(data);
        } else {
          // Si los datos no tienen el formato esperado
          console.error("Formato inesperado de los datos:", data);
          setError("Los datos obtenidos no son válidos.");
        }
      } catch (err) {
        console.error("Error al obtener productos:", err);
        setError("Hubo un problema al cargar los productos. Inténtalo de nuevo más tarde.");
        // Simular productos en caso de error
        setProducts([
          { id: 1, title: "Producto A", price: 100 },
          { id: 2, title: "Producto B", price: 200 },
        ]);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <h1>Productos</h1>
      {error && <p style={{ color: "red" }}>{error}</p>} {/* Mostrar el error si existe */}
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h3>{product.title}</h3>
            <p>Precio: ${product.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
