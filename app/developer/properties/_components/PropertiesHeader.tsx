import React from 'react'
import Title from './Title'
import SearchBar from './SearchBar'
import HeaderIcons from './HeaderIcons'

const PropertiesHeader = () => {
  return (
    <div className='w-full border-b border-b-gray-200 py-5 px-8'>
      <div className=' flex justify-between'>
        <Title />
        <SearchBar />
        <HeaderIcons />
      </div>
      <div>

      </div>
    </div>

  )
}

export default PropertiesHeader