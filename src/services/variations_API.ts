import * as pmAPI from "./PM_API"
const endpoint = "/variations/";
import type { Variation } from "../types/variationTypes";

export const getVariations = () => {
    return pmAPI.get<Variation[]>(endpoint)
}

export const getVariationById = (id: number) => {
    return pmAPI.get<Variation>(endpoint + id)
}

export const addVariation = (data: Variation) => {
    return pmAPI.post<Variation>(endpoint, data);
}

export const updateVariation = (data: Partial<Variation>) => {
    return pmAPI.post<Partial<Variation>>(endpoint + data.id, data);
}
export const deleteVariation = (id: number) => {
    return pmAPI.remove(endpoint + id);
}