import * as types from "./ActionTypes"; // == import {INCREMENT, DECREMENT, SET_COLOR} from './ActionTypes';
//매번 액션객체 생성하기 귀찮음 -> 액션객체생성자 함수 사용

export function increment() {
  return {
    type: types.INCREMENT
  };
}

export function decrement() {
  return {
    type: types.DECREMENT
  };
}

export function setColor(color) {
  return {
    type: types.SET_COLOR,
    color // == color : color
  };
}
