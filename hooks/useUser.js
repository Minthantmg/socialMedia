import {useMutation, useQuery} from "@tanstack/react-query";
import {createUser, getUsers} from "../apis/user";

const useUserMutation = () =>{
    return useMutation({
        mutationKey: ['post', 'users'],
        mutationFn: createUser,
        onError: (error) => {
            console.error("Error creating user:", error)
        },
    })
}

const useGetUsers = () => {
    return useQuery({
        queryKey: ['get','users'],
        queryFn: getUsers,
        onError: (error) => {
            console.error("Error fetching users:", error)
        },
    })
}

export const useUser = () =>{
    return {
        useUserMutation,
        useGetUsers,
    }
}