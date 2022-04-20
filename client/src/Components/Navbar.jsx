import React from 'react'
import {MdPets} from 'react-icons/md'

function Navbar({setCurrentPage}) {
  return (
    <div>
      
        <button className="regionbtn" onClick={() => {setCurrentPage('reptiles')}}>Reptiles</button> 
        <button className="regionbtn" onClick={() => {setCurrentPage('journals')}}>Journals</button>
        <button className="regionbtn" onClick={() => {setCurrentPage('wishlist')}}>Wishlist</button>

    </div>
  )
}

export default Navbar