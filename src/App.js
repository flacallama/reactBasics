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
        {/*
        <Header headerText={this.state.headerText}/>
          */}

          {this.props.data.namez}
          <button onClick={this.props.change}>Change</button>
        <form onSubmit={(e)=>{
            this.props.change(e.target.newName.value)
            e.target.newName.value = ''
            e.preventDefault()
          }}>
          <input type='text' name='newName'></input>
          <button type='submit'>submit</button>
        </form>

        <NameBox
          name={this.state.name}
          changeText={this.changeText}
          onChangeText={this.onChangeText}/>
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
