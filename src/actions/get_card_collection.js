import { GET_CARD_COLLECTION } from './types'
import axios from 'axios'


export default function getCardCollection() {
  return dispatch => {
    axios.get(`https://omgvamp-hearthstone-v1.p.mashape.com/cards/sets/Blackrock Mountain`, {
      headers: {
        'X-Mashape-key': 'ykoXIKiFLwmshjhEaRG4GEuMV0Yip1XfeY1jsnMppv0TcpwIZl',
        'Accept': 'application/json'
      }
    })
      .then(res => {
        console.log(res.data);
        dispatch(getCardCollectionAsync(res.data));
      })
      .catch(err => {
        throw (err)
      })
  }
}

function getCardCollectionAsync(listhero) {
  return {
    type: GET_CARD_COLLECTION,
    payload: listhero
  }
}
