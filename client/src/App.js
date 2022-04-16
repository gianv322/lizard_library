import './App.css';
import React, {useState, useEffect} from 'react';
import ReptileContainer from './Components/ReptileContainer'
import Header from './Components/Header'
import JournalContainer from './Components/JournalContainer'

function App() {
  const [reptileArray, setReptileArray] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [journalArray, setJournalArray] = useState([])

  const filteredReptiles = reptileArray.filter(lizard => lizard.name.toLowerCase().includes(searchTerm.toLowerCase()))
  
  useEffect(() => {
    fetch ('/reptiles')
    .then (res => res.json())
    .then (setReptileArray)
  },[])
    console.log(reptileArray);
  
  useEffect(() =>{
    fetch ('/journals')
    .then (res => res.json())
    .then (setJournalArray)
  },[])
  
  return (
    <div className="App">
      <Header setSearchTerm={setSearchTerm} searchTerm={searchTerm}/>
      <ReptileContainer reptileArray={filteredReptiles}/>
      <JournalContainer journalArray={journalArray}/>

    </div>
  );
}

export default App;
