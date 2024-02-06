'use client'
import React, {useState} from 'react';
import {useRouter} from "next/navigation";
import {useUser} from "@/hooks/useUser";

const Login = () => {
    const router = useRouter()
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const {useUserMutation} = useUser()
    const {useGetUsers} = useUser()
    const {mutateAsync: createUser} = useUserMutation()
    const {data:users} = useGetUsers()
    console.log(users)

    const handleSubmit = async (e) => {
        e.preventDefault()
        await createUser({name: username, email, password})
        setUsername('')
        setEmail('')
        setPassword('')
        router.push('sign-in')
    }

    return (
        <div>
            <div className="flex sm:mr-80 sm:ml-80 sm:mt-32 sm:mb-32">
                <div className="w-1/2 shadow-lg rounded-l-lg">
                </div>
                <form method="POST" className="sm:w-1/2 bg-white shadow-lg" onSubmit={handleSubmit}>
                    <div className="font-bold sm:text-3xl sm:pt-20 sm:ml-10 font-sans">
                        Welcome!
                    </div>
                    <div className="sm:mt-2 sm:ml-10 text-xs">
                        Sign up to get account
                    </div>
                    <div className="sm:mt-10 sm:pl-10 sm:pr-10 sm:mb-10">
                        <div className="relative h-11">
                            <input
                                type="text"
                                id="username"
                                className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100"
                                placeholder="John"
                                onChange={e => setUsername(e.target.value)}
                                required={true}
                                value={username}
                            />
                            <label
                                htmlFor="username"
                                className="after:content[''] pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                Username
                            </label>
                        </div>
                        <div className="relative h-11 mt-4">
                            <input
                                type="email"
                                id="email"
                                className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100"
                                placeholder="stone"
                                onChange={e => setEmail(e.target.value)}
                                required={true}
                                value={email}
                            />
                            <label
                                htmlFor="email"
                                className="after:content[''] pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                Email
                            </label>
                        </div>
                        <div className="relative h-11 mt-4">
                            <input
                                type="password"
                                id="password"
                                className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100"
                                placeholder="12345"
                                onChange={e => setPassword(e.target.value)}
                                required={true}
                                value={password}
                            />
                            <label
                                htmlFor="password"
                                className="after:content[''] pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                Password
                            </label>
                        </div>
                        <div className="flex justify-center items-center mt-10">
                            <button className="sm:w-32 bg-black py-2 rounded-full text-center font-bold text-white">
                                Sign Up
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;