import React, { Component } from 'react'
import {connect} from 'react-redux'
import { Grid, Card, Image, Divider } from 'semantic-ui-react'
import {bindActionCreators} from 'redux';
import getCardInfo from '../actions/get_card_info'


class CardInfo extends Component {
  componentDidMount() {
   this.props.getCardInfo(this.props.match.params.cardId)
 }

  renderheroinfo() {
    if(this.props.heroinfo) {
      return this.props.heroinfo.map(r => {
        return (
          <Grid.Column key={r.cardId}>
            <Card className='borderless' fluid centered>
              <Grid centered columns={2} padded>
                <Grid.Column>
                  <Card.Content textAlign='center'>
                    <Image className='rotateRightImgDetail' src='images/Card_Back.gif' size='medium' />
                      <Image className='rotateLeftImgDetail' src={r.img} size='medium' />
                  </Card.Content>
                </Grid.Column>
                <Grid.Column>
                  <Card.Content textAlign='center'>
                    <p className='title'>{r.name}</p>
                    <Image src='images/logo-sm.png' size='mini' />
                    <Divider section />
                    <p className='description'>
                      <b>
                        Type:
                      </b>
                      &nbsp;{r.type}
                    </p>
                    <p className='description'>
                      <b>
                        Class:
                      </b>
                      &nbsp;{r.playerClass}
                    </p>
                    <p className='description'>
                      <b>
                        Rarity:
                      </b>
                      &nbsp;{r.rarity}
                    </p>
                    <p className='description'>
                      <b>
                        Set:
                      </b>
                      &nbsp;{r.cardSet}
                    </p>
                    <p className='description'>
                      <b>
                        Race:
                      </b>
                      &nbsp;{r.race}
                    </p>
                    <p className='description'>
                      <b>
                        Crafting Cost:
                      </b>
                      &nbsp;{r.cost}
                    </p>
                    <p className='description'>
                      <b>
                        Attack:
                      </b>
                      &nbsp;{r.attack}
                    </p>
                    <p className='description'>
                      <b>
                        Health:
                      </b>
                      &nbsp;{r.health}
                    </p>
                  </Card.Content>
                </Grid.Column>
              </Grid>
            </Card>
          </Grid.Column>
        );
      });
    }
  }
  render() {
    return (
      <Grid centered columns={1} padded>
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
