import React, { Component } from "react";
import Value from "./Value";
import Control from "./Control";
import { connect } from "react-redux";
//import { connect, bindActionCreators } from "react-redux";
import * as actions from "../actions";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.setRandomColor = this.setRandomColor.bind(this);
  }
  setRandomColor() {
    const color = [
      //200~255
      Math.floor(Math.random() * 55 + 200),
      Math.floor(Math.random() * 55 + 200),
      Math.floor(Math.random() * 55 + 200)
    ];
    this.props.handleSetColor(color);
  }
  render() {
    const color = this.props.color;
    const style = {
      //'rgb('+ color[0] + ',' + color[1]')' 이렇게 한 걸 expression 사용해서 밑에 처럼 표현 &{}안에 변수나 상수
      background: `rgb(${color[0]}, ${color[1]}, ${color[2]})`
    };
    return (
      //this.props.store.getState().counter.number 이렇게 했어야 했는데
      // mapStateToProps랑 mapDispatchToProps같은 옵션 사용해서 this.props.number 이렇게 사용 가능
      <div style={style}>
        <Value number={this.props.number} />
        <Control
          onPlus={this.props.handleIncrement}
          onSubtract={this.props.handleDecrement}
          onRandomizeColor={this.setRandomColor}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  //그냥 파라미터 이름이 state인 것
  return {
    number: state.counter.number,
    color: state.ui.color
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleIncrement: () => {
      dispatch(actions.increment());
    },
    handleDecrement: () => {
      dispatch(actions.decrement());
    },
    handleSetColor: color => {
      dispatch(actions.setColor(color));
    }
  };

  //위 소스같은 처리 자동으로 해줌 액션생성자에 파라미터있다면 자동으로 설정해줌(setColor 같은 경우)
  //단점 :  위에는 handleIncrement 이런식으로 임의로 이름을 설정 했는데 이렇게 하면 액션생성자이름 그대로 사용됨
  // return bindActionCreators(actions, dispatch);
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter); //connect가 반환하는 건 컴포넌트를 리덕스에 연결하는 또다른 함수 반환
