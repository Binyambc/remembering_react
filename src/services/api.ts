import axios from "axios";
import type { Product } from "../types/products";

export const getProducts = async (): Promise<Product[]> => {
    const response = await axios.get("https://fakestoreapi.com/products");
    return response.data;
}

// For a single product we would remove the arary of Product[] 
// and we add the parameter and its type of id: number
export const getProduct = async (id: number): Promise<Product> => {
    const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
    return response.data;
}