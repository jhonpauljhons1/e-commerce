import { Link } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import SearchContext from "../context/SearchContext";
import CartContext from "../context/CartContext";
import logo from "../assets/logo.png"

const NavBar = () => {
  const { user, logout } = useContext(AuthContext);
  const { searchQuery, setSearchQuery } = useContext(SearchContext);
  const { cartItems } = useContext(CartContext); // Proveer valor predeterminado

  return (
    <nav>
       <div className="logo-container">
       <img src={logo} alt="Logo" className="logo" />
       </div>
       <Link to="/">Home</Link>
        <input
        type="text"
        placeholder="Buscar productos..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
       />
       <Link to="/cart">Carrito ({cartItems.length })</Link> {}
       {user ? (
        <>
          <span>{user.name}</span>
          <button onClick={logout}>Logout</button>
          {user.role === "ADMIN" && <Link to="/add-product">Agregar Producto</Link>}
        </>
       ) : (
        <>
          <Link to="/login">Login</Link>
          <Link to="/signup">Signup</Link>
        </>
       )}
       </nav>
  );
};

export default NavBar;
