import {GET_CARD_INFO} from '../actions/types'


export default function(state=[], action){
  switch (action.type){
    case GET_CARD_INFO:
      return action.payload;

    default:
      return state;
  }
}
