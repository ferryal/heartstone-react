import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom'
import { Grid, Image, Header } from 'semantic-ui-react'
import '../App.css';


class CardCollection extends Component {
  renderHeroes() {
    if(this.props.listhero) {
      return this.props.listhero.map(r => {
        return (
          <Grid.Column key={r.cardId}>
            <div className='borderless row1'>
              <div className='rotateRightImg'>
                <Image  src='images/Card_Back.gif' size='small' />
              </div>
              <div className='rotateLeftImg'>
                <Link to={r.cardId}>
                  <Image  src={r.img} size='small' />
                </Link>
              </div>
            </div>
              <div className='row1'>
                <Image src='images/logo-sm.png'/>
                <Link to={r.cardId}>
                  <Header className='name-md'>{r.name}</Header>
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
        {this.renderHeroes()}
      </Grid>
    );
  }
}

//connects root reducer to props
function mapStateToProps(state) {
  return {
    listhero: state.listhero
  }
}

export default connect(mapStateToProps, null)(CardCollection);
