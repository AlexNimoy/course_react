import React, { Component } from 'react';

import Slide from '~/src/components/shared/Slides/Slide';

class Slides extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slides: [],
      current_slide: 1,
      seconds: 0,
      interval: 15
    }
  }

  static getDerivedStateFromProps(props, _) {
    const selected_slides = props.children
      .filter(s => s.selected === true)
    return{
      slides: selected_slides
    }
  }

  tick() {
    const { seconds, interval } = this.state;

    if(seconds >= interval) {
      this.setState({ seconds: 0 });
      this.listImages('right');
    }

    this.setState(prevState => ({
      seconds: prevState.seconds + 1
    }));
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  handleLeft() {
    this.listImages('left');
  }

  handleRight() {
    this.listImages('right');
  }

  listImages(direction) {
    const { current_slide, slides } = this.state;
    let next = '';

    if(direction === 'left') {
      next = (current_slide > 1) ? current_slide - 1 : slides.length;
    }

    if(direction === 'right') {
      next = (current_slide < slides.length) ? current_slide + 1 : 1;
    }

    this.setState({ current_slide: next})
  }

  render() {
    const { current_slide, slides } = this.state;

    return(
      <div className="slides-layout">
        <Slide { ...slides[current_slide - 1] } />
        <button onClick={ () => this.handleLeft() }>&larr;</button>
        <button onClick={ () => this.handleRight() }>&rarr;</button>
      </div>
    )
  }
}

export default Slides;
