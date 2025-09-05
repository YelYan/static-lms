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
        console.log("Response from register API:", response);
        if(!response.data) {
            throw new Error("Registration failed");
        }
        return response.data;
}