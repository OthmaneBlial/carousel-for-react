// Created by Othmane Blial
import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './style.css';
import Carousel from 'carousel-for-react';

export class Image extends React.Component {
  render() {
    return (
      <div>
        <img src={'images/' + this.props.image}  />
      </div>
    );
  }
}



class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedPosition: 0
    }
  }


  setSelectedPostion = (selectedPosition) => {
    this.setState({selectedPosition: selectedPosition});
  }


  componentDidMount() {


  }

  render() {



    return (

      <div>
        <section className="hero is-info is-large">
          <div className="hero-body">
            <div className="container has-text-centered">
              <h1 className="title">
                Carousel for React, a simple to use Carousel Component.
              </h1>
              <a href="https://github.com/OthmaneBlial/carousel-for-react/" className="button is-outlined">
                 <span className="icon is-small">
                   <i className="fa fa-github"></i>
                 </span>
                <span>Show on Github</span>
              </a>
            </div>
          </div>
        </section>
        <section className="hero is-large">
          <div className="hero-body">
            <div className="container" >
              <div className='columns'>
                <div className='column is-6'>
                  <h1 className="title is-3">
                    Carousel for React
                  </h1>
                  <Carousel
                    getSelectedPostion = {this.setSelectedPostion}
                    carouselItems={[<Image image='1.jpeg' />, <Image image='2.jpg' />, <Image image='3.jpg' />, <Image image='4.jpeg' />, <Image image='5.jpeg' />]}
                    width={900}
                    height={500}
                  />
                </div>
              </div>
              <div className='columns'>
                <div className='column is-6'>
                  <h1 className="title is-3">
                    Carousel for React with Auto Play
                  </h1>
                  <Carousel
                    getSelectedPostion = {this.setSelectedPostion}
                    carouselItems={[<Image image='1.jpeg' />, <Image image='2.jpg' />, <Image image='3.jpg' />, <Image image='4.jpeg' />, <Image image='5.jpeg' />]}
                    width={900}
                    height={500}
                    autoPlay={true}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <footer className="footer">
          <div className="container">
            <div className="content has-text-centered">
              <p>
                <strong>ReSelect</strong> by <a href="https://github.com/OthmaneBlial">Othmane Blial</a>. The source code is licensed
                <a href="http://opensource.org/licenses/mit-license.php"> MIT</a>.
              </p>
            </div>
          </div>
        </footer>
      </div>

    );
  }

}

export default App;


ReactDOM.render(
      <div>
        <App />
      </div>
, document.getElementById('app'));
