import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { repos } = this.props;
    return(
      <div>
        <ul>
          {
            repos.map((repo) => (
              <li key={repo} >{repo}</li>
            ))
          }
        </ul>
      </div>
    );
  }
}

export default App;
