'use client'
import React from 'react';
import Image from "next/image";
import confirm from '../../../public/message.png'
import {useRouter} from "next/navigation";
const Page = () => {
    const router = useRouter()
    const email = sessionStorage.getItem('email')

    const temgotoSuccess = () => {
        router.push('/auth/email-success')
    }
    return (
        <div>
            <div className="flex flex-col justify-center items-center h-screen">
                <div>
                    <Image src={confirm} alt="" className="w-48 h-48"/>
                </div>
                <div className="text-lg font-bold text-blue-400 sm:mt-10">
                    HOLA!
                </div>
                <div className="sm:mt-6">
                    You are all ready to go!
                </div>
                <div>
                    Check your email and confirm to get started.
                </div>
                <div className="font-bold sm:mt-10">
                    Didn't received the verification email?
                </div>
                <div className="text-blue-400 font-bold cursor-pointer" onClick={handleResendEmailClick}>
                    Resend email
                </div>
                <div onClick={temgotoSuccess}>
                    test
                </div>
            </div>
        </div>
    );
};

export default Page;