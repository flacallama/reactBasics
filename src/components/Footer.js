import React, { Component } from 'react';
class Footer extends Component {

  render () {
    return (
      <div className='footer'>
        <h3>{this.props.footerText}&apos;s store</h3>
      </div>
    )
  }
}
export default Footer;
