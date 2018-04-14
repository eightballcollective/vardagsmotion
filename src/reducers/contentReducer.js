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
    return handleAgree(state)
  }
  case DISAGREE: {
    return handleDisagree(state)
  }
  case REFUSE: {
    return handleRefuse(state)
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

const handleAgree = (state) => {
  console.log(state)
  return state
}

const handleDisagree = (state) => ({
  ...state,
})

const handleRefuse = (state) => ({
  ...state,
})

const handleReceiveContent = (state, content) => {
  return {
    ...state,
    content
  }
}

export default contentReducer
