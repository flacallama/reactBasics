import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class Header extends Component {

  render () {
    return (
      <div className='header'>
        <h3>{this.props.namez}&apos;s store</h3>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    namez: state.namez
  }
}

export default connect(mapStateToProps)(Header);
