import React, { Component } from 'react';
import '../App.css';
import CardCollection from './CardCollection'
import CTAHeader from './CTAHeader'
import NavBar from './NavBar'
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
          <CTAHeader />
          <NavBar />
          <Image className='banner-header' src='images/banner-desktop.png' fluid/>
        </Grid.Column>
        <Grid.Column>
          <Header textAlign='center' size='medium'>A fast-paced strategy card game for everyone.</Header>
          <Divider hidden />
          <p className='title'>Cards</p>
          <Divider section />
          <CardCollection />
        </Grid.Column>
        <Grid.Column className='footer'>
         <Image src='images/footer-desktop.png' />
       </Grid.Column>
      </Grid>
    );
  }
}

function mapStateToProps(state) {
  return {
    listhero: state.listhero,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getCardCollection: getCardCollection
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
