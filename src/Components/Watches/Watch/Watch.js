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

  componentDidMount = () => {
    // let interval = setInterval(() => {this.render()}, 1 * 1000);
    // this.setState({interval});
    console.log('componentDidMount "Watch"');
  }

  componentWillUnmount = () => {
    clearInterval(this.state.interval);
    console.log('componentWillUnmount "Watch"');
  }

  render() {
    const {city, timeZone, id, closeWatch: handleClick} = this.props;
    const timeComponents = this.getTimeComponent(timeZone);
    console.log('run render Watch-' + id);
    return (
      <div className='watch'>
        <p className='city-name'>{city}</p>
        <p>{timeComponents.hours}:{timeComponents.minutes}:{timeComponents.seconds}</p>
        <div className="clock-face">
          <Arrow type={'hours'} value={timeComponents.hours}/>
          <Arrow type={'minutes'} value={timeComponents.minutes}/>
          <Arrow type={'seconds'} value={timeComponents.seconds}/>
          <CloseBtn onClick={() => handleClick(id)} className={'watch-close-btn'}/>
        </div>
      </div>
    )
  }
}

export default Watch