import * as types from './actionTypes'

export const agree = (payload) => ({
  type: types.AGREE,
  payload: payload
})
export const disagree = (payload) => ({
  type: types.DISAGREE,
  payload: payload
})
export const refuse = (payload) => ({
  type: types.REFUSE,
  payload: payload
})
export const updateContent = (payload) => {
  return {
    type: types.UPDATE_CONTENT,
    payload: payload
  }
}

export const fetchData = (payload) => ({
  type: types.FETCH_DATA,
  payload: payload
})

export const fetchSummary = (payload) => ({
  type: types.FETCH_SUMMARY,
  payload: payload
})

export const updateSummary = (payload) => ({
  type: types.UPDATE_SUMMARY,
  payload: payload
})
