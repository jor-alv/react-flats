import React, { Component } from 'react';

import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import flats from '../data/flats';
import orangeMarker from '../assets/map-marker-orange.png'
// import redMarker from '../assets/map-marker-red.png'
import FlatList from './flat_list';

mapboxgl.accessToken = 'pk.eyJ1Ijoiai1vLXItZy1lIiwiYSI6ImNsMnRiODF4bTAybGgzZG53ZTlqc2UyYmoifQ.pBvgh1eMKdyxqdCRPiI_jw';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFlat: flats[0],
      // lat: this.state.selectedFlat.lat,
      // lng: this.state.selectedFlat.lng,
      lng: flats[0].lng,
      lat: flats[0].lat,
      zoom: 9
    };
    this.mapContainer = React.createRef();
  }

  componentDidMount() {
    // creates map
    const map = new mapboxgl.Map({
      container: this.mapContainer.current,
      // style: 'mapbox://styles/mapbox/streets-v11'
      style: 'mapbox://styles/j-o-r-g-e/cl3w1o325001b14ph6xs4sy5e'
    });

    // creates markers for all flats
    const markers = flats.map((flat) => ({
      lng: flat.lng,
      lat: flat.lat,
      image: orangeMarker
    }));

    // creates HTML element for markers and adds markers to the map
    markers.forEach((marker) => {
      const customMarker = document.createElement("div");
      customMarker.className = "marker";
      customMarker.style.backgroundImage = `url('${marker.image}')`;
      customMarker.style.backgroundSize = "contain";
      customMarker.style.width = "25px";
      customMarker.style.height = "40px";
      new mapboxgl.Marker(customMarker).setLngLat([ marker.lng, marker.lat ]).addTo(map);
    });

    // fits map to markers
    const bounds = new mapboxgl.LngLatBounds();
    markers.forEach(marker => bounds.extend([ marker.lng, marker.lat ]));
    map.fitBounds(bounds, { padding: 150, maxZoom: 15, duration: 2400 });
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
        <div ref={this.mapContainer} className="map-container"></div>
      </div>
    );
  }
}
