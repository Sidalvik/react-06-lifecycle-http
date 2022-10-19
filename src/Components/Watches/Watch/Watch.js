import PropTypes from 'prop-types';
import React, { Component } from 'react';
import CloseBtn from '../CloseBtn/CloseBtn';
import Arrow from './Arrow/Arrow';

export class Watch extends Component {
  static propTypes = {
    city: PropTypes.string.isRequired,
    timeZone: PropTypes.number.isRequired,
  }

  state = {
    timeComponents: {hours: 0, minutes: 0, seconds: 0},
    interval: null,
  }

  getTimeComponent = (hoursOffset = 0) => {
    const offsetHoursInt = Math.trunc(+hoursOffset);
    const offsetMinutesInt = Math.trunc((+hoursOffset - offsetHoursInt) * 60);
    const offsetSecondInt = Math.round((+hoursOffset - offsetHoursInt - offsetMinutesInt / 60) * 3600);
    
    const currentTime =new Date();
    const offsetTime = new Date(currentTime.setHours(currentTime.getUTCHours() + offsetHoursInt,
     currentTime.getUTCMinutes() + offsetMinutesInt, 
     currentTime.getUTCSeconds() + offsetSecondInt));

    return {
      hours: offsetTime.getHours(),
      minutes: offsetTime.getMinutes(),
      seconds: offsetTime.getSeconds(),
    }
  }

  updateTime = () => {
    const newState = {...this.state, timeComponents: this.getTimeComponent(this.props.timeZone),};
    this.setState(newState);
  }

  componentDidMount = () => {
    let interval = setInterval(() => {this.updateTime()}, 1 * 1000);
    this.setState({interval});
  }

  componentWillUnmount = () => {
    clearInterval(this.state.interval);
  }

  render() {
    const {city, timeZone,  id, closeWatch: handleClick} = this.props;

    return (
      <div className='watch'>
        <p className='city-name'>{`${city} (UTC ${timeZone < 0 ? timeZone : '+' + timeZone})`}</p>
        <div className="clock-face">
          <p className='digital_clock'>{this.state.timeComponents.hours}:{this.state.timeComponents.minutes}:{this.state.timeComponents.seconds}</p>
          <Arrow type={'hours'} value={this.state.timeComponents.hours}/>
          <Arrow type={'minutes'} value={this.state.timeComponents.minutes}/>
          <Arrow type={'seconds'} value={this.state.timeComponents.seconds}/>
          <CloseBtn onClick={() => handleClick(id)} className={'watch-close-btn'}/>
        </div>
      </div>
    )
  }
}

export default Watch