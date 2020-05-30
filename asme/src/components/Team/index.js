import React, { Component } from 'react';
import './index.css'
import Gear from './../../assets/gear.png'
export default class Team extends Component {
  render() {
    return (
    <div>
    <div className='Heading'>
        <p>Team of 2019-2020</p>
        <img src={Gear} alt="LoGeargo" />    </div>
    </div>
    );
  }
}
