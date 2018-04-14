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
    return handleAnswer(state, payload)
  }
  case DISAGREE: {
    return handleAnswer(state, payload)
  }
  case REFUSE: {
    return handleAnswer(state, payload)
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

const handleAnswer = (state, payload) => {
  let currentId = state.content.id
  return {
    ...state,
    answers: [
      // Remove any old answers for the id
      ...state.answers.filter(answer => answer.id != currentId),
      // Add new answer
      {
        id: currentId,
        answer: payload,
      }
    ]
  }
}

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
