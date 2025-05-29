import * as pmAPI from "./PM_API"
const endpoint = "/products/";
import type { Product } from "../types/productType";

export const getProducts = () => {
    return pmAPI.get<Product[]>(endpoint)
}

export const getProductById = (id: number) => {
    return pmAPI.get<Product>(endpoint + id)
}

export const addProduct = (data: Product) => {
    return pmAPI.post<Product>(endpoint, data);
}

export const updateProduct = (data: Partial<Product>) => {
    return pmAPI.post<Partial<Product>>(endpoint + data.id, data);
}
export const deleteProduct = (id: number) => {
    return pmAPI.remove(endpoint + id);
}
