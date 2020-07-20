import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';
import {Image} from 'react-bootstrap';
class App extends Component{ 

  state = {
    users: []
  }

  componentDidMount() {
    this.getUsers();
  
    
  }
 
  getUsers = _ => {
    fetch('http://localhost:4000/stats')
    .then(response => response.json())
    .then(({data}) => {
      var temp = data;
     
      this.setState({users: temp});

      console.log(this.state.users);
    })
     
    .catch(err => console.error(err))
  }

renderUser = ({UUID, NAME, TOPSCORE}) => <div key={UUID}><h3>{NAME}</h3> {"HIGH SCORE: " + TOPSCORE} <br /> {"AVERAGE TIME: " +Math.round((1 / (TOPSCORE / 10000)) * 100) / 100}  </div>

  render() {

    const { users} = this.state;
  return (
    <div className="App">
      <div className="Notice">"RANKED BY MOST POINTS"</div>
      <h2>SCOREBOARD FOR EXPERIMENT#1</h2>
      <div className="list">    <p> {users.map(this.renderUser)}</p></div>
  
     
      </div>
  );
  }
}

export default App;
