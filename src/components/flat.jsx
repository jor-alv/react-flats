import React, { Component } from 'react';

export default class Flat extends Component {
  handleClick = () => {
    this.props.selectFlat(this.props.index);
  }

  render () {
    return (
      <div className={`card${this.props.selected ? ' active' : ''}`} style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.2)), url('${this.props.flat.imageUrl}')` }}>
        <div className="card-category">
          {this.props.flat.price} {this.props.flat.priceCurrency}
        </div>
        <div className="card-description">
          <h2>{this.props.flat.name}</h2>
        </div>
        <a className="card-link" href="#" onClick={this.handleClick} /> {/* eslint-disable-line jsx-a11y/anchor-has-content, jsx-a11y/anchor-is-valid */}
      </div>
    );
  }
}
