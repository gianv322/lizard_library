import React from 'react'
import WishlistCard from './WishlistCard'

function WishlistContainer({wishListArray, setWishListArray}) {
    const wishlistComponents = wishListArray.map(wishlist => <WishlistCard reptileName={wishlist.reptile_name} id={wishlist.id} setWishListArray={setWishListArray}/>)
  
    return (
    <div>
        {wishlistComponents}
    </div>
  )
}

export default WishlistContainer