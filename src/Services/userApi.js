import { userInstance } from "../Axios/axiosInstance";

export const register=(values) => {
    return userInstance.post("/register",{...values})
}

export const login=(values) => {
    return userInstance.post("/login",{...values})
}