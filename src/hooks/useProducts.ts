import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

// Define types for the products and categories
interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
}

type Category = string;

// API call to fetch products
const fetchProducts = async (): Promise<Product[]> => {
  const response = await axios.get('https://fakestoreapi.com/products');
  return response.data;
};

// API call to fetch categories
const fetchCategories = async (): Promise<Category[]> => {
  const response = await axios.get('https://fakestoreapi.com/products/categories');
  return response.data;
};

// Custom hook to fetch products and categories
export const useProducts = () => {
  // Fetch products with useQuery
  const { data: products, isLoading: isLoadingProducts, error: productError } = useQuery<Product[], Error>({
    queryKey: ['products'],   // Query key for caching
    queryFn: fetchProducts    // The function to fetch products
  });

  // Fetch categories with useQuery
  const { data: categories, isLoading: isLoadingCategories, error: categoryError } = useQuery<Category[], Error>({
    queryKey: ['categories'], // Query key for caching
    queryFn: fetchCategories  // The function to fetch categories
  });

  return {
    products,
    categories,
    isLoading: isLoadingProducts || isLoadingCategories,
    errors: { productError, categoryError },
  };
};


export default useProducts;

