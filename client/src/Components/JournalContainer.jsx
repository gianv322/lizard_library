import React from 'react'
import JournalCard from './JournalCard'

function JournalContainer({journalArray}) {
  // console.log(journalArray)
  const journalComponents = journalArray.map(journal => <JournalCard key = {journal.id} title = {journal.title} message = {journal.message} date = {journal.date} reptile_name = {journal.reptile_name}/>)
    return (
    <div>
        <ul>
            {journalComponents}
        </ul>
    </div>
  )
}

export default JournalContainer