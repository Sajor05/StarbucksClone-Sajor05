import axios from "axios";
import type { User } from "../interface/Interface";
import type { UserUpdateRequestProps } from "../interface/Interface";

const baseURL = "https://starbucks-clone-backend.vercel.app/api";

const instance = axios.create({
  baseURL,
  withCredentials: true,
});

export const registerRequest = (user: User) => instance.post(`/register`, user);
export const loginRequest = (user: User) => instance.post(`/login`, user);
export const userUpdateRequest = (payload: UserUpdateRequestProps) => {
  return instance.put(`/users/${payload.email}`, payload);
};
export const verifyTokenRequest = () => instance.get(`/verify`);
