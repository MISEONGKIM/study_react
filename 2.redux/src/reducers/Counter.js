//
import * as types from "../actions/ActionTypes";

//리듀서의 초기상태 정하기
//리듀서의 함수가 파라미터로 이전상태 값과 액션을 전달받을 건데
//가장 처음에 이전상태가 정의되어 있지 않으므로 그때 사용할 초기상태 여기서 작성
const initialState = {
  //초기값 설정
  number: 0
};

//파라미터로 넘어온 액션은 액션생성자로 만들어진 액션객체 디스패치로 전달됨
export default function counter(state = initialState, action) {
  switch (action.type) {
    case types.INCREMENT:
      return { ...state, number: state.number + 1 };
    case types.DECREMENT:
      return { ...state, number: state.number - 1 };
    default:
      return state;
  }
}
