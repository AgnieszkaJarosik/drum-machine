import React from 'react';

import './Displayer.css';

function Displayer(props) {
  return (
    <div id="display" >
      {props.soundName}
    </div>
  );
}

export default Displayer;
