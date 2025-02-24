import LoginForm from '@/components/neutral/forms/LoginForm'
import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div className="font-[sans-serif]">
      <div className="min-h-screen flex fle-col items-center justify-center py-6 px-4">
        <div className="grid md:grid-cols-2 items-center gap-6 max-w-6xl w-full">
          <div className="border border-gray-300 rounded-lg p-6 max-w-md shadow-[0_2px_22px_-4px_rgba(93,96,127,0.2)] max-md:mx-auto">
            <LoginForm />
          </div>
          <div className="max-md:mt-8">
            <Image src={`/images/login.svg`} className="w-full max-md:w-4/5 mx-auto block object-cover" width={500} height={500} alt="Login" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default page