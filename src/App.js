import React, { Component } from 'react';

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
        <NameBox
          name={this.state.name}
          changeText={this.changeText}
          onChangeText={this.onChangeText}/>
        <Footer footerText={this.state.footerText}/>
      </div>
    );
  }
}

export default App;
