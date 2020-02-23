import { combineEpics } from 'redux-observable';
import {startBasketStream} from "./streamData";
// import * as quotes from "./quotes";


export default combineEpics(
  startBasketStream
);