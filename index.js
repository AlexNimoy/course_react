import React, { Children } from 'react';
import ReactDOM from 'react-dom';

const Segment = ({children, dashed, color}) => (
  <div
    style={{
      border: `1px ${dashed ? 'dashed' : 'solid'} ${color}`
    }}
  >
    {Children.map(
      children,
      (child, key) => (
        <div
          key={key}
          style={{ border: '1px solid red' }}
        >
          {child}
        </div>
      )
    )}
  </div>
);

Segment.defaultProps = {
  color: 'black'
}

ReactDOM.render(
  <Segment>
    <div>sad</div>
    <div>sadf</div>
    {() => <div>Third</div>}
  </Segment>,
  document.getElementById('root')
)
