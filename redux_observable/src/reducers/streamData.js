import produce from 'immer';
import * as Action from '../actions';

const initialState = {
  apiData: [],
  basketData: {
      TLT: {askArr: [], bidArr: []},
      LQD: {askArr: [], bidArr: []}, 
      SHE: {askArr: [], bidArr: []}, 
      PQRD: {askArr: [], bidArr: []}
  },
  basketData1: {
    askArr: [],
    bidArr: []
  }
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case Action.UPDATE_STREAM_DATA: {
      console.log("In reducer");
      console.log(action.payload);
      const temAppData = state.apiData.concat(action.payload);
      return {...state, temAppData};
    }

    case Action.LOAD_BASKET: {
      console.log("In LOAD_BASKET reducer");
      console.log(action.payload);
      const temAppData = state.apiData.concat(action.payload);
      return {...state, temAppData};
    }

    case Action.UPDATE_BASKET: {
      console.log("In UPDATE_BASKET reducer");
      let jsonObj = action.payload;
      let newAskArr = [new Date(jsonObj.timeStamp).getTime(), jsonObj.askPrice];
      let newBidArr = [new Date(jsonObj.timeStamp).getTime(), jsonObj.bidPrice];

      /* let temBasketData = state.basketData;
      temBasketData[jsonObj.ticker].askArr.push(newAskArr);
      temBasketData[jsonObj.ticker].bidArr.push(newBidArr);  */
      
      let askArr = state.basketData[jsonObj.ticker].askArr.slice(0);
      let bidArr = state.basketData[jsonObj.ticker].bidArr.slice(0);
      askArr.push(newAskArr);
      bidArr.push(newBidArr);

      let newState = {
        ...state,
        basketData: {
          ...state.basketData,
          [jsonObj.ticker]: {
            askArr,
            bidArr
          }
        }
      }
      console.log(newState);
      return newState;
    }
    default:
      return state;
  }
}