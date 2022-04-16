import React from 'react'
import SearchBar from './SearchBar'

function Header({setSearchTerm}, {searchTerm}) {
  return (
    <div>
        <h1>Lizard Library</h1>
        <SearchBar setSearchTerm={setSearchTerm} searchTerm={searchTerm}/>
    </div>
  )
}

export default Header