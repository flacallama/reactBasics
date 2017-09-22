import React, { Component } from 'react';
class Header extends Component {

  render () {
    return (
      <div className='header'>
        <h3>{this.props.headerText}&apos;s store</h3>
      </div>
    )
  }
}
export default Header;
