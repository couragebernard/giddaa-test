import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {
    bg: "green" | "white",
    width?:number | string;
    height?:number | string;
}

const Logo = (props:Props) => {
    return (
        <div className="">
            <Link href="/">
                <Image src={`${props.bg === "white" ? '/images/Logo.png' : '/images/Logo_green_bg.svg'}`} alt="logo" width={200} height={200} className={`w-${props.width ?? "fit"} h-${props.height ?? 7}`} />
            </Link>
        </div>
    )
}

export default Logo