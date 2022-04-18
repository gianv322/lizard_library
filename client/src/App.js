import './App.css';
import React, {useState, useEffect} from 'react';
import ReptileContainer from './Components/ReptileContainer'
import Header from './Components/Header'
import JournalContainer from './Components/JournalContainer'
import WishlistContainer from './Components/WishlistContainer'
import LandingPage from './Components/LandingPage'
import Navbar from './Components/Navbar'
import {
  BrowserRouter as Router,
  Link,
  Route,
  Routes,
} from 'react-router-dom';

function App() {
  const [reptileArray, setReptileArray] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [journalArray, setJournalArray] = useState([])
  const [locationFilter, setLocationFilter] = useState('All')
  const [wishListArray, setWishListArray] = useState([])
  const [currentPage, setCurrentPage] = useState('landing')

  const filteredReptiles = reptileArray.filter((lizard) => {
    if (locationFilter === 'All'){
      return lizard.name.toLowerCase().includes(searchTerm.toLowerCase())
    } else {
      return lizard.name.toLowerCase().includes(searchTerm.toLowerCase()) && lizard.location === locationFilter
    }
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
  function renderApp(){
    if (currentPage === 'landing'){
      return <LandingPage />
    }
    if (currentPage === 'reptiles'){
      return (
        <ReptileContainer 
            setSearchTerm={setSearchTerm}
            searchTerm={searchTerm} 
            setLocationFilter={setLocationFilter} 
            reptileArray={filteredReptiles} 
            setWishListArray={setWishListArray}
            setJournalArray={setJournalArray}
          />
      )
    }
    if (currentPage === 'journals'){
      return <JournalContainer journalArray={journalArray}/>
    }
    if (currentPage === 'wishlist'){
      return <WishlistContainer wishListArray={wishListArray} setWishListArray={setWishListArray}/>

    }
  }
  
  // console.log(process.env)
  return (
      <div className="App">
          <Navbar setCurrentPage={setCurrentPage}/>
          {renderApp()}
        </div>

  );
}

export default App;
