import React, { Component } from 'react';
import '../App.css';
import CardCollection from './CardCollection'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import getCardCollection from '../actions/get_card_collection'
import { Grid, Header, Divider, Image } from 'semantic-ui-react'


class App extends Component {
  componentDidMount() {
   this.props.getCardCollection()
 }

  render() {
    return (
      <Grid centered columns={1}>
        <Grid.Column>
          {/* <InfoPanel />
          <MenuBar /> */}
          <Image className='banner-header' src='images/banner-desktop.png' fluid/>
        </Grid.Column>
        <Grid.Column>
          <Header textAlign='center' size='medium'>A fast-paced strategy card game for everyone.</Header>
          <Divider hidden />
          <p className='title'>Cards</p>
          <Divider section />
          <CardCollection />
        </Grid.Column>
      </Grid>
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
