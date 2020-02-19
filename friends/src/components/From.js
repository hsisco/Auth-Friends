import React from 'react';
import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';

const Form = (props) => {
  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup row>
        <Label for="friendName" sm={2}>Name</Label>
        <Col sm={10}>
          <Input type="text" name="name" id="friendName" onChange={handleChanges} />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="friendLocation" sm={2}>Location</Label>
        <Col sm={10}>
          <Input type="text" name="location" id="friendLocation" onChange={handleChanges} />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="friendBday" sm={2}>Birthday</Label>
        <Col sm={10}>
          <Input type="date" name="birthday" id="friendBday" onChange={handleChanges} />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="friendEmail" sm={2}>Email</Label>
        <Col sm={10}>
          <Input type="email" name="email" id="friendEmail" onChange={handleChanges} />
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

export default Form;