import React, { Component } from 'react'
import {connect} from 'react-redux'
import { Grid, Card, Image, Divider } from 'semantic-ui-react'
import {bindActionCreators} from 'redux';
import getCardInfo from '../actions/get_card_info'
import CTAHeader from './CTAHeader'
import NavBar from './NavBar'


class CardInfo extends Component {
  componentDidMount() {
   this.props.getCardInfo(this.props.match.params.cardId)
 }

  renderheroinfo() {
    if(this.props.heroinfo) {
      return this.props.heroinfo.map(r => {
        return (
          <Grid.Column key={r.cardId}>
            <Grid centered columns={2} padded>
              <Grid.Column>
                <div className='row2'>
                  <div className='rotateRightImg'>
                    <Image  src='images/Card_Back.gif' size='medium' />
                  </div>
                  <div  className='rotateLeftImg' >
                    <Image src={r.img} size='medium'/>
                  </div>
                </div>
                </Grid.Column>
                <Grid.Column>
                  <p className='title'>{r.name}</p>
                  <Image  className='title' src='images/logo-sm.png' size='mini' />
                  <Divider section />
                  <div className='row3'>
                    <ul>
                      <li><b>Type: </b> {r.type}</li>
                      <li><b>Class: </b> {r.playerClass}</li>
                      <li><b>Rarity: </b> {r.rarity}</li>
                      <li><b>Set: </b> {r.cardSet}</li>
                      <li><b>Race: </b> {r.race}</li>
                      <li><b>Crafting Cost: </b> {r.cost}</li>
                      <li><b>Attack: </b> {r.attack}</li>
                      <li><b>Health: </b> {r.health}</li>
                    </ul>
                  </div>
                </Grid.Column>
              </Grid>
          </Grid.Column>
        );
      });
    }
  }
  render() {
    return (
      <Grid centered columns={1} padded>
        <CTAHeader />
        <NavBar />
        {this.renderheroinfo()}
      </Grid>
    );
  }
}

//connects root reducer to props
function mapStateToProps(state) {
  return {
    heroinfo: state.heroinfo
  }
}

//connects redux actions to props
function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getCardInfo: getCardInfo
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CardInfo)
