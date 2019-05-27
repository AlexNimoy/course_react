import React, { Component } from 'react';

import Slide from './Slide';

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
    const { items } = props;

    const slides = items.data ? items.data : [];

    const selected_slides = slides.filter(s => s.selected === true)
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
    const slides_length = slides.length;

    let next = '';

    if(direction === 'left') {
      next = (current_slide > 1) ? current_slide - 1 : slides_length;
    }

    if(direction === 'right') {
      next = (current_slide < slides_length) ? current_slide + 1 : 1;
    }

    this.setState({ current_slide: next})
  }

  render() {
    const { current_slide, slides } = this.state;
    const slide = slides[current_slide - 1];

    return(
      <div className="slides-layout">
        <Slide { ...slide } />
        <button onClick={ () => this.handleLeft() }>&larr;</button>
        <button onClick={ () => this.handleRight() }>&rarr;</button>
      </div>
    )
  }
}

export default Slides;
