import initialState from './initialState'
import {
  AGREE,
  DISAGREE,
  REFUSE,
  UPDATE_CONTENT,
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
  case UPDATE_CONTENT: {
    return handleUpdateContent(state, payload)
  }
  case FETCH_DATA: {
    return handleFetchData(state, payload)
  }
  default: {
    return state
  }
  }
}

const handleFetchData = (state, payload) => {
  return state
}

const handleUpdateContent = (state, content) => {
  return {
    ...state,
    content
  }
}

export default contentReducer
