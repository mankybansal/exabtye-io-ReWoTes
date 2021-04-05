import React, { Component } from "react";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import {
  faStop,
  faTimes,
  faRedo,
  faPlus,
  faDownload,
} from "@fortawesome/fontawesome-free-solid";

class Terminal extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App-terminal">
        <div className="App-terminal-controls">
          <div className="App-terminal-ctrl">
            <FontAwesomeIcon icon={faPlus} />
          </div>
          <div className="App-terminal-ctrl">
            <FontAwesomeIcon icon={faStop} />
          </div>
          <div className="App-terminal-ctrl">
            <FontAwesomeIcon icon={faTimes} />
          </div>
          <div className="App-terminal-ctrl">
            <FontAwesomeIcon icon={faRedo} />
          </div>
          <div className="App-terminal-ctrl">
            <FontAwesomeIcon icon={faDownload} />
          </div>
        </div>
        <div className="App-terminal-container">
          <div className="App-terminal-input">
            <div className="prompt">exabyte-io/demo $</div>
            <div className="Blinker">|</div>
          </div>
        </div>

        <div className="compute-usage">CPU Usage</div>
      </div>
    );
  }
}

export default Terminal;
