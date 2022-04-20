import React, {useEffect} from 'react'

function WishlistCard({reptileName, id, setWishListArray, reptile_image}) {
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
        <a className="name">{reptileName}</a>
        <br></br>
        <img height={200} width={200} src={reptile_image}/>
        <br></br>
        <button className="regionbtn" onClick={deleteFromWishlist}>Saw it!</button>
    </div>
  )
}

export default WishlistCard