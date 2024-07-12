import axios from 'axios';

const API_BASE_URL = 'https://api.timbu.cloud';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

const getProducts = async ({
  organizationId,
  page = 1,
  size = 10,
  searchQuery = '',
  // Add other filters as needed (e.g., category, supplier, etc.)
}) => {
  try {
    const response = await apiClient.get('/products', {
      params: {
        organization_id: organizationId,
        page,
        size,
        search: searchQuery, // Adjust search parameter if needed
        // Add other filter parameters as required
        Appid: process.env.NEXT_PUBLIC_APP_ID,
        Apikey: process.env.NEXT_PUBLIC_API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    // Handle errors 
    console.error('Error fetching products:', error);
    throw error; // Re-throw error for component to handle
  }
};

const getProductById = async (productId, organizationId) => {
  try {
    const response = await apiClient.get(`/products/${productId}`, {
      params: {
        organization_id: organizationId,
        APP_ID: process.env.NEXT_PUBLIC_APP_ID,
        API_KEY: process.env.NEXT_PUBLIC_API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching product:', error);
    throw error;
  }
};

export { getProducts, getProductById };
