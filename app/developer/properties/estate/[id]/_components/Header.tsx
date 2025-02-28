"use client"

import GiddaaButton from '@/components/neutral/buttons/GiddaaButton';
import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { useRouter } from 'next/navigation';
import React from 'react'
import { FaArrowLeft, FaPen } from 'react-icons/fa6'
import { IoIosArrowForward, IoIosShareAlt } from 'react-icons/io';
import { IoHomeOutline } from 'react-icons/io5';
import { MdDeleteOutline } from 'react-icons/md';
import { BsQrCodeScan } from "react-icons/bs";
import { TbDotsVertical } from 'react-icons/tb';

type Props = {
    estateName:string
}

const Header = (props:Props) => {
    const {estateName} = props;
    const router = useRouter();


    return (
        <div className='py-5 px-8 border-b border-b-gray-200'>
            <div className='flex justify-between'>
            <div className='flex gap-1 mb-2'>
                <Button variant='outline' className='border border-giddaa-500 text-giddaa-500' onClick={() => router.back()}>
                    <FaArrowLeft /> Back
                </Button>
                <p className='font-bold text-2xl'>{estateName ?? "The View Estate"}</p>
            </div>
            <div className="flex gap-2 items-center">
                <GiddaaButton text='Update Estate' beforeIcon={<FaPen className='text-white' />} />
                <DropdownMenu>
                    <DropdownMenuTrigger>
                        
                        <TbDotsVertical />
                        
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuLabel className='hidden'></DropdownMenuLabel>
                        <DropdownMenuItem className='text-[12px]'><IoHomeOutline /> Add House</DropdownMenuItem>
                        <DropdownMenuItem className='text-[12px]'><IoIosShareAlt /> Share Estate</DropdownMenuItem>
                        <DropdownMenuItem className='text-[12px]'><BsQrCodeScan /> QR Code</DropdownMenuItem>
                        <DropdownMenuItem className='text-red-500 text-[12px]'><MdDeleteOutline /> Delete Estate</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
                
            </div>
            </div>
            


            <div className='flex gap-3 items-center'>
                <p className='text-[12px]'>Estates</p>
                <IoIosArrowForward className='text-gray-400' />
                <p className='font-semibold text-[14px]'>{estateName ?? "The View Estate"}</p>

            </div>

        </div>
    )
}

export default Header