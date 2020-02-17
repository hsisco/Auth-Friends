import React from 'react';
import { Card } from 'react-bootstrap';

const Friend = (...friend) => {
  return(
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{friend.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{friend.location}</Card.Subtitle>
        <Card.Text>
          <ul>
            <li>{friend.birthday}</li>
            <li>{friend.email}</li>
          </ul>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Friend;

