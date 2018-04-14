import { UPDATE_CONTENT } from './actionTypes'

export const updateContent = (payload) => {
  if (payload.dispatch) payload.dispatch(update(payload))
}

const update = (payload) => {
  return {
    type: UPDATE_CONTENT,
    payload: payload
  }
}
