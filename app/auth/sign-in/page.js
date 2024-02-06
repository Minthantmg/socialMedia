import React from 'react';

const Page = () => {
    return (
        <div>
            <div className="flex sm:mr-80 sm:ml-80 sm:mt-32 sm:mb-32">
                <div className="w-1/2 shadow-lg rounded-l-lg">
                </div>
                <div className="w-1/2 shadow-lg pb-32 rounded-r-lg">
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
                                   type="email"/>
                            <label
                                className="after:content[''] pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                Email
                            </label>
                        </div>
                        <div className="relative h-11 mt-4">
                            <input placeholder="Password"
                                   type="password"
                                   className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100"/>
                            <label
                                className="after:content[''] pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                Password
                            </label>
                        </div>
                        <div
                            className="w-full bg-black mt-5 py-2 rounded-full text-center flex justify-center items-center">
                            <button className="rounded-sm font-bold text-white">Login</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page;