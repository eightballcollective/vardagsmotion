import * as types from './actionTypes'

export const setActive = (id) => ({
  type: types.SET_ACTIVE,
  payload: {id: id}
})

export const fetchDecisions = (payload) => ({
  type: types.FETCH_DECISIONS,
  payload: payload
})
