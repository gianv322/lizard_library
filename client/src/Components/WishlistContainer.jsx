import React from 'react'
import WishlistCard from './WishlistCard'

function WishlistContainer({wishListArray, setWishListArray}) {
    const wishlistComponents = wishListArray.map(wishlist => <WishlistCard reptileName={wishlist.reptile_name} id={wishlist.id} setWishListArray={setWishListArray} reptile_image = {wishlist.reptile_image}/>)
  
    return (
    <div>
      <h1 className="header">Wishlist</h1>
        {wishlistComponents}
    </div>
  )
}

export default WishlistContainer