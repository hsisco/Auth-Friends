import React, { useState } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';
import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';

const NewFriendForm = (props) => {
  const [friend, setFriend] = useState({
    name: '',
    email: '',
    birthday: '',
    location: ''
  })

  const handleSubmit = e => {
    e.preventDefault();
    axiosWithAuth
      .post('/friends', friend)
      .then(res => {
        console.log(res)
      })
      .catch(err => console.log("New friend not submitted:", err))
    }

  const handleChanges = e => {
    e.persist();
    setFriend({ ...friend, [e.target.name] : e.target.value})
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup row>
        <Label sm={2}>Name</Label>
        <Col sm={10}>
          <Input type="text" name="name" value={friend.name} onChange={handleChanges} />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="friendLocation" sm={2}>Location</Label>
        <Col sm={10}>
          <Input type="text" name="location" value={friend.location} onChange={handleChanges} />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="friendBday" sm={2}>Birthday</Label>
        <Col sm={10}>
          <Input type="date" name="birthday" value={friend.birthday} onChange={handleChanges} />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="friendEmail" sm={2}>Email</Label>
        <Col sm={10}>
          <Input type="email" name="email" value={friend.email} onChange={handleChanges} />
        </Col>
      </FormGroup>
      <FormGroup check row>
        <Col sm={{ size: 10, offset: 2 }}>
          <Button type="submit" onClick={handleSubmit}>
            Add New Friend
          </Button>
        </Col>
      </FormGroup>
    </Form>
  );
}

export default NewFriendForm;