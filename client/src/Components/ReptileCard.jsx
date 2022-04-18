import React, {useState} from 'react'

function ReptileCard(props) {
    const [journalEntry, setJournalEntry] = useState(true)
    
    const [title, setTitle] = useState('')
    const [message, setMessage] = useState('')
    const [date, setDate] = useState('')
    
    function handleFormToggle(){
        setJournalEntry(journalEntry => !journalEntry)
    }
    function handleChangeTitle(e){
        const currentInput = e.target.value
        setTitle(currentInput)
    }
    function handleChangeMessage(e){
        const currentInput = e.target.value
        setMessage(currentInput)
    }
    function handleChangeDate(e){
        const currentInput = e.target.value
        setDate(currentInput)
    }

    function addNewJournal(newJournal){
        fetch('/journals',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newJournal)
        })
        .then(res => res.json())
        .then((newJournal) => {
            props.setJournalArray((prevState) => [...prevState, newJournal])
        })
    }
    
    const handleCreateWishlist = async () => {
        fetch('/wishlists',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({reptile_id: props.reptileId})
        })
        .then(res => res.json())
        .then((newWishlist) => {
            props.setWishListArray((prevState) => [...prevState, newWishlist])
        })

        // const response = await fetch('/whishlists', {
        //     method: 'POST',
        //     headers: {'Content-Type': 'application/json'},
        //     body: JSON.stringify({reptile_id: props.reptileId})
        // })

        // const data = await response.json()

        // console.log("POST WISHLIST RESPONSE",response)
        // console.log("POST WISHLIST DATA", data)

        
    }
    function handleCreateJournalEntry(e){
        e.preventDefault()
        handleFormToggle()
        const newJournal ={
            title,
            message,
            date,
            reptile_id: props.reptileId
        }
        console.log(newJournal);
        addNewJournal(newJournal)
        setTitle('')
        setMessage('')
        setDate('')
    }

    return (
    <div className="reptilecard">
        <h1>{props.name}</h1>
        {props.image_link && <img height={200} width={200} src={props.image_link} />}
        <br></br>
        <button className="button" onClick={handleCreateWishlist}>Add to Wishlist</button>
        {journalEntry ? (
            <div>
        <a>{props.location}</a>
        <br></br>
        <a>{props.description}</a>
        <br></br>
        <button className="button" onClick = {handleFormToggle}>Journal Entry</button>
        </div>
        ):(
            <div>
            <form onSubmit = {handleCreateJournalEntry}>
                <p>Title:</p>
                <input type="text" placeholder="Title" value = {title} onChange = {handleChangeTitle}></input>
                <p>Message:</p>
                <input type="text" placeholder="Message" value = {message} onChange = {handleChangeMessage}></input>
                <p>Date:</p>
                <input type="text" placeholder="Date" value = {date} onChange = {handleChangeDate}></input>
                <input type='submit' value='Submit Journal Entry' />
            </form>
            </div>
        )}
    </div>
   
  )
}

export default ReptileCard