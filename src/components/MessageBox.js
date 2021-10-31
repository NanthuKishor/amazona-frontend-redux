import React from "react";

function MessageBox(props) {
  return <div className={`alert alert-${props.varient || "info"}`}>
      {props.error || props.children}
  </div>;
}

export default MessageBox;
