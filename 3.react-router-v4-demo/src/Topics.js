import React from "react";

const Topics = ({ pathname }) => {
  //match 컴포넌트가 전달해줌,라우트에 설정 한 path
  return (
    <div>
      <h2>topics</h2>
      {pathname}
    </div>
  );
};

export default Topics;
