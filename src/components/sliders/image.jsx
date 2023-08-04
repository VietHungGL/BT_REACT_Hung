import React, { useState } from "react";

import "./image.css";
function Image(props) {
  const imageList = [
    "https://plus.unsplash.com/premium_photo-1675706599643-5168c013063d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=871&q=80",
    "https://images.unsplash.com/photo-1619441207978-3d326c46e2c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=869&q=80",
    "https://images.unsplash.com/photo-1500964757637-c85e8a162699?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=903&q=80",
    "https://plus.unsplash.com/premium_photo-1676385777209-1d435cc69c5a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    "https://images.unsplash.com/photo-1614586125858-e695dd97d1b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=903&q=80",
    "https://plus.unsplash.com/premium_photo-1676405222462-368359199146?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=871&q=80",
    "https://images.unsplash.com/photo-1541890289-b86df5bafd81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=845&q=80",
    "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    "https://plus.unsplash.com/premium_photo-1676385793597-91b70754451e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1032&q=80",
    "https://images.unsplash.com/photo-1490750967868-88aa4486c946?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
  ];
  const [index, setIndex] = useState(0);
  const onClickNext = () => {
    if (index + 1 < imageList.length) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  };
  const onClickBlack = () => {
    if (index - 1 >= 0) {
      setIndex(index - 1);
    } else {
      setIndex(imageList.length - 1);
    }
  };
  return (
    <>
      <div className="image">
        <img src={imageList[index]} alt="anhnen" />
        <h4>
          {index + 1}/{imageList.length}
        </h4>
        <div className="d-flex ">
          <button
            className="btn btn-primary"
            // onClick={() => setIndex(index - 1)}
            onClick={onClickBlack}
          >
            <i className="fa-solid fa-chevron-left mx-2"></i>
            Black
          </button>
          <button
            className="btn btn-success"
            // onClick={() => setIndex(index + 1)}
            onClick={onClickNext}
          >
            Next
            <i className="fa-solid fa-chevron-right mx-2"></i>
          </button>
        </div>
      </div>
    </>
  );
}

export default Image;
