import React, { Component } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>React Example</h1>
      <DataComponent></DataComponent>
    </div>
  );
}

export default App;

class DataComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }

  componentWillMount() {}

  makeRequest = async () => {
    const response = await fetch('http://localhost/frontend-frameworks/data/data.json');
    const json = await response.json();
    const arr = this.it(json);

    this.setState({
      data: arr
    });
  }

  it = (obj) => {

    const resArray = [];

    const iterate = (obj) => {
      Object.entries(obj).forEach(([key, value]) => {
        if (obj.hasOwnProperty(key)) {
          resArray.push(`${key}: ${value}`);
  
          if (typeof value === 'object') {
            iterate(value);
          }
        }
      });
    };
  
    iterate(obj);
  
    return resArray;

  }


  render () {
    return (
      <div>
        <button id="button" onClick={this.makeRequest}>Get Data</button>
        <code id="output">
          <ul>
           {
              this.state.data.map(function(player) {
                return <li key={player}>{player}</li>
              })
            }
          </ul>
        </code>
      </div>
    );
  }
};
