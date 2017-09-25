import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux'

class Footer extends Component {

  render () {
    return (
      <div className='footer'>
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

export default connect(mapStateToProps)(Footer);
