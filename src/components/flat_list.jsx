import React from 'react';
import Flat from './flat';

const FlatList = ({ flats, selectFlat }) => {
  const renderList = () => {
    return flats.map((flat, index) => {
      return (
        <Flat
          flat={flat}
          key={flat.lng}
          index={index}
          selectFlat={selectFlat}
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
