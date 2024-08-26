import { api } from "./api";

export interface LoginData {
    email: string;
    password: string;
}

interface LoginResponse {
    token: string;
    user: {
        id: string;
        email: string;
        name: string;
        role: string;
    };
}


export const login = async (data: LoginData): Promise<LoginResponse> => {
    const response = await api.post<LoginResponse>('/auth/login', data)
    const token = response.data.token
    localStorage.setItem('token', token)

    return response.data

}

export const register = async (data: LoginData): Promise<LoginResponse> => {
    const response = await api.post<LoginResponse>('/auth/register', data)    
    
    return response.data

}