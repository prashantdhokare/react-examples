import { combineReducers } from 'redux';
import * as streamData from './streamData';

/**
 * root reduces
 */
export default combineReducers({
  quotes: streamData.reducer
});