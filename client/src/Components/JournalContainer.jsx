import React from 'react'
import JournalCard from './JournalCard'

function JournalContainer({journalArray}) {
  // console.log(journalArray)
  const journalComponents = journalArray.map(journal => <JournalCard key = {journal.id} title = {journal.title} message = {journal.message} date = {journal.date} reptile_name = {journal.reptile_name} reptile_image = {journal.reptile_image}/>)
    return (
    <div>
        <ul>
          <h1 className="header">Journals</h1>
            {journalComponents}
        </ul>
    </div>
  )
}

export default JournalContainer