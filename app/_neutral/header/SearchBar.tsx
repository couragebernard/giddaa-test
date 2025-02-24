import React from 'react'
import { IoSearch } from 'react-icons/io5'


const SearchBar = () => {
    return (
        <div className="w-fit min-w-[70px]">
            <div className="relative flex items-center">
                <IoSearch className='text-giddaa-600 font-bold' />
                <input
                    className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border-none rounded-md pl-3 pr-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-200 hover:border-slate-300 shadow-sm focus:shadow"
                    placeholder="Search for anything."
                />

            </div>
        </div>
    )
}

export default SearchBar