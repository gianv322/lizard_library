import React, {useState} from 'react'

function SearchBar({setSearchTerm}, {searchTerm}) {

    const [searchInput, setSearchInput] = useState('')
  return (
    <div>
      <h4>Search for a Reptile!</h4>
      <form innertext="Search for a reptile!" action="" class="search-bar">
	<input type="search" name="search" pattern=".*\S.*" required value={searchTerm} onChange = {(e) => setSearchTerm(e.target.value)}/>
	<button class="regionbtn" type="submit">
		<span>Search</span>
	</button> </form>


    </div>
  )
}

export default SearchBar