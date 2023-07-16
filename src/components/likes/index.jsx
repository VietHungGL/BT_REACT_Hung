import React, { useState } from "react";

import "./like.css";
function Likes(props) {
  return (
    <>
      <div className="likes">
        <BtnLike name="Like" />
      </div>
    </>
  );
}

export default Likes;

const BtnLike = ({ name }) => {
  const [activeLike, setActiveLike] = useState(false);

  const onClickLike = () => {
    setActiveLike((a) => !a);
  };
  return (
    <>
      <div onClick={onClickLike}>
        <button className={`btn__like ${activeLike ? "active--like" : ""}`}>
          <i class="fa-solid fa-heart"></i>
          {name}
        </button>
      </div>
    </>
  );
};
