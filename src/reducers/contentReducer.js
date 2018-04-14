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
    return handleAgree(state)
  }
  case DISAGREE: {
    return handleDisagree(state)
  }
  case REFUSE: {
    return handleRefuse(state)
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

const handleFetchData = (state, payload) => {
  return state
}

const handleUpdateContent = (state, content) => {
  return {
    ...state,
    content,
    isPopulated: true
  }
}

export default contentReducer
