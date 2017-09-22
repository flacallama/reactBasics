import React, { Component } from 'react';
import NameOutput from './NameOutput'
class NameBox extends Component {

  state = {
    typedName: ''
  }

  render () {
    return (
      <div className='NameBox'>
        <NameOutput name={this.props.name}/>
        <input className='btn' type='text' onChange={(e) => this.props.onChangeText(e)}>
        </input>
        <button className="btn" type='submit' onClick={(e) => this.props.changeText()}> submit </button>
      </div>
    )
  }
}
export default NameBox;
