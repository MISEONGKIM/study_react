import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { AppContainer } from "react-hot-loader";
import { createStore } from "redux"; //스토어 만드는 함수
import reducers from "./reducers";
//import * as actions from "./actions"; //액션 생성
import { Provider } from "react-redux";
const store = createStore(reducers);
/*
console.log(store.getState());
const unsubscribe = store.subscribe(() => console.log(store.getState())); //스토어에 변화가 있을 때 마다 매개변수로 넘어온 함수실행
store.dispatch(actions.increment()); //액션 보내기
store.dispatch(actions.increment());
store.dispatch(actions.decrement());
store.dispatch(actions.setColor([200, 200, 200]));

unsubscribe();
store.dispatch(actions.setColor([210, 210, 210])); //unsubscribe해서 실행 안됨
*/
ReactDOM.render(
  <Provider store={store}>
    <AppContainer>
      <App />
    </AppContainer>
  </Provider>,
  document.getElementById("root")
);

if (module.hot) {
  module.hot.accept("./components/App", () => {
    const NextApp = require("./components/App").default; // eslint-disable-line global-require
    ReactDOM.render(
      <AppContainer>
        <NextApp />
      </AppContainer>,
      document.getElementById("root")
    );
  });
}
