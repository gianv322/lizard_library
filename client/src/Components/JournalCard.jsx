import React from 'react'

function JournalCard(props) {
  // console.log(props);
  return (
    <div>
        <p>{props.reptile_name}</p>
        <p>{props.title}</p>
        <p>{props.message}</p>
        <p>{props.date}</p>
    </div>
  )
}

export default JournalCard