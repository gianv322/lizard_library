import React, {useState} from 'react'

function SearchBar({setSearchTerm}, {searchTerm}) {

    const [searchInput, setSearchInput] = useState('')
  return (
    <div>
        <form>
            <input value = {searchTerm} onChange = {(e) => setSearchTerm(e.target.value)}></input>
        </form>

    </div>
  )
}

export default SearchBar