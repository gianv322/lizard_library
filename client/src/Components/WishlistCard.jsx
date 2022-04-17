import React, {useEffect} from 'react'

function WishlistCard({reptileName, id, setWishListArray}) {
    function deleteFromWishlist(){
        fetch(`/wishlists/${id}`, {
            method: 'DELETE',
            headers: {'Content-Type': 'application/json'}
        })
        .then(res => {
            if (res.status === 204){
                setWishListArray(prevState => prevState.filter(wishlist => wishlist.id !== id));
            }


        })
        
    } 
  
  
    return (
    <div>
        {reptileName}
        <button onClick={deleteFromWishlist}>Saw it!</button>
    </div>
  )
}

export default WishlistCard