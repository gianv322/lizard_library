import './App.css';
import React, {useState, useEffect} from 'react';
import ReptileContainer from './Components/ReptileContainer'
import Header from './Components/Header'
import JournalContainer from './Components/JournalContainer'
import WishlistContainer from './Components/WishlistContainer'

function App() {
  const [reptileArray, setReptileArray] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [journalArray, setJournalArray] = useState([])
  const [locationFilter, setLocationFilter] = useState('')
  const [wishListArray, setWishListArray] = useState([])

  const filteredReptiles = reptileArray.filter((lizard) => {
    return lizard.name.toLowerCase().includes(searchTerm.toLowerCase()) || lizard.location === locationFilter
  })
  
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

  useEffect(()=>{
    fetch('/wishlists')
    .then(res => res.json())
    .then(setWishListArray)
  },[])
  
  return (
    <div className="App">
      <Header setSearchTerm={setSearchTerm} searchTerm={searchTerm} setLocationFilter={setLocationFilter}/>
      <ReptileContainer reptileArray={filteredReptiles} setWishListArray={setWishListArray}/>
      <JournalContainer journalArray={journalArray}/>
      <WishlistContainer wishListArray={wishListArray} setWishListArray={setWishListArray}/>

    </div>
  );
}

export default App;
