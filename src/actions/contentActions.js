import * as types from './actionTypes'

export const agree = () => {}
export const disagree = () => {}
export const refuse = () => {}
export const updateContent = (payload) => ({
  type: types.UPDATE_CONTENT,
  payload: payload
})

export const fetchData = (payload) => ({
  type: types.FETCH_DATA,
  payload: payload
})
