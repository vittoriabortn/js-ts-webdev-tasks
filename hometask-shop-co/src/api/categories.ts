import axios from 'axios';

const API_URL = 'https://dummyjson.com/products';

export const getCategories = async (listit_number: any): Promise<any> => {
    try {
        const response = await axios.get<string[]>(`${API_URL}/categories`, { 
            params: { listit: listit_number } 
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching categories:', error);
        return [];
    }
};