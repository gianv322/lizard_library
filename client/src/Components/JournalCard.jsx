import React from 'react'

function JournalCard(props) {
  // console.log(props);
  return (
    <div className="reptilecard">
        <h3 className="name">{props.reptile_name}</h3>
        {props.reptile_image && <img height={200} width={200} src={props.reptile_image} />}
        <br></br>
        <a>{props.title}</a>
        <br></br>
        <a>{props.message}</a>
        <br></br>
        <a>{props.date}</a>
    </div>
  )
}

export default JournalCard