import Image from 'next/image'
import React from 'react'


function FloatingAd() {
    return (
        <div className='hidden lg:flex absolute top-0 right-0 z-50 bg-[#F9FAFB] max-w-[300px] h-[110px] gap-3 p-2 gradient-border'>
            <div>
                <Image src="/images/Waving_Hand.png" alt="waving hand" width={500} height={400} className='w-10 h-8 rounded-md' />
            </div>
            <div>
                <h1 className='font-semibold'>You&apos;re now on Gidda <span className='text-giddaa-400'>Buy</span></h1>
                <p className='text-[13px]/8'>Find and buy your dream home on various purchase plans</p>
            </div>

        </div>
    )
}

export default FloatingAd