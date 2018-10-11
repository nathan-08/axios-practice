import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();
    this.state={
      userInput: '',
      status: '...',
      json: {}
    }
  }
  updateUserInput( e ) {
    this.setState({ userInput: e.target.value })
  }
  create () {
    this.setState({ status: '...' })
    let json;
    try {
      json = JSON.parse(this.state.userInput)
    }
    catch (error) {
      return this.setState({ status: 'invalid JSON format' })
    }
    
    axios.post('/api/create', json)
         .then( res=> this.setState({ status: `status: ${res.status} ${res.statusText}` }))
    

  }
  read () {
    this.setState({ status: '...' })
    axios.get('/api/read')
         .then( res=>{
            this.setState({
              json: res.data,
              status: `status: ${res.status} ${res.statusText}`
            })
         })
  }
  update () {
    this.setState({ status: '...' })
    let json;
    try {
      json = JSON.parse(this.state.userInput)
    }
    catch (error) {
      return this.setState({ status: 'invalid JSON format' })
    }
    axios.put('/api/update', json)
         .then( res=> this.setState({ status: `status: ${res.status} ${res.statusText}` }))
  }
  delete () {
    this.setState({ status: '...' })
    axios.delete('/api/delete')
         .then( res=> this.setState({ status: `status: ${res.status} ${res.statusText}` }))
  }
  render() {
    return (
      <div className="app--component">
        <header>
          <h3> Axios Practice </h3>
          <div className="button--container">
            <div className="button dark-color" onClick={this.create.bind(this)}> create </div>
            <div className="button dark-color" onClick={this.read.bind(this)}> read </div>
            <div className="button dark-color" onClick={this.update.bind(this)}> update </div>
            <div className="button dark-color" onClick={this.delete.bind(this)}> delete </div>
          </div>
        </header>
        <section className="status"> { this.state.status }
        </section>
        <main>
          <textarea className="textarea" value={this.state.userInput} onChange={this.updateUserInput.bind(this)}></textarea>

          <div className="json--container">

            <code>{ JSON.stringify(this.state.json, null, 4) }</code>

          </div>
        </main>
      </div>
    );
  }
}

export default App;
