import React from 'react';
import Flat from './flat';

const FlatList = ({ flats, selectFlat, selectedFlat }) => {
  const renderList = () => {
    return flats.map((flat, index) => {
      return (
        <Flat
          flat={flat}
          key={flat.lng}
          index={index}
          selectFlat={selectFlat}
          selected={flat.lat === selectedFlat.lat}
        />
      );
    });
  };

  return (
    <div className="flat-list">
      {renderList()}
    </div>
  );
};

export default FlatList;
