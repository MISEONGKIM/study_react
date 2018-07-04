import React from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Topics from "./Topics";
import NotFound from "./NotFound";

const App = () => {
  return (
    //<a href ='/'>home</a> 대신에 Link 컴포넌트 사용 이걸 사용함으로 서 클릭되었을 때 리로딩 방지함 그대신 우리가  볼 컴포넌트만 교체
    //props to의 값을 링크의 path로 설정
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">home</Link>{" "}
          </li>
          <li>
            {" "}
            <Link to="/about">About</Link>{" "}
          </li>
          <li>
            <Link to="/topics">Topics</Link>{" "}
          </li>
        </ul>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/topics" component={Topics} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
