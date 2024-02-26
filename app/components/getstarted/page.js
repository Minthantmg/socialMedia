'use client'
import React, {useState} from 'react';

const Page = () => {
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        // Check if the file is an image with the desired format
        if (file && /\.(jpe?g|png|gif)$/.test(file.name)) {
            setSelectedFile(file);
        } else {
            alert('Please select a valid image file (JPG, PNG, JPEG, or GIF)');
        }
    };
    return (
        <div>
            <div className="flex-column w-full h-screen">
                <div>
                    <div className="title">
                        Welcome! Let create your profile
                    </div>
                    <p className="sm:mt-4">Let others get to know you better!
                    </p>
                    <div className="subtitle sm:mt-10">
                        Add an avatar
                    </div>
                    <div className="flex sm:mt-4">
                        <div className="w-20 h-20 rounded-full bg-gray-300">
                            {selectedFile && (
                                <img src={URL.createObjectURL(selectedFile)} alt="Selected Image" className="rounded-full w-full h-full"/>
                            )}
                        </div>
                        <div className="flex-center">
                            <label htmlFor="file-upload">
                                <div className="border border-gray-300 rounded-2xl px-4 py-2 font-bold text-sm sm:ml-6 cursor-pointer">
                                    Choose image
                                </div>
                            </label>
                            <input
                                id="file-upload"
                                type="file"
                                accept="image/*"
                                onChange={handleFileChange}
                                style={{ display: 'none' }}
                            />
                        </div>
                    </div>
                    <div className="flex justify-end items-center sm:mt-16">
                        <div>
                            <button className="custom-btn bg-black text-white">Continue</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page;