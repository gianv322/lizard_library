import React from 'react'

function Navbar({setCurrentPage}) {
  return (
    <div>
        <button className="button" onClick={() => {setCurrentPage('reptiles')}}>Reptiles</button>
        <button className="button" onClick={() => {setCurrentPage('journals')}}>Journals</button>
        <button className="button" onClick={() => {setCurrentPage('wishlist')}}>Wishlist</button>

    </div>
  )
}

export default Navbar