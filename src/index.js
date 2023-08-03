import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import CkEditor from './ckEditorComponent';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <CkEditor/>
        <p>
          Start editing to see some magic happen :)
        </p>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
