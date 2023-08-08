import React from "react";

import Button from "../button";
import "./card.css";

function Card({ info, onPlusAge, onMinusAge, onReset }) {
  const { image, name, role, birthday, mark, edu, address, email, phone, age } =
    info;
  return (
    <>
      <div className="profile-item">
        <div className="image">
          <a href="#">
            <img src={image} alt="" />
          </a>
          <h3 className="image-title">{name}</h3>
          <p className="image-name-job">{role}</p>
        </div>
        <p className="image-title">Age: {age}</p>
        <Button
          name="TangTuoi"
          classes="bg-white"
          className="btn"
          onClick={onPlusAge}
        />
        <Button
          name="GiamTuoi"
          className="btn"
          classes="bg-black"
          onClick={onMinusAge}
        />
        <Button
          name="Reset"
          className="btn"
          classes="bg-black"
          onClick={onReset}
        />
        <div className="education">
          <ul>
            <li className="edu-item">
              <p>
                <i className="fa-solid fa-calendar-days" />
                <span>DOB</span>
              </p>
              <p>{birthday}</p>
            </li>
            <li className="edu-item">
              <p>
                <i className="fa-solid fa-heart" />
                <span>BG</span>
              </p>
              <p>{mark}</p>
            </li>
            <li className="edu-item">
              <p>
                <i className="fa-solid fa-graduation-cap" />
                <span>EDU</span>
              </p>
              <p>{edu}</p>
            </li>
            <li className="edu-item">
              <p>
                <i className="fa-solid fa-location-dot" />
                <span>RES</span>
              </p>
              <p>{address}</p>
            </li>
          </ul>
        </div>
        <div className="email">
          <div className="emai-item bg-red">
            <p>EMAIL ID</p>
            <a href="#">
              <i className="fa-sharp fa-regular fa-envelope" />
              <span>{email}</span>
            </a>
          </div>
          <div className="emai-item bg-green">
            <p>PHONE NO</p>
            <a href="#">
              <i className="fa-sharp fa-solid fa-phone" />
              <span>{phone}</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
