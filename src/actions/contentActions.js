import * as types from './actionTypes'

export const agree = () => ({
  type: types.AGREE
})
export const disagree = () => ({
  type: types.DISAGREE
})
export const refuse = () => ({
  type: types.REFUSE
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
