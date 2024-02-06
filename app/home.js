'use client'
import React from 'react';
import {useRouter} from "next/navigation";

const Home = () => {
    const router = useRouter()
    const gotoLogin = () => {
        router.push('auth/sign-up')
    }
    return (
        <div>
            <div>
                <button onClick={gotoLogin}>click me</button>
            </div>
        </div>
    );
};

export default Home;