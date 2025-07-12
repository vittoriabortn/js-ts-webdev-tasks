import axios from 'axios';

const API_URL = 'https://dummyjson.com/products';

export const getCategories = async (): Promise<string[]> => {
    try {
      const response = await axios.get<string[]>(`${API_URL}/categories`);
      return response.data;
    } catch (error) {
      console.error('Error fetching categories:', error);
      return [];
    }
  }