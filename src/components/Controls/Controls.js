import React from 'react';
import Displayer from '../Displayer/Displayer';

import './Controls.css';

function Controls(props) {
  
  return (
    <div id="controls-container">
      <Displayer soundName={props.textToShow!==undefined ? props.textToShow.soundName : ''} />
    </div>
  );
}

export default Controls;
