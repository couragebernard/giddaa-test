"use client"

import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation';
import React from 'react'
import { FaArrowLeft } from 'react-icons/fa6'
import { IoIosArrowForward } from 'react-icons/io';

const Header = () => {
    const router = useRouter();

    return (
        <div className='py-5 px-2 lg:px-8 border-b border-b-gray-200'>
            <div className='mb-2 hidden lg:flex gap-1'>
                <Button variant='outline' className='border border-giddaa-500 text-giddaa-500' onClick={() => router.back()}>
                    <FaArrowLeft /> Back
                </Button>
                <p className='font-bold text-2xl'>Creating Estate</p>
            </div>
            <div className='flex gap-3 items-center'>
                <p className='text-[12px]'>Estates</p>
                <IoIosArrowForward className='text-gray-400' />
                <p className='font-semibold text-[14px]'>Create Estate</p>

            </div>

        </div>
    )
}

export default Header