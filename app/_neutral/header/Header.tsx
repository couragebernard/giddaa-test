import Logo from '@/components/neutral/logo/Logo'
import React from 'react'
import SearchBar from './SearchBar'
import Menu from './Menu'
import UserAvatar from './UserAvatar'


const Header = () => {
  return (
    <div className='border-b border-slate-200'>
      <div className='flex items-center justify-between lg:max-w-7xl mx-auto py-2 '>
        <Logo />
        <SearchBar />
        <Menu />
        <UserAvatar />
      </div>


    </div>
  )
}

export default Header