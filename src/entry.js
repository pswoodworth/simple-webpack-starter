require("./style.scss");
import { render } from 'react-dom';


import React, { Component} from 'react';


export default class Display extends Component {
  constructor(props) {
    super(props);
  }
  render(){
    const props = this.props;
    return (
      <div className="display">
        <img className="logo" src="/alibi_logo.png"/>
        <h3>My ID is: <code>{props.id}</code></h3>
        <h3>Devices I See</h3>
        <ul>
          {
            Object.keys(props.visibleBeacons).map((deviceKey) => {
              <li><code>{props.visibleBeacons[deviceKey].uuid}</code></li>
            })
          }
        </ul>
      </div>
    );
  }
}


fetch('/devices').then(res => res.json()).then((res) => {
  console.log(res);
  render(<Display id={res.id} visibleBeacons={res.visibleBeacons}/>, document.getElementById('target'));
})





