import { Product, ProductsResponse } from '../types';

const API_URL = 'https://dummyjson.com/products';

interface GetProductsParams {
  skip?: number;
  limit?: number;
  sortBy?: string;
  order?: 'asc' | 'desc';
}

export const getProducts = async ({
  skip = 0,
  limit = 11,
  sortBy,
  order = 'asc'
}: GetProductsParams = {}): Promise<Product[]> => {
  try {
    const queryParams = new URLSearchParams({
      limit: limit.toString(),
      skip: skip.toString(),
    });

    if (sortBy) {
      queryParams.append('sortBy', sortBy);
      queryParams.append('order', order);
    }

    const response = await fetch(`${API_URL}?${queryParams.toString()}`);
    const data: ProductsResponse = await response.json();

    return data.products;
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
};

export const getProductById = async (id: number): Promise<Product | null> => {
  try {
    const response = await fetch(`${API_URL}/${id}`);
    const data: Product = await response.json();

    return data;
  } catch (error) {
    console.error('Error fetching product:', error);

    return null;
  }
};
