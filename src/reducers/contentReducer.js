import initialState from './initialState';
import {
  AGREE,
  DISAGREE,
  REFUSE,
  RECEIVE_DATA
} from '../actions/actionTypes';
import {
  agree,
  disagree,
  refuse,
  receiveData
} from '../actions/contentActions'

function contentReducer(state = initialState.content, { type, payload }) {
  switch(type) {
    case AGREE: {
      return agree(payload)
    }
    case DISAGREE: {
      return disagree(payload)
    }
    case REFUSE: {
      return refuse(payload)
    }
    case RECEIVE_DATA: {
      return receiveData(payload)
    }
    default: {
      return state
    }
  }
}

export default contentReducer
