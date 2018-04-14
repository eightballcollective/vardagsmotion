import initialState from './initialState';
import {
  UPDATE_CONTENT,
} from '../actions/actionTypes';
import { updateContent } from '../actions/sidebarActions'

function sidebarReducer(state = initialState.sidebar, { type, payload }) {
  switch(type) {
    case UPDATE_CONTENT: {
      return updateContent(payload)
    }
    default: {
      return state
    }
  }
}

export default sidebarReducer
