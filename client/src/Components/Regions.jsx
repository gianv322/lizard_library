import React from 'react'

function Regions({setLocationFilter}) {
  
  function handleFilter(e){
    setLocationFilter(e.target.value)
  
  }
  
  return (
    <div>
        <select onChange={handleFilter}>
            <option value="All">All Regions</option>
            <option value="Northeast">Northeast</option>
            <option value="Southeast">Southeast</option>
            <option value="Northwest">Northwest</option>
            <option value="Southwest">Southwest</option>

        </select>
    </div>
  )
}

export default Regions