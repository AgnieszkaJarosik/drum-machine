import React from 'react';
import Pad from '../Pad/Pad';

import './Pads.css';

function Pads(props) {

  return (
    <div id="pads-container">
      {props.buttons.map((button, id) => {
        return <Pad key={id}
                    id={id}
                    text={button.letter}
                    buttonKey={button.key}
                    audioSrc={button.soundSource}
                    describe={button.soundName}
                    isActive={ id === props.activeButton ? true : false}
                    clickHandler={props.clickHandler} 
                    />
      })}
    </div>
  );
}

export default Pads;
