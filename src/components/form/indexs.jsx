import React, { useState } from "react";

import "./form.css";

const Form = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // khi muốn lưu trữ giữ liệu thì dùng hàm useState()
  const [firstName, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");

  const onSubmitForm = (event) => {
    event.preventDefault();
    const data = {
      username,
      password,
      firstName,
      lastname,
    };
    console.log("aaaaa", data);
  };

  const onChangeUsername = (event) => {
    setUsername(event.target.value);
  };
  // khi dùng hàm onClick hoặc onChange thì nó cũng cấp event dữ liệu sẽ được dùng trong event.value
  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const onChangeFirstName = (event) => {
    setFirstName(event.target.value);
  };

  const onChangeLastname = (event) => {
    setLastName(event.target.value);
  };

  return (
    <>
      <h1>Form</h1>
      <form className="form-group" onSubmit={onSubmitForm}>
        <Input
          label="User Name"
          name="UserName"
          value={username}
          onChange={onChangeUsername}
        />

        <Input
          label="Firt Name"
          // type="firstName"// Nếu type của nó bằng text thì k cần phải truyền
          name="firstName"
          value={firstName}
          onChange={onChangeFirstName}
        />

        <Input
          label="Last Name"
          // type="lastname"
          name="lastname"
          value={lastname}
          onChange={onChangeLastname}
        />

        <Input
          label="Password"
          type="password"
          name="Password"
          value={password}
          onChange={onChangePassword}
        />
        <input type="submit" value="Submit" />
      </form>

      {/* <h1>Input</h1>
      <div className="form-group">
        <label>
          UserName:
          <input
            type="text"
            name="UserName"
            value={username}
            onChange={onChangeUsername}
          />
        </label>
        <label>
          PassWord:
          <input
            type="password"
            value={password}
            name="password"
            onChange={onChangePassword}
          />
        </label>
        <button onClick={onSubmitForm}>Submit</button>
      </div> */}
    </>
  );
};

export default Form;

const Input = ({
  label,
  type = "text",
  name,
  value,
  placeholder = "Please type in here",
  onChange,
}) => {
  return (
    <label>
      {label}
      <input
        type={type}
        value={value}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
      />
    </label>
  );
};
