import {useMutation, useQuery} from "@tanstack/react-query";
import {createUser, getUsers, updateUserVerified} from "../apis/user";

const useUserMutation = () => {
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
        queryKey: ['get', 'users'],
        queryFn: getUsers,
        onError: (error) => {
            console.error("Error fetching users:", error)
        },
    })
}

const useUpdateUserDetail = (name) => {
    return useMutation({
        mutationKey: ['put', 'user', name],
        mutationFn: updateUserVerified(name),
        onError: (error) => {
            console.error("Error updating user:", error)
        },
    })
}

export const useUser = () => {
    return {
        useUserMutation,
        useGetUsers,
    }
}