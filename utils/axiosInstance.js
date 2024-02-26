import axios from "axios";

export const axiosInstance = axios.create({
    baseURL:"https://social-server-pearl.vercel.app/",
})
