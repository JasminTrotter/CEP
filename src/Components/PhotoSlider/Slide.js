import React from 'react'

const Slide = (props) => {

  const styles = {
    backgroundImage: `linear-gradient(
        rgba(192,192,192,0.5),
        rgba(192,192,192,0.5)
      ), url(${props.image.url})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '50% 60%',
    filter: 'opacity(0.6) brightness(1.5)'
  }
  return(
    <div className="Slide">
      <div className="text-holder">
        <h2 className="slide-header">{props.image.headline}</h2>
        <p><em>{props.image.tagline}</em></p>
      </div>
      <div className="slide" style={styles}></div>
    </div>
    
  );
}

export default Slide