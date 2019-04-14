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
          headline: "Lorem Ipsum",
          tagline: "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
        },
        { url: "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/canyon.jpg",
          headline: "Lorem Ipsum 2",
          tagline: "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
        },
        { url: "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/city.jpg",
          headline: "Lorem Ipsum 3",
          tagline: "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
        },
        { url: "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/desert.jpg",
          headline: "Lorem Ipsum 4",
          tagline: "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
        },
        { url: "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/mountains.jpg",
          headline: "Lorem Ipsum 5",
          tagline: "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
        },
        { url: "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/redsky.jpg",
          headline: "Lorem Ipsum 6",
          tagline: "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
        },
        { url: "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/sandy-shores.jpg",
          headline: "Lorem Ipsum 7",
          tagline: "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
        },
        { url: "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/tree-of-life.jpg",
          headline: "Lorem Ipsum 8",
          tagline: "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
        },
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