'use client'
import React, {useEffect, useState} from 'react';
import {useRouter} from "next/navigation";
import {useUser} from "@/hooks/useUser";

const Page = () => {
    const router = useRouter()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [errorEmail, setErrorEmail] = useState(false)
    const [errorMsg , setErrorMsg] = useState(false)

    const isValidEmail = (email) => {
        const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regex.test(String(email).toLowerCase());
    };

    const {useGetUsers} = useUser()
    const {data: users} = useGetUsers()

    const gotoSignUp = () => {
        router.push('/auth/sign-up')
    }

    useEffect(() => {
            router.prefetch('auth/sign-up')
        }, []
    )
    const login = (event) => {
        if (isValidEmail(email)){
            setErrorEmail(false)
        }else {
            setErrorEmail(true)
            setTimeout(() => {
                setErrorEmail(false);
            }, 5000);
        }
        //true is ok for valid
        if (users) {
            const emailExists = users.some((user) => user.email === email);
            const checkPassword = users?.some((user) => user.password === password);
            if (emailExists && errorEmail === false && checkPassword) {
               router.push('/components/getstarted')
            }else{
                setErrorMsg(true)
                setTimeout(() => {
                    setErrorMsg(false);
                }, 5000);
            }
        }
    }
    return (
        <div>
            {errorEmail &&
                <div>
                    <div className="toast toast-top toast-center">
                        <div className="alert alert-error">
                            <span>Please Enter Valid Email.</span>
                        </div>
                    </div>
                </div>}
            {errorMsg &&
                <div>
                    <div className="toast toast-top toast-right">
                        <div className="alert alert-error text-white">
                            <span>Email or Password not match</span>
                        </div>
                    </div>
                </div>}
            <div className="flex-center sm:mr-80 sm:ml-80 sm:mt-24 sm:mb-24 shadow-lg">
                <div className="w-1/2">
                </div>
                <div className="w-1/2 pb-32">
                    <div className="font-bold sm:text-3xl sm:pt-28 sm:ml-10 font-sans">
                        Welcome back!
                    </div>
                    <div className="sm:mt-2 sm:ml-10 text-xs">
                        Please enter your details
                    </div>
                    <div className="sm:mt-10 sm:pl-10 sm:pr-10">
                        <div className="relative h-11">
                            <input placeholder="Email"
                                   className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100"
                                   type="email"
                                   onChange={e => setEmail(e.target.value)}
                                   value={email}/>
                            <label
                                className="after:content[''] pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                Email
                            </label>
                        </div>
                        <div className="relative h-11 mt-4">
                            <input placeholder="Password"
                                   type="password"
                                   className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100"
                                   onChange={e => setPassword(e.target.value)}
                                   value={password}/>
                            <label
                                className="after:content[''] pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                Password
                            </label>
                        </div>
                        <div
                            className="flex-center sm:mt-4">
                            <button
                                className="custom-btn bg-black cursor-pointer rounded-sm font-bold text-white"
                                onClick={login}>Login
                            </button>
                        </div>
                        <div className="text-sm sm:mt-10 flex-center">
                            Didn't have account? <span
                            className="sm:ml-2 underline hover:text-blue-600 cursor-pointer font-bold"
                            onClick={gotoSignUp}>Create account</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page;