import React from 'react';

import './Pad.css';

class Pad extends React.Component {
  constructor (props) {
    super(props);
  
    this.audioRef = React.createRef();
    this.divRef = React.createRef();
    this.handleClick = this.handleClick.bind(this);
    this.play = this.play.bind(this);
    this.removeTransition = this.removeTransition.bind(this);
  }

  componentDidUpdate () {
    if (this.props.isActive === true ) {
      this.play();
    }
  }

  removeTransition() {
    const divToStyle = this.divRef.current;
    divToStyle.className="";
  }

  play () {
    const audio = this.audioRef.current;
    const divToStyle = this.divRef.current;
    audio.currentTime = 0;
    
    divToStyle.className="active";
    audio.play()
    .then ( ()=>{
    })
    .catch ( (error)=> {
      console.log(error.message);
    })
  }

  handleClick () {
     this.props.clickHandler(this.props.id);
     this.play();
  }

  render() {
    return (
      <div className="drum-pad" id={this.props.describe} 
            onClick={this.handleClick} >
        <div ref={this.divRef}
              onTransitionEnd={this.removeTransition} >
          <audio className="clip" id={this.props.text} 
                  src={this.props.audioSrc} ref={this.audioRef} ></audio>

          {this.props.text}
        </div> 
      </div>
    )
  }
}

export default Pad;
