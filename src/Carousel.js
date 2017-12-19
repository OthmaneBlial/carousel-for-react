// Created by Othmane Blial
import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './style.css';



class Carousel extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      scrollValue: 0,
      position: 0,
    }
  }

  scrollNextTo = () => {

      if (this.state.scrollValue === ((this.props.width) * (this.props.carouselItems.length - 1) * (-1) )) {
        this.setState({scrollValue: 0, position: 0});
        this.props.getSelectedPostion(0);
      } else {
        this.setState({scrollValue: this.state.scrollValue - this.props.width, position: this.state.position + 1});
        this.props.getSelectedPostion(this.state.position + 1);
      }

  }

  scrollPreviousTo = () => {

    if (this.state.scrollValue === 0) {
      this.setState({scrollValue: (this.props.width) * (this.props.carouselItems.length - 1) * (-1) , position: this.props.carouselItems.length - 1});
      this.props.getSelectedPostion(this.props.carouselItems.length - 1);
    } else {
      this.setState({scrollValue: this.state.scrollValue + this.props.width, position: this.state.position - 1});
      this.props.getSelectedPostion(this.state.position - 1);
    }

  }

  getscrollValueAndStyle = () => {
    return {
      transform: 'translateX('+ this.state.scrollValue +'px)',
      width: this.props.width + 'px',
      height: this.props.height + 'px'
    }
  }

  goToCarouselItem = (key) => {
    this.setState({scrollValue: (-1)*key*this.props.width, position: key});
  }


  componentDidMount() {

    if (this.props.autoPlay) {
      setInterval(() => {this.scrollNextTo();}, this.props.autoPlayInterval);
    }


  }

  render() {



    return (

      <div>
        <div className="carousel" style={{maxWidth: this.props.width}}>
          <div className="horizontal-scroll">

            {this.props.carouselItems.map((carouselItem, key) =>
              <div key={key} className="horizontal-scroll-item" style={this.getscrollValueAndStyle()}>
                {carouselItem}
              </div>
            )}

          </div>
          <figcaption className="right">
            <i className="fa fa-chevron-circle-right" aria-hidden="true"  onClick={() => this.scrollNextTo()}></i>
          </figcaption>
          <figcaption className="left">
            <i className="fa fa-chevron-circle-left" aria-hidden="true"  onClick={() => this.scrollPreviousTo()}></i>
          </figcaption>
          {(this.props.carouselNav) ?
            this.props.carouselItems.map((carouselItem, key) =>
              <figcaption key={key} style={{left: (key*2 + 45) + '%'}} className="center">
                { (key === this.state.position) ? <i className="fa fa-circle" aria-hidden="true"  onClick={() => this.goToCarouselItem(key)}></i> :
                 <i className="fa fa-circle-thin" aria-hidden="true"  onClick={() => this.goToCarouselItem(key)}></i> }
              </figcaption>
            )
          : null}
        </div>
      </div>

    );
  }

}

export default Carousel;

Carousel.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  autoPlay: PropTypes.bool,
  autoPlayInterval: PropTypes.number,
  carouselItems: PropTypes.array,
  carouselNav: PropTypes.bool

}

Carousel.defaultProps = {
  width: 800,
  height: 500,
  autoPlay: false,
  autoPlayInterval: 3000,
  carouselItems: [],
  carouselNav: true
};
