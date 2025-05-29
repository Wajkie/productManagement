import * as pmAPI from "./PM_API"
const endpoint = "/suppliers/";
import type { Supplier } from "../types/supplierType";

export const getSuppliers = () => {
    return pmAPI.get<Supplier[]>(endpoint)
}

export const getSupplierById = (id: number) => {
    return pmAPI.get<Supplier>(endpoint + id)
}

export const addSupplier = (data: Supplier) => {
    return pmAPI.post<Supplier>(endpoint, data);
}

export const updateSupplier = (data: Partial<Supplier>) => {
    return pmAPI.post<Partial<Supplier>>(endpoint + data.id, data);
}
export const deleteSupplier = (id: number) => {
    return pmAPI.remove(endpoint + id);
}
