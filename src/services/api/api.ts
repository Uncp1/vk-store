export const getItems = async () => {
  try {
    const response = await fetch('https://fakestoreapi.com/products?limit=5');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Failed to fetch items:', error);
    return [];
  }
};
