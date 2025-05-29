import instance from "./axiosInstance"

export const get = async <T>(endpoint: string) => {
    const res = await instance.get<T>(endpoint);
    return res.data
}

export const post = async <T>(endpoint: string, payload: Partial<T>) => {
    const res = await instance.post<T>(endpoint, payload);
    return res.data
}
export const update = async <T>(endpoint: string, payload: Partial<T>) => {
    const res = await instance.patch<T>(endpoint, payload);
    return res.data
}

export const remove = async <T>(endpoint: string) => {
    const res = await instance.delete<T>(endpoint);
    return res.data
}