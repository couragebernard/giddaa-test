import React from 'react'
import PropertiesHeader from './_components/PropertiesHeader'
import EstateCards from './_components/EstateCards'


const page = () => {
    return (
        <div>
            <div className='hidden lg:block'>
                <PropertiesHeader />
            </div>
            <EstateCards />

        </div>
    )
}

export default page