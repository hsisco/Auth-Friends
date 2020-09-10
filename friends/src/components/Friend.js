import React from 'react';
import { Card, CardTitle, CardText, CardSubtitle, CardBody } from 'reactstrap';

const Friend = ({friend}) => {
  return(
    <div>
      <Card>
        <CardBody>
          <CardTitle>{friend.name}</CardTitle>
          <CardSubtitle>{friend.location}</CardSubtitle>
          <CardText>
              {friend.birthday}
              {friend.email}
          </CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default Friend;