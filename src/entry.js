import { render } from 'react-dom';
import React, { Component } from 'react';

require('./style.scss');


class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const props = this.props;
    return (
      <h1>hey there</h1>
    );
  }
}


render(<App />, document.getElementById('target'));
