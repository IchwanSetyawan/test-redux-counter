import React from "react";

const Button = (props) => {
  return (
    <>
      <button class="btn btn-primary" onClick={props.onClick}>
        <strong>{props.name} </strong>
      </button>
    </>
  );
};

export default Button;
