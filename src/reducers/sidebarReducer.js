import initialState from './initialState';
import {
  UPDATE_CONTENT,
} from '../actions/actionTypes';

function sidebarReducer(state = initialState.sidebar, { type, payload }) {
  switch(type) {
    case UPDATE_CONTENT: {
      console.log('UPDATE_CONTENT in reducer')
      return handleUpdateContent(state, payload)
    }
    default: {
      return state
    }
  }
}

const handleUpdateContent = (state, payload) => {
  console.log('HANDLE')
  return state
}

export default sidebarReducer
