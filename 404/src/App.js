import "./App.css";
import React, { Component } from "react";

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
      <div style={myStyle}>
        <h1> geeksforgeeks </h1>
      </div>
    );
  }
}

export default App;
