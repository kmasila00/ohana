import React, { Component } from 'react';
import ReactPlayer from 'react-player'
import './App.css';
const data = [
  {
    title: 'sss001',
    content: 'I have gun'
  },
  {
    title: 'sss002',
    content: 'I used to go under the sewers'
  }
];

class App extends Component {
  render() {
    const listItems = data.map((elem) =>
      <li key={elem.title} className="list-group-item">{elem.title}: {elem.content}</li>
    );
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to Ohana v1</h2>
        </div>
        <div className="App-content">
          <div className="App-left-content">
            <ReactPlayer className="falling-video" url='https://www.youtube.com/watch?v=QwqTFN0ymuI' playing={true} />
          </div>
          <div className="App-right-content">
            <ul className="list-group list-title">
              <li className="list-group-item active">Shit Suganthi Says</li>
              {listItems}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
