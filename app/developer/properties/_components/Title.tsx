"use client";

import React, { useEffect, useState } from 'react'
import { useRouter } from "next/navigation";
import { MdPlayArrow } from 'react-icons/md';

const Title = () => {
    const router = useRouter();

    const [canGoForward, setCanGoForward] = useState(false);

    useEffect(() => {
        const checkForward = () => {
            setCanGoForward(window.history.state?.idx < window.history.length - 1);
        };

        checkForward();
        window.addEventListener("popstate", checkForward);

        return () => window.removeEventListener("popstate", checkForward);
    }, []);

    return (
        <div className='flex gap-4 h-fit'>
            <div className='flex gap-2'>
                <div className='flex items-center justify-center p-1 bg-gray-200 rounded-lg' onClick={() => router.back()}>
                    <MdPlayArrow className='text-xl rotate-180' />
                </div>

                <div className={`flex items-center justify-center p-1 bg-gray-200 rounded-lg ${canGoForward ? "cursor-pointer" : "cursor-not-allowed bg-gray-100"}`} onClick={() => canGoForward && router.forward()}>
                    <MdPlayArrow className={`text-xl ${!canGoForward && "text-gray-500"}`} />
                </div>


            </div>
            <p className='font-bold text-xl'>My Properties</p>
        </div>
    )
}

export default Title