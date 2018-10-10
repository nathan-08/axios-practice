import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {
  render() {
    return (
      <div className="app--component">
        <header>
          <h3> Axios Practice </h3>
          <div className="button--container">
            <div className="button dark-color"> create </div>
            <div className="button dark-color"> read </div>
            <div className="button dark-color"> update </div>
            <div className="button dark-color"> delete </div>
          </div>
        </header>
        <section className="status">
        </section>
        <main>
          <textarea className="textarea"></textarea>

          <div className="json--container">

            <code></code>

          </div>
        </main>
      </div>
    );
  }
}

export default App;
