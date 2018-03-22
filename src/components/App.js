import React, { Component } from 'react';
import '../App.css';
import CardCollection from './CardCollection'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import getCardCollection from '../actions/get_card_collection'

class App extends Component {
  componentDidMount() {
   this.props.getCardCollection()
 }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <CardCollection />
      </div>
    );
  }
}

//connects root reducer to props
function mapStateToProps(state) {
  return {
    listhero: state.listhero,
  }
}

//connects redux actions to props
function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getCardCollection: getCardCollection
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
