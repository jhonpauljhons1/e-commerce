import axios from 'axios';

const API_URL = 'https://ecommerce-json-jwt.onrender.com'; // Ajusta la URL base según sea necesario

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Función para obtener productos
export const getProducts = async () => {
  try {
    const response = await api.get('/items'); 
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};

// Función para obtener detalles de un producto
export const getProductById = async (id) => {
  try {
    const response = await api.get(`/items/${id}`); 
    return response.data;
  } catch (error) {
    console.error(`Error fetching product with id ${id}:`, error);
    throw error;
  }
};

// Función para agregar un producto
export const addProduct = async (product) => {
  try {
    const response = await api.post('/items', product); // Ajusta la ruta según sea necesario
    return response.data;
  } catch (error) {
    console.error('Error adding product:', error);
    throw error;
  }
};

// Función para actualizar un producto
export const updateProduct = async (id, product) => {
  try {
    const response = await api.put(`/items/${id}`, product); // Ajusta la ruta según sea necesario
    return response.data;
  } catch (error) {
    console.error(`Error updating product with id ${id}:`, error);
    throw error;
  }
};

// Función para eliminar un producto
export const deleteProduct = async (id) => {
  try {
    const response = await api.delete(`/items/${id}`); // Ajusta la ruta según sea necesario
    return response.data;
  } catch (error) {
    console.error(`Error deleting product with id ${id}:`, error);
    throw error;
  }
};

// Función para iniciar sesión
export const login = async (credentials) => {
  try {
    const response = await api.post('/auth/login', credentials);
    return response.data;
  } catch (error) {
    console.error('Error logging in:', error);
    throw error;
  }
};

// Función para registrarse
export const signup = async (userData) => {
  try {
    const response = await api.post('/auth/signup', userData);
    return response.data;
  } catch (error) {
    console.error('Error signing up:', error);
    throw error;
  }
};