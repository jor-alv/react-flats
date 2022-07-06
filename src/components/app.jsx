import React, { Component } from 'react';

import flats from '../data/flats';
import FlatList from './flat_list';
// import Marker from './marker';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFlat: flats[0],
      flats
    };
  }

  selectFlat = (index) => {
    this.setState({ selectedFlat: flats[index] });
    // console.log(this.state.selectedFlat);
  }

  render() {
    return (
      <div>
        <FlatList
          flats={flats}
          selectFlat={this.selectFlat}
        />
        <div className="map-container">
        </div>
      </div>
    );
  }
}
