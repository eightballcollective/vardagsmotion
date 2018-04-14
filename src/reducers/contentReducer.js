import initialState from './initialState'
import {
  AGREE,
  DISAGREE,
  REFUSE,
  UPDATE_CONTENT,
  FETCH_DATA,
  FETCH_SUMMARY,
  UPDATE_SUMMARY,
  UPDATE_VOTING_DATA
} from '../actions/actionTypes'
import { updateSummary } from '../actions/contentActions'
import store from '../store'
import api from '../api'

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
  case UPDATE_VOTING_DATA: {
    return handleUpdateVotingData(state, payload)
  }
  case UPDATE_CONTENT: {
    return handleUpdateContent(state, payload)
  }
  case FETCH_DATA: {
    handleFetchData(state, payload.id)
  }
  case FETCH_SUMMARY: {
    return handleFetchSummary(state, payload)
  }
  case UPDATE_SUMMARY: {
    return handleUpdateSummary(state, payload)
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

const handleUpdateVotingData = (state, payload) => ({
  ...state,
  votingData: payload
})

const handleFetchData = (state, id) => {
  api.getPartyVotes(id)
    .then(res => store.dispatch({
      type: UPDATE_VOTING_DATA,
      payload: res
    }))
  return state
}

const handleFetchSummary = (state, payload) => {
  api.parseSummary(payload).then(data => {
    store.dispatch(updateSummary(data))
  })
  return state
}

const handleUpdateSummary = (state, payload) => ({
  ...state,
  summary: payload
})

const handleUpdateContent = (state, content) => {
  return {
    ...state,
    content,
    isPopulated: true
  }
}

export default contentReducer
