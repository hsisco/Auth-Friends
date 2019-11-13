import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addFriend } from '../actions';
import { Input } from '../components/Input';

const Form = (props) => {
  const [newFriend, setNewFriend] = useState({
    name: '',
    birthday: '',
    location: ''
  })

  const handleSubmit = e => {
    e.preventDefault();
    props.addFriend(addFriend)
  }

  const handleChanges = e => {
    let name = e.target.name;
    setNewFriend({ ...newFriend, [name] : e.target.value})
  }

  return(
    <div className="form">
      <form onSubmit={handleSubmit}>
        <Input 
          name="name"
          type="text" 
          label="Name"
          onChange={handleChanges} />
        <Input 
          name="birthday" 
          type="text" 
          label="Birthday"
          onChange={handleChanges} />
        <Input 
          name="location" 
          type="text" 
          label="Location"
          onChange={handleChanges} />
        <button 
          type="submit" 
          onClick={handleSubmit}>
          Add New Friend
        </button>
      </form>
    </div>
  )
}

export default connect(null, {addFriend})(Form)