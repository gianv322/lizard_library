import React from 'react'

function Navbar({setCurrentPage}) {
  return (
    <div>
        <button onClick={() => {setCurrentPage('reptiles')}}>Reptiles</button>
        <button onClick={() => {setCurrentPage('journals')}}>Journals</button>
        <button onClick={() => {setCurrentPage('wishlist')}}>Wishlist</button>

    </div>
  )
}

export default Navbar