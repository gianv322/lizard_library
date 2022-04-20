import React from 'react'
import SearchBar from './SearchBar'
import Regions from './Regions'

function Header({setSearchTerm ,searchTerm, setLocationFilter}) {
  return (
    <div>
        <h1 className="header">Lizard Library</h1>
        <Regions setLocationFilter={setLocationFilter}/>
        <SearchBar setSearchTerm={setSearchTerm} searchTerm={searchTerm}/>
    </div>
  )
}

export default Header