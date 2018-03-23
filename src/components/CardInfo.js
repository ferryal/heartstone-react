import React, { Component } from 'react'
import {connect} from 'react-redux'
import { Grid, Image, Divider } from 'semantic-ui-react'
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
      return this.props.heroinfo.map(card => {
        return (
          <Grid.Column key={card.cardId}>
            <Grid centered columns={2} padded>
              <Grid.Column>
                <div className='row2'>
                  <div className='rotateRightImg'>
                    <Image  src='images/Card_Back.gif' size='medium' />
                  </div>
                  <div  className='rotateLeftImg' >
                    <Image src={card.img} size='medium'/>
                  </div>
                </div>
                </Grid.Column>
                <Grid.Column>
                  <p className='title'>{card.name}</p>
                  <Image  className='images' src='images/logo-sm.png' size='mini' centered />
                  <Divider section />
                  <div className='row3'>
                    <ul>
                      <li><b>Type: </b> {card.type}</li>
                      <li><b>Class: </b> {card.playerClass}</li>
                      <li><b>Rarity: </b> {card.rarity}</li>
                      <li><b>Set: </b> {card.cardSet}</li>
                      <li><b>Race: </b> {card.race}</li>
                      <li><b>Crafting Cost: </b> {card.cost}</li>
                      <li><b>Attack: </b> {card.attack}</li>
                      <li><b>Health: </b> {card.health}</li>
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

function mapStateToProps(state) {
  return {
    heroinfo: state.heroinfo
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getCardInfo: getCardInfo
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CardInfo)
