import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {
    bg: "green" | "white",
    width?:number;
    height?:number;
}

const Logo = (props:Props) => {
    return (
        <div className="">
            <Link href="/">
                <Image src={`${props.bg === "white" ? '/images/Logo.png' : '/images/Logo_green_bg.png'}`} alt="logo" width={500} height={500} className={`w-${props.width ?? 16} h-${props.height ?? 7}`} />
            </Link>
        </div>
    )
}

export default Logo