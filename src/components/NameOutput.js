import React, { Component } from 'react';




class NameOutput extends Component {

  render () {
    return (
      <div className="nameOutput btn">
        <p className="left">{this.props.name}</p>
      </div>
    )
  }
}
export default NameOutput;
