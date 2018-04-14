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
export const receiveContent = (payload) => {
  return {
    type: types.RECEIVE_CONTENT,
    payload: payload
  }
}
export const fetchData = () => {console.log('fetch')}

export const updateContent = content => ({
  type: types.RECEIVE_CONTENT,
  payload: content
})
