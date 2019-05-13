import React from 'react';
import Slide from './Slide';
// import LeftArrow from './LeftArrow';
// import RightArrow from './RightArrow';
import '../../styles/PhotoSlider.css';

export default class Slider extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      images: [
        { url: "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/aurora.jpg",
          headline: "Connect",
          tagline: "Create an online presence that resonates with your audience."          
        },
        { url: "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/canyon.jpg",
          headline: "Engage",
          tagline: "Organically grow a following and create solid relationships with influencers in your space."
        },
        { url: "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/city.jpg",
          headline: "Promote",
          tagline: "CShare your company’s unique mission and vision through effective marketing campaigns."
        }
      ],
      currentIndex: 0,
      translateValue: 0
    }
  }

  componentDidMount() {
    this.slideShow();
  }

  slideShow = () => {
    setTimeout(() => {
      this.goToNextSlide();
    }, 3000);
  }

  // goToPrevSlide = () => {

  // }

  goToNextSlide = () => {
    if (this.state.currentIndex < this.state.images.length - 1) {
      this.setState(prevState => ({
            currentIndex: prevState.currentIndex + 1
          }));
          this.slideShow();
    } else {
      this.setState({
        currentIndex: 0
      });
      this.slideShow();
    }
    
  }

  render() {

    return (
      <div className="slider">

        <div className="slider-wrapper"
          style={{
            transform: `translateX(${this.state.translateValue}px)`,
            transition: 'transform ease-out 0.45s'
          }}>

          <Slide image={this.state.images[this.state.currentIndex]} />
        </div>

        {/* <LeftArrow
         goToPrevSlide={this.goToPrevSlide}
        />

        <RightArrow
         goToNextSlide={this.goToNextSlide}
        /> */}
      </div>
    );
  }
}