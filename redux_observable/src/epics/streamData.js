import 'rxjs';
import { ajax } from 'rxjs/observable/dom/ajax';
import { Observable} from 'rxjs';
import { DOM } from 'rx-dom';
import { ofType} from 'redux-observable';
import {concatMap, delay, mapTo, map, mergeMap} from 'rxjs/Operators';
import * as Action from '../actions';
import {fromEventSource} from '../utils/utils';

/* export const getStreamData = (action$) => {
  console.log("In getStreamdata epic");
  return action$.pipe(
      ofType(Action.GET_STREAM_DATA),
      setData("http://192.168.0.104:8080/comment/stream")
    );
} 
 */
export const startBasketStream = action$ => action$.pipe(
  ofType(Action.START_BASKET_STREAM),
  mergeMap(fromEventSource("http://192.168.0.102:8080/basket/stream", null).subscribe(data => Action.updateBasket(data)))
);

/* export const startBasketStream = action$ =>
  action$.ofType(Action.START_BASKET_STREAM)
    .mergeMap(() =>
      DOM.fromEventSource("http://192.168.0.102:8080/basket/stream")
        .map(data => Action.updateBasket(data))
    ); */

export const getStreamData = action$ => action$.pipe(
  ofType(Action.GET_STREAM_DATA),
  delay(1000), // Asynchronously wait 1000ms then continue
  mapTo(Action.updateStreamData({user:'Prashant'}))
);  