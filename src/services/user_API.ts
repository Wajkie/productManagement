import type { NewUser, User } from "../types/userType"
import * as pmAPI from "./PM_API"

const endpoint = "/users/"

export const RegisterUser = (userData: NewUser) => {
    return pmAPI.post<NewUser>(endpoint, userData)
}

export const LoginUser = async (userData: NewUser) => {
    const users = await pmAPI.get<User[]>(endpoint);
    const FoundUser = users.find((user) => user.password === userData.password && user.username === userData.username)
    if (FoundUser) { return FoundUser; }
    else {
        throw new Error("User not found")
    }
}