import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

import { Input } from '../components/Input';


export class Login extends React.Component {
  state = {
    credentials: {
      username: '',
      password: ''
    }
  };

  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  login = e => {
    e.preventDefault();
    axiosWithAuth()
      .post('/login', this.state.credentials)
      .then(res => {
        localStorage.setItem('token', res.data.payload);
        this.props.history.push('/protected');
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <form onSubmit={this.login}>
          <Input
            type="text"
            name="username"
            value={this.state.credentials.username}
            onChange={this.handleChange}
            label="Username"
          />
          <Input
            type="password"
            name="password"
            value={this.state.credentials.password}
            onChange={this.handleChange}
            label="Password"
          />
          <button>Log in</button>
        </form>
      </div>
    );
  }
}
