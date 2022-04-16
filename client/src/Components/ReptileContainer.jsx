import React from 'react'
import ReptileCard from './ReptileCard'

function ReptileContainer({reptileArray}) {
  const reptileComponents = reptileArray.map(reptile => <ReptileCard key = {reptile.id} name = {reptile.name} location = {reptile.location} description = {reptile.description} reptileId={reptile.id} />)
  
    return (
    <div>
        <ul>
            {reptileComponents}
        </ul>
    </div>
  )
}

export default ReptileContainer