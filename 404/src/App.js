import "./App.css";
import React, { Component } from "react";
import Image from 'react-bootstrap/Image';
import background from './error.gif';

class App extends Component {
  render() {
    const myStyle = {
      backgroundImage:
        "url('https://wallpapercave.com/wp/wp7323796.gif')",
      height: "100vh",
      marginTop: "-70px",
      fontSize: "50px",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
    };
    return (
      <div>
        <Image src={background} fluid />
          <h1> geeksforgeeks </h1>
        </Image>
      </div>
    );
  }
}

export default App;
