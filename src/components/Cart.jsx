import  { useContext } from 'react';
import CartContext from '../context/CartContext';
import "../styles/styles.css";


const Cart = () => {
  const { cartItems = [], removeFromCart } = useContext(CartContext);

  console.log(cartItems); // verificar si los productos se estan agregando al carrito
  const handlePurchase = () => {
    alert("Gracias por su compra ");
  }

  return (
    <div>
      <h1>Carrito de Compras</h1>
      <ul>
        <div className='products-grid'>
        {cartItems.length > 0 ? (
          cartItems.map((product) => (
            <li key={product.id} className='card'> {/* Usar `product.id` como clave */}
              <img src={product.image} alt={product.title} className="product-image" />
            <h3>{product.product_name}</h3>
            <p>Precio: ${product.price}</p>
              <button onClick={() => removeFromCart(product.id)}>Eliminar</button>
            </li>
          ))
        ) : (
          <p>El carrito está vacío</p>
        )}
        </div>
      </ul>
      {cartItems.length > 0 && (
        <button onClick={handlePurchase} className='purchase-button'> Comprar</button>
      )}
    </div>
  );
};

export default Cart;
