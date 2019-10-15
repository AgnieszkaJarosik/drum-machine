import React from 'react';
import Controls from '../Controls/Controls';
import Pads from '../Pads/Pads';
import buttons from './buttons';

import './App.css';

class App extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      pushbuttons: buttons,
      activeId: null,
    }

    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount () {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown (e) {
    this.state.pushbuttons.forEach((button,id) => {
      if (button.key===e.keyCode) {
        this.setState({ activeId: id });
      }
    });
  }

  handleClick (id) {
   this.setState({ activeId: id });
  }

  render () {
    return (
      <div className="App" >
        <div id="drum-machine" >
          <Pads buttons={this.state.pushbuttons} 
                activeButton={this.state.activeId}
                keyDownHandler={this.handleKeyDown}
                clickHandler={this.handleClick} />
          <Controls textToShow={this.state.pushbuttons[this.state.activeId]} />
        </div>
      </div>
    );
  }
}

export default App;
