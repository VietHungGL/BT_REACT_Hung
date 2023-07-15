import React, { useEffect, useState } from "react";

import Card from "../card";

import "./card.css";

const userInfo = {
  image: "https://picsum.photos/200",
  name: "Bui Trang Truoc",
  role: "developer",
  birthday: "23/05/2014",
  mark: "B+",
  edu: "MCA",
  address: "Bangalore",
  email: "robot12@gmail.com",
  phone: "0900909099",
  age: 18,
};

function CardList(props) {
  const [user, setUser] = useState(userInfo);

  useEffect(() => {
    setUser((preState) => ({
      ...preState,
      name: "Hoang Viet Hung",
    }));
  }, []);

  const onPlusAge = () => {
    setUser((preState) => ({
      ...preState,
      age: preState.age + 1,
    }));
  };

  const onMinusAge = () => {
    setUser((preState) => ({
      ...preState,
      age: preState.age - 1,
    }));
  };
  const onReset = () => {
    setUser(userInfo);
  };
  return (
    <>
      <h1 className="mt-5">{props.title}</h1>

      <div className="card-list">
        <Card
          info={user}
          onPlusAge={onPlusAge}
          onMinusAge={onMinusAge}
          onReset={onReset}
        />
      </div>
    </>
  );
}
export default CardList;
