import React, { Component } from 'react';

class App extends Component {
  componentDidMount(){
    console.log(process.env)
    fetch('http://git.kondosoft.com/api/v4/projects',
    {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Private-Token': process.env.REACT_APP_GITLAB_TOKEN
      }

    }).then(res => res.json())
      .then(res => console.log('this is it >', res))
      .catch(err => console.log('error in fetch > ', err))
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
