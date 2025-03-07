
import { Route, Routes } from 'react-router-dom';
import { AuthProvider } from "./context/AuthContext";
import { SearchProvider } from "./context/SearchContext";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import AddProduct from "./pages/AddProduct";
import Products from './pages/Products';
import Cart from './components/Cart';
import Footer from './components/Footer';
import './styles/styles.css';

function App() {
  return (
    <AuthProvider>
      <SearchProvider>
        <div className='app-container'>
        <NavBar />
        <main>
         <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/" element={<Products />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/add-product" element={<AddProduct />} />
          <Route path='/cart' element={<Cart/>}/>
          </Routes>
          </main>
          <Footer/>
        </div>
      </SearchProvider>
     
    </AuthProvider>
  );
}

export default App;


