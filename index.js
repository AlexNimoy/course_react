import React, { Fragment, Component } from 'react';
import ReactDOM from 'react-dom';

class EventListener extends Component {
  constructor(props) {
    super(props);

    this.state = { eventType: 'Unknown' };

    this.update = this.update.bind(this);
  }

  update(e) {
    this.setState({
      eventType: e.type
    })
  }

  render() {
    const { eventType } = this.state;
    return(
      <Fragment>
        <h1>{eventType}</h1>
        <textarea
          // onChange = { this.update }
          onPaste = { this.update }
          onCopy = { this.update }
          onCut = { this.update }
        />
      </Fragment>
    );
  }
}

ReactDOM.render(
  <EventListener />,
  document.getElementById('root')
)
