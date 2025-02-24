import Logo from '@/components/neutral/logo/Logo'
import React from 'react'
import SearchBar from './SearchBar'
import Menu from './Menu'


const Header = () => {
  return (
    <div className='flex items-center justify-between lg:max-w-7xl mx-auto py-2'>
      <Logo />
      <SearchBar />
      <Menu />
        
    </div>
  )
}

export default Header