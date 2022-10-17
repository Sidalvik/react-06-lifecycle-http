import PropTypes from 'prop-types';
import React, { Component } from 'react';
import AddWatchForm from './AddWatchForm/AddWatchForm';
import WatchesList from './WatchesList/WatchesList';
import Watch from './Watch/Watch';


export class Watches extends Component {
  static propTypes = {
    props:  PropTypes.any,
  };

  state = {
    watchesList: [
        {city: 'New York', timeZone: -4,},
        {city: 'Moscow', timeZone: +3,},
        {city: 'London', timeZone: +1,},
        {city: 'Tokyo', timeZone: +9,},
    ],
    inputs: {
      city: '',
      timeZone: '',
    },
  };

  handleChange =  (event) => {
    const name = event.target.name;
    const value = event.target.value;
    if (name === 'timeZone' && Number.isNaN(value)) return;

    this.setState({...this.state, inputs: {...this.state.inputs, [name]: value}});
  }

  addWatch = () => {
    if (!this.state.inputs?.['city'] || !this.state.inputs?.['timeZone']) {
        return;
    }

    const newState =  {
        watchesList: [...this.state.watchesList, {...this.state.inputs}],
        inputs: {
          city: '',
          timeZone: '',
        },
    }

    this.setState(newState);

    console.log('addWatch');
  }

  closeWatch = (id) => {
    const newState = {
      ...this.state,
      watchesList: this.state.watchesList.filter((item, index) => index !== id),
    };
    
    this.setState(newState);

    console.log('closeWatch');
  }


  render() {
    const watchesItems = this.state.watchesList.map((item, index) => {
      const newProps =  {
        ...item,
        key: index,
        id: index,
        closeWatch: this.closeWatch,
      }
      return <Watch {...newProps}/>
    });

    return (
      <div>
        <AddWatchForm form = {this.state.inputs} handleChange = {this.handleChange} addWatch = {this.addWatch}/>
        <WatchesList className = {''}>
          {watchesItems}
          {/* <Watch closeWatch = {this.closeWatch}/> */}
        </WatchesList>
      </div>
    )
  }
}

export default Watches