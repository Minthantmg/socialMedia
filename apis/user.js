import {axiosInstance} from "@/utils/axiosInstance";


export const createUser = async ({name, email, password,verified}) => {
    try {
        const res = await axiosInstance.post('/users', {name, email, password,verified})
        return res.data
    } catch (e) {
        throw e;
    }
}

export const getUsers = async () => {
    try{
        const res = await axiosInstance.get('/users')
        return res.data
    }catch (e) {
        throw e
    }
}