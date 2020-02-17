import React from 'react';
import { Card, CardTitle, CardText, CardSubtitle, CardBody } from 'reactstrap';

const Friend = (...friend) => {
  return(
    <Card style={{ width: '18rem' }}>
      <CardBody>
        <CardTitle>{friend.name}</CardTitle>
        <CardSubtitle className="mb-2 text-muted">{friend.location}</CardSubtitle>
        <CardText>
            {friend.birthday}
            {friend.email}
        </CardText>
      </CardBody>
    </Card>
  );
};

export default Friend;