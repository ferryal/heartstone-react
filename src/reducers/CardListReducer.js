import {GET_CARD_COLLECTION} from '../actions/types'

export default function(state=[], action){
  switch (action.type) {
    case GET_CARD_COLLECTION:
      return action.payload;

    default:
      return state;      
  }
}
