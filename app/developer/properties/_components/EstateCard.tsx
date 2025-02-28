import { Card } from '@/components/ui/card'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { EstateType } from '@/types/developer'
import Image from 'next/image'
import React from 'react'
import { MdDeleteOutline } from 'react-icons/md'
import { HiDotsHorizontal } from "react-icons/hi";
import { IoEyeOutline, IoHomeOutline, IoPencil } from 'react-icons/io5'
import Link from 'next/link'

type Props = {
    estate: EstateType
}

const EstateCard = (props: Props) => {
    const { estate } = props
    return (
        <Card className='relative shadow-sm overflow-hidden'>
            <Link href={`/developer/properties/estate/${estate.id}/details`}>
            
            <div className='max-h-[150px] h-[150px] overflow-hidden mb-3'>
            <Image width={500} height={500} alt='Estate Image' src={estate.images.length>0 ? estate.images[0].document : "/images/estate.jpg"} className='w-full' />
            </div>
            
            <div className='text-center space-y-1 px-2'>
                <p className='font-bold text-md'>{estate.name}</p>
                <p className='text-gray-600 truncate text-[13px]'>{estate.description}</p>
            </div>

            <div className='flex justify-end'>
                <DropdownMenu>
                    <DropdownMenuTrigger>
                        <div className='flex items-center justify-center rounded-full py-1 px-1 bg-gray-100 my-2 mr-2'>
                            <HiDotsHorizontal />
                        </div>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuLabel className='hidden'></DropdownMenuLabel>
                        <DropdownMenuItem className='text-[12px]'><IoEyeOutline /> View House</DropdownMenuItem>
                        <DropdownMenuItem className='text-[12px]'><IoPencil /> Edit Estate</DropdownMenuItem>
                        <DropdownMenuItem className='text-[12px]'><IoHomeOutline /> Add House</DropdownMenuItem>
                        <DropdownMenuItem className='text-red-500 text-[12px]'><MdDeleteOutline /> Delete Estate</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>

            <div className='absolute left-2 top-2 border border-giddaa-500 rounded-full bg-giddaa-100 text-sm text-giddaa-500 px-3 py-1'>
                {estate.houseStats.totalHouses ?? 0}{" "}houses
            </div>
            </Link>
        </Card>
    )
}

export default EstateCard