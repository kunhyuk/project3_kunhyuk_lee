import { func } from 'prop-types'
import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

function Show(props) {
  //these code work but when i refresh it doesn't
    const navigate = useNavigate()
    const {id} = useParams()
    const items = props.item
    const item = items.find((item) => item._id === id)
    //console.log(item)



    const [editForm, setEditForm] = useState(item)



    // handleChange function for form
    const handleChange = event => {
        setEditForm({ ...editForm, [event.target.name]: event.target.value })
    }

    // handlesubmit for form
    const handleSubmit = event => {
        event.preventDefault()
        props.updateItem(editForm, item._id)
        // redirect people back to index
        navigate(`/`)
    }

    const removeItem = () => {
        props.deleteItem(item._id)
        navigate("/")
      }

    return (
      
        <div className="item">
            <h1>{item.name}</h1>
            <h2>{item.price}</h2>
            <img src={item.image} alt={item.name} />
            <button id="delete" onClick={removeItem}>
        DELETE
      </button>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={editForm.name}
          name="name"
          placeholder="name"
          onChange={handleChange}
        />
        <input
          type="text"
          value={editForm.image}
          name="image"
          placeholder="image URL"
          onChange={handleChange}
        />
        <input
          type="number"
          value={editForm.price}
          name="price"
          placeholder="price"
          onChange={handleChange}
        />
        <input type="submit" value="Update Item" />
      </form>
        </div>
    )
}

export default Show