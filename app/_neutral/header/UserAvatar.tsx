import Image from 'next/image'
import React from 'react'
import { MdArrowDropDown } from 'react-icons/md'

const UserAvatar = () => {
  return (
    <div className='hidden lg:flex gap-4 lg:items-center'>
        <div className='p-2 flex gap-2 items-center rounded-full border border-slate-300'>
            <div className='w-4 h-4'>
                <Image width={100} height={100} src={`/images/usd_flag.png`} className='w-4 h-4' alt='usd' />
            </div>
            <p className='font-bold text-black text-[12px]'>USD</p>
            <MdArrowDropDown className="text-lg" />
        </div>

        <div className='w-8 h-8'>
                <Image width={100} height={100} src={`/images/user_dp.png`} className='w-8 h-8' alt='usd' />
            </div>


    </div>
  )
}

export default UserAvatar