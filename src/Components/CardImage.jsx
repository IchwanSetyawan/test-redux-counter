import React from "react";

const CardImage = (props) => {
  return (
    <>
      <div className="col px-3 image-list">
        <img src={props.name} className="img-thumbnail " alt="image" />
      </div>
    </>
  );
};

export default CardImage;
