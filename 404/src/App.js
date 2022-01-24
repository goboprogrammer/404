
import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    const myStyle={
        backgroundImage: 
 "url('https://media.geeksforgeeks.org/wp-content/uploads/rk.png')",
        height:'100vh',
        marginTop:'-70px',
        fontSize:'50px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    };
    return (
      <div style={myStyle}>
        <h1> geeksforgeeks </h1>
      </div>
    );
  }
}
   
export default App;