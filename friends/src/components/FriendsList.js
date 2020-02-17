import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import CardDeck from 'react-bootstrap/CardDeck';
import Friend from './Friend';


class FriendsList extends React.Component {
  state = {
    friends: []
  };

  componentDidMount() {
    this.getData();
  };

  getData = () => {
    axiosWithAuth()
      .get("/friends")
      .then(res => {
        console.log("Friends data:", res);
        this.setState({
          friends: res.data
        });
      })
      .catch(err => console.log("getData FAILED:", err))
  };

  render(){
    return(
      <div className="friends">
        <CardDeck>
          {this.state.friends.map(friend => (
            <Friend 
              key={friend.id} 
              {...friend}
            />
          ))}
        </CardDeck>
      </div>
    )
  };
};

export default FriendsList;