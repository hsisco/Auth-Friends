import React from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';
import { CardGroup } from 'reactstrap';
import Friend from './Friend';
import NewFriendForm from './NewFriendForm';

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
        this.setState({ friends: res.data });
        console.log("Friends state:", this.state.friends);
      })
      .catch(err => console.log("getData FAILED:", err))
  };

  render(){
    return(
      <div className="friends">
        <NewFriendForm friends={this.state.friends} />
        <CardGroup>
          {this.state.friends.map(friend => (
            <Friend 
              key={friend.id}
              friend={friend}
            />
          ))}
        </CardGroup>
      </div>
    )
  };
};

export default FriendsList;