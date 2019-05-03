import React, { Component } from 'react';

import c3 from 'c3';

class App extends Component {
  constructor(props) {
    super(props);
    this.data = [
      ['data1', 1, 2, 3, 4, 5],
      ['data2', 2, 3, 4, 5, 6]
    ]

    this.chatRef = React.createRef();
  }

  componentDidMount() {
    c3.generate({
      bindto: this.chatRef.current,
      data: { columns: this.data }
    })
  }

  render() {
    return (
      <div ref={this.chatRef}></div>
    )
  }
}

export default App;
