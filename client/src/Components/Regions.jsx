import React from 'react'

function Regions({setLocationFilter}) {
  
  function handleFilter(e){
    setLocationFilter(e.target.value)
  
  }
  
  return (
    <div>
        {/* <select onChange={handleFilter}>
            <option value="All">All Regions</option>
            <option value="Northeast">Northeast</option>
            <option value="Southeast">Southeast</option>
            <option value="Northwest">Northwest</option>
            <option value="Southwest">Southwest</option>
        </select> */}
        {/* <img onClick={handleFilter} value="Northeast" src="https://www.freeworldmaps.net/united-states/northeast/neus-physical-small.jpg"/> */}
        <button className="regionbtn" onClick={handleFilter} value="All">All Regions</button>
        <button className="regionbtn" onClick={handleFilter} value="Northeast">Northeast</button>
        <button className="regionbtn" onClick={handleFilter} value="Northwest">Northwest</button>
        <button className="regionbtn" onClick={handleFilter} value="Southeast">Southeast</button>
        <button className="regionbtn" onClick={handleFilter} value="Southwest">Southwest</button>
    </div>
  )
}

export default Regions