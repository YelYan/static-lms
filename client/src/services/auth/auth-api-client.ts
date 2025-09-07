import apiClient from "../api-client";

export const fetchLogin = async (formdata: unknown) => {
        const response = await apiClient.post("/auth/login", formdata);
        if(!response.data) {
            throw new Error("Login failed");
        }
        return response.data;
}
export const fetchRegister = async (formdata: unknown) => {
        const response = await apiClient.post("/auth/register", formdata);
        if(!response.data) {
            throw new Error("Registration failed");
        }
        return response.data;
}
export const fetchLogout = async () => {
        const response = await apiClient.post("/auth/logout");
        if(!response.data) {
            throw new Error("Logout failed");
        }
        return response.data;
}
export const fetchForgotPassword = async (formdata: unknown) => {
        const response = await apiClient.post("/auth/forgot-password", formdata);
        if(!response.data) {
            throw new Error("Login failed");
        }
        return response.data;
}
export const fetchResetPassword = async (formdata: unknown) => {
        const response = await apiClient.post("/auth/reset-password", formdata);
        if(!response.data) {
            throw new Error("Login failed");
        }
        return response.data;
}