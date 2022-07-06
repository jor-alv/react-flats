import React, { Component } from 'react';

import flats from '../data/flats';
import FlatList from './flat_list';
import Map from './map';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { selectedFlat: flats[0] };
  }

  selectFlat = index => { this.setState({ selectedFlat: flats[index] });
  }

  render() {
    return (
      <div>
        <FlatList
          flats={flats}
          selectFlat={this.selectFlat}
          selectedFlat={this.state.selectedFlat}
        />
        <Map selectedFlat={this.state.selectedFlat} />
      </div>
    );
  }
}
