import * as types from './actionTypes'

export const agree = () => {}
export const disagree = () => {}
export const refuse = () => {}
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
