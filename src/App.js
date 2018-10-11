import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import "codemirror/lib/codemirror.css";

import "./button.css";
import "./statusBar.css";
import Main from "./components/Main/Main";
import Header from "./components/Header/Header";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      userInput: "",
      status: { text: "...", class: "normal" },
      json: {}
    };
    this.onCtrlEnter = e => {
      if (e.ctrlKey && e.key === "Enter") {
        this.create();
      }
    };
    this.resetStatusMessage = () => {
      this.setState({
        status: {
          text: "...",
          class: "normal"
        }
      });
    };
  }

  componentDidMount() {
    document.body.addEventListener("keyup", this.onCtrlEnter);
  }

  componentWillUnmount() {
    document.body.removeEventListener("keyup", this.onCtrlEnter);
  }

  componentDidUpdate ( prevProps, prevState, snapshot ) {
    if ( this.state.status.text !== prevState.status.text && this.state.status.text !== '...' ) {
      console.log('status changed')
      const statusBar = document.querySelector('.status')
      statusBar.classList.add('flash');
      setTimeout(()=>{
        statusBar.classList.remove('flash');
      }, 900)
    }
  }

  create = () => {
    this.resetStatusMessage();
    try {
      let json = JSON.parse(this.state.userInput);
      return axios.post("/api/create", json).then(res => {
        this.setState({
          status: {
            text: `Status: ${res.statusText} ${res.status}`,
            class: "normal"
          }
        });
      });
    } catch (err) {
      return this.setState({
        status: {
          text: "Syntax Error: " + err.message,
          class: "error"
        }
      });
    }
  };

  read = () => {
    this.resetStatusMessage();
    axios.get("/api/read").then(res => {
      this.setState({
        json: res.data,
        status: {
          text: `Status: ${res.statusText} ${res.status}`,
          class: "normal"
        }
      });
    });
  };

  update = () => {
    this.resetStatusMessage();
    try {
      let json = JSON.parse(this.state.userInput);
      return axios.put("/api/update", json).then(res => {
        this.setState({
          status: {
            text: `Status: ${res.statusText} ${res.status}`,
            class: "normal"
          }
        });
      });
    } catch (err) {
      return this.setState({
        status: {
          text: "Syntax Error: " + err.message,
          class: "error"
        }
      });
    }
  };

  delete = () => {
    this.resetStatusMessage();
    axios.delete("/api/delete").then(res => {
      this.setState({
        status: {
          text: `Status: ${res.statusText} ${res.status}`,
          class: "normal"
        }
      });
    });
  };

  render() {
    return (
      <div className="app--component">
        <Header
          create={this.create}
          read={this.read}
          update={this.update}
          delete={this.delete}
          statusText={this.state.status.text}
          statusClass={this.state.status.class}
        />

        <Main
          json={this.state.json}
          onTextChange={userInput => {
            this.setState({
              userInput
            });
          }}
        />
      </div>
    );
  }
}
