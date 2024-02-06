import {useMutation, useQuery} from "@tanstack/react-query";
import {createUser, getUsers} from "../apis/user";

const useUserMutation = () =>{
    return useMutation({
        mutationKey: ['post', 'users'],
        mutationFn: createUser,
    })
}

const useGetUsers = () => {
    return useQuery({
        queryKey: ['get','users'],
        queryFn: getUsers
    })
}

export const useUser = () =>{
    return {
        useUserMutation,
        useGetUsers,
    }
}