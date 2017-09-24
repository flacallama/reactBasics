import React, { Component } from 'react';

import {connect} from 'react-redux';

import './App.css';
import NameBox from './components/NameBox'
import Header from './components/Header'
import Footer from './components/Footer'



class App extends Component {

  state = {
    name: "",
    typedName: "",
    headerText: 'header text from state',
    footerText: 'footer text from state'
  }

  changeText = (e) => {
    console.log("changetext called", e)
    this.setState({name: this.state.typedName})
  }

  onChangeText = (e) => {
    this.setState({typedName: e.target.value})
  }

  render() {
    return (
      <div className="App">
      
        <Header headerText={this.state.headerText}/>

        <div className='redux'>

          <p classname='btn '>{this.props.data.namez}</p>
          <form onSubmit={(e)=>{
              this.props.change(e.target.newName.value)
              e.target.newName.value = ''
              e.preventDefault()
            }}>
            <input className='btn' type='text' name='newName'></input>
            <button className='btn' type='submit'>submit</button>
          </form>

          <NameBox
            name={this.state.name}
            changeText={this.changeText}
            onChangeText={this.onChangeText}/>

        </div>
        <Footer footerText={this.state.footerText}/>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    data: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    change: (nameParam) => dispatch({
      type: "CHANGE",
      nameParam
    })
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
