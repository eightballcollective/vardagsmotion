import initialState from './initialState'
import {
  SET_ACTIVE,
  FETCH_DECISIONS
} from '../actions/actionTypes'
import api from '../api'

function sidebarReducer(state = initialState.sidebar, { type, payload }) {
  switch(type) {
  case FETCH_DECISIONS: {
    return handleFetchDecisions(state, payload)
  }
  case SET_ACTIVE: {
    return handleSetActive(state, payload.id)
  }
  default: {
    return state
  }
  }
}

const handleFetchDecisions = (state, payload) => {
  return {
    ...state,
    decisions: payload
  }
}

const handleSetActive = (state, id) => {
  return {
    ...state,
    decisions: state.decisions.map(decision => {
      decision.active = decision.id === id ? true : false
      return decision
    })
  }
}

export default sidebarReducer
