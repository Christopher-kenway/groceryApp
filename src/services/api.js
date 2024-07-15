import axios from 'axios';

const apiClient = axios.create({
  baseURL: ' https://timbu-get-all-products.reavdev.workers.dev',
  headers: {
    'Content-Type': 'application/json',
  },
});

const getProducts = async ({ organizationId, page = 1, size = 10, reverseSort = false }) => {
  try {
    const response = await apiClient.get('/products', {
      params: {
        organization_id: organizationId,
        page,
        size,
        reverse_sort: false,
        Apikey: 'e790be541e1a47e4b12d8f64e0b3cea320240712140504545283',
        Appid: 'C0JB1FBYKLUZL0R',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};

const getProductById = async (productId, organizationId) => {
  try {
    const response = await apiClient.get(`/products/{product_id}`, {
      params: {
        organization_id: organizationId,
        Apikey: 'e790be541e1a47e4b12d8f64e0b3cea320240712140504545283',
        Appid: 'C0JB1FBYKLUZL0R',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching product:', error);
    throw error;
  }
};

export { getProducts, getProductById };
