import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Logo = () => {
    return (
        <div className="">
            <Link href="/">
                <Image src={'/images/Logo.png'} alt="logo" width={500} height={500} className='w-16 h-7' />
            </Link>
        </div>
    )
}

export default Logo