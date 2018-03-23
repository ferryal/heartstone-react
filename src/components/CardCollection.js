import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom'
import { Grid, Image, Header } from 'semantic-ui-react'
import '../App.css';


class CardCollection extends Component {
  renderHero() {
    if(this.props.listhero) {
      return this.props.listhero.map(card => {
        return (
          <Grid.Column key={card.cardId}>
            <div className='borderless row1'>
              <div className='rotateRightImg'>
                <Image  src='images/Card_Back.gif' size='small' />
              </div>
              <div className='rotateLeftImg'>
                <Link to={card.cardId}>
                  <Image  src={card.img} size='small' />
                </Link>
              </div>
            </div>
              <div className='row1'>
                <Image src='images/logo-sm.png'/>
                <Link to={card.cardId}>
                  <Header className='name-md'>{card.name}</Header>
                </Link>
              </div>
          </Grid.Column>
        );
      });
    }
  }
  render() {
    return (
      <Grid centered columns={3} padded>
        {this.renderHero()}
      </Grid>
    );
  }
}

function mapStateToProps(state) {
  return {
    listhero: state.listhero
  }
}

export default connect(mapStateToProps, null)(CardCollection);
