import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import fetchRepos from '~/src/Github';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { repos: [] };
  }

  componentDidMount() {
    fetchRepos()
      .then((repos) => {
        this.setState({ repos });
      })
  }

  render() {
    const { repos } = this.state;
    return(
      <div>
        <ul>
          {
            repos.map((repo) => (
              <li>{repo}</li>
            ))
          }
        </ul>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
