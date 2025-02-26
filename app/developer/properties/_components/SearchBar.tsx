import React from 'react'
import { IoSearch } from 'react-icons/io5'


const SearchBar = () => {
    return (

        <form className="max-w-[300px] w-fit">
            <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <IoSearch className='text-giddaa-600 font-bold' />
                </div>
                <input type="search" className="block w-full py-2 px-3 ps-10 text-sm text-gray-900 border border-gray-200 rounded-lg" placeholder="Search for anything..." />
            </div>
        </form>
    )
}

export default SearchBar