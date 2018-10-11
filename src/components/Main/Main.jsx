import React from 'react';
import CodeMirror from "react-codemirror";
import "codemirror/mode/javascript/javascript";
import "codemirror/addon/edit/closebrackets";

class Main extends React.Component {
  componentDidMount() {
    try {
      console.log(this.refs.cm.getCodeMirror());
    } catch (err) {
      console.log(err);
    }
  }
  render() {
    const { onTextChange, json } = this.props;
    return (
      <main>
        <CodeMirror
          id="codemirror"
          ref="cm"
          className="textarea"
          options={{
            autoCloseBrackets: true,
            lineNumbers: true,
            mode: {
              name: "javascript",
              json: true
            }
          }}
          onChange={onTextChange}
        />
        <div className="json--container">
          <code>{JSON.stringify(json, null, 4)}</code>
        </div>
      </main>
    );
  }
}

export default Main;