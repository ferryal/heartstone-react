import {GET_CARD_INFO} from './types.js'
import axios from 'axios'


export default function getCardInfo(query){
  return dispatch => {
    axios.get(`https://omgvamp-hearthstone-v1.p.mashape.com/cards/${query}`, {
      headers: {
        'X-Mashape-key': 'ykoXIKiFLwmshjhEaRG4GEuMV0Yip1XfeY1jsnMppv0TcpwIZl',
        'Accept': 'application/json'
      }
    })
      .then(res => {
        console.log(res.data);
        dispatch(getCardInfoAsync(res.data));
      })
      .catch(err => {
        throw (err)
      })
  }
}

function getCardInfoAsync(heroinfo){
  return {
    type: GET_CARD_INFO,
    payload: heroinfo
  };
}
