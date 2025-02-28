import MobileHeader from '@/app/_neutral/header/MobileHeader'
import LoginForm from '@/components/neutral/forms/LoginForm'
import { neutralMenuItems } from '@/lib/utils'
import Image from 'next/image'
import React, { Suspense } from 'react'

const page = () => {
  return (
    <>
      <div className='lg:hidden'>
        <MobileHeader menu={neutralMenuItems} />
      </div>

      <div className="">

        <div className="min-h-screen flex flex-col items-center justify-center py-6 px-4">
          <div className="grid lg:grid-cols-2 items-center gap-6 lg:max-w-6xl w-full">
            <div className="border border-gray-300 rounded-lg p-6 lg:max-w-md shadow-[0_2px_22px_-4px_rgba(93,96,127,0.2)] max-md:mx-auto">
              <Suspense>
                <LoginForm />
              </Suspense>
            </div>
            <div className="max-md:mt-8">
              <Image src={`/images/login.svg`} className="w-full max-md:w-4/5 mx-auto block object-cover" width={500} height={500} alt="Login" />
            </div>
          </div>
        </div>
      </div>
    </>

  )
}

export default page