import { combineReducers } from 'redux';
import content from './reducers/contentReducer';
import sidebar from './reducers/sidebarReducer';


const rootReducer = combineReducers({
  content,
  sidebar
});

export default rootReducer;
