import React from 'react'
import { LuBell, LuClock2 } from 'react-icons/lu';
import { MdArrowDropDown, MdOutlinePlayCircle } from 'react-icons/md';
import { PiVideo } from "react-icons/pi";
import { IoIosShareAlt } from "react-icons/io";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel,  DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { SlDirections } from "react-icons/sl";


const HeaderIcons = () => {
    return (
        <div className='flex gap-3'>


            <DropdownMenu>
                <DropdownMenuTrigger>
                    <div className='flex items-center gap-2 rounded-full py-2 px-3 bg-gray-100'>
                        <PiVideo />
                        <p className='font-semibold text-giddaa-500 text-sm'>How it works</p>
                        <MdArrowDropDown className="text-xl transition-transform" />
                    </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuLabel className='hidden'></DropdownMenuLabel>
                    <DropdownMenuItem><SlDirections /> Product Tour & Guide</DropdownMenuItem>
                    <DropdownMenuItem><MdOutlinePlayCircle /> Video Tutorial</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>


            <div className='bg-gray-100 p-3 rounded-full flex items-center justify-center text-giddaa-500'>
                <LuBell />
            </div>
            <div className='bg-gray-100 p-3 rounded-full flex items-center justify-center text-giddaa-500'>
                <LuClock2 />
            </div>
            <div className='bg-gray-100 p-3 rounded-full flex items-center justify-center text-giddaa-500'>
                <IoIosShareAlt />
            </div>

        </div>
    )
}

export default HeaderIcons