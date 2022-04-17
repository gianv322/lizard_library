import React from 'react'
import ReptileCard from './ReptileCard'
import Header from './Header'

function ReptileContainer({reptileArray, setWishListArray, setSearchTerm, searchTerm, setLocationFilter}) {
  console.log("REPTILE ARRAY FROM REPTILE CONTAINER", reptileArray)

  const reptileComponents = reptileArray.map((reptile) => {
    return (
      <ReptileCard 
        setWishListArray={setWishListArray} 
        key = {reptile.id} 
        name = {reptile.name} 
        location = {reptile.location} 
        description = {reptile.description} 
        reptileId={reptile.id}
        image_link={reptile.image_link}
      />
    )
  })
  
    return (
    <div>
      <Header setSearchTerm={setSearchTerm} searchTerm={searchTerm} setLocationFilter={setLocationFilter}/>
      <ul>
          {reptileComponents}
      </ul>
    </div>
  )
}

export default ReptileContainer