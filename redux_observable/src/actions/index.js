/**
 * Created by Hyungwu Pae on 6/12/17.
 */

/**
 * Action types
 */
export const GET_STREAM_DATA = 'GET_STREAM_DATA';
export const UPDATE_STREAM_DATA = 'UPDATE_STREAM_DATA';
export const LOAD_BASKET = 'LOAD_BASKET';
export const UPDATE_BASKET = 'UPDATE_BASKET';
export const START_BASKET_STREAM = 'START_BASKET_STREAM';

/**
 * Actions
 */
export function fetchStreamData () {
  console.log('get stream data action')
  return {
    type: GET_STREAM_DATA,
    payload: null
  };
}

export function updateStreamData (data) {
  console.log('update stream data action')
  return {
    type: UPDATE_STREAM_DATA,
    payload: data
  };
}

export function loadBasket () {
  console.log('loadBasket action')
  return {
    type: LOAD_BASKET,
    payload: null
  };
}

export function startBasketStream () {
  console.log('startBasketStream action')
  return {
    type: START_BASKET_STREAM,
    payload: null
  };
}

export function updateBasket (data) {
  console.log('update action')
  return {
    type: UPDATE_BASKET,
    payload: data
  };
}

