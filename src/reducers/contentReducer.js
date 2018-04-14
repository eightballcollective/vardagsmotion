import initialState from './initialState'
import {
  AGREE,
  DISAGREE,
  REFUSE,
  RECEIVE_CONTENT,
  FETCH_DATA
} from '../actions/actionTypes'

function contentReducer(state = initialState.content, { type, payload }) {
  switch(type) {
  case AGREE: {
    return state
  }
  case DISAGREE: {
    return state
  }
  case REFUSE: {
    return state
  }
  case RECEIVE_CONTENT: {
    console.log('RECEIVE_CONTENT in contentReducer')
    return handleReceiveContent(state, payload)
  }
  case FETCH_DATA: {
    return state
  }
  default: {
    return state
  }
  }
}

const handleReceiveContent = (state, content) => {
  return {
    ...state,
    content
  }
}

export default contentReducer
