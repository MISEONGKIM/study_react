import React from "react";
//여기선 pathName props 못씀 제대로 된 라우트가 아니기 때문
//그대신 location
const NotFound = ({ location }) => {
  return (
    <div>
      <h2>not found {location.pathname}</h2>
    </div>
  );
};

export default NotFound;
