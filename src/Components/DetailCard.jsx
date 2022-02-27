import React, { useState } from "react";
import Icon from "./Icon";

const DetailCard = () => {
  const [wishlist, setWistlist] = useState(false);
  const [remove, setRemove] = useState(false);

  const handleClickWishlist = () => {
    setWistlist(!wishlist);
  };

  const handleClickRemove = () => {
    setRemove(!remove);
  };

  return (
    <>
      <div className="col-5 px-3 detail">
        <h4>Blue Denim Short</h4>
        <br />
        <span>Shirt</span>
        <span>Blue</span>
        <br />
        <span>Color: Blue</span>
        <p>SIZE M</p>
        <button
          className={
            remove === true
              ? "btn btn-danger btn-sm mx-1"
              : "btn btn-secondary btn-sm mx-1"
          }
          onClick={() => handleClickRemove()}
        >
          <Icon icon="fa-solid fa-trash-can px-1" /> Remove
        </button>
        <button
          className={
            wishlist === true
              ? "btn btn-success btn-sm mx-1"
              : "btn btn-secondary btn-sm mx-1"
          }
          onClick={() => handleClickWishlist()}
        >
          <Icon icon="fa-solid fa-heart px-1" />
          {wishlist === true ? "Succes Move" : "Move to WishList"}
        </button>
      </div>
    </>
  );
};

export default DetailCard;
