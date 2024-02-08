'use client'
import React, {useEffect, useState} from 'react';
import Image from "next/image";
import email from '../../../public/email.png'
import {useRouter} from "next/navigation";
import {useUser} from "@/hooks/useUser";

const Page = () => {
    const router = useRouter()
    const userEmail = sessionStorage.getItem('email')
    const [matchingUser, setMatchingUser] = useState(null)

    const {useGetUsers} = useUser()
    const {data: users} = useGetUsers()

    useEffect(() => {
        if (users) {
            const foundUser = users.find((user) => user.email === userEmail);
            setMatchingUser(foundUser);
            console.log(matchingUser)
        }
    }, [users, userEmail]);
    const gotoLogin = () => {
        router.push('/auth/sign-in')
    }
    return (
        <div>
            <div className="flex flex-col justify-center items-center h-screen">
                <div>
                    <Image src={email} alt="" className="w-48 h-48" />
                </div>
                <div className="sm:mt-6 font-bold text-lg text-blue-400">
                    Congratulations !
                </div>
                <div className="sm:mt-4">
                    You have confirmed your email successfully and now ready to log in to your account
                </div>
                <div className="sm:mt-6 font-bold cursor-pointer text-blue-400" onClick={gotoLogin}>
                    Go to log in
                </div>
            </div>
        </div>
    );
};

export default Page;