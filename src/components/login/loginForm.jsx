import React, { useState } from "react";
import Input from "./inputlogin";

const data = {
  email: "",
  password: "",
};
export default function LoginFormBT(props) {
  const [loginValue, setLoginValue] = useState(data);
  console.log("««««« loginValue »»»»»", loginValue);
  const handleChange = (event) => {
    const { value, name } = event.target;

    setLoginValue((formValue) => ({
      ...formValue,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <div>
        <form className="form" onSubmit={handleSubmit}>
          <h1>Login</h1>
          <div className="row flex-column">
            <div className="col mb-3">
              <Input
                type="email"
                label="Email"
                placeholder="Nhập Email"
                name="email"
                value={loginValue.email}
                onChange={handleChange}
              />
            </div>

            <div className="col mb-3">
              <Input
                type="password"
                label="Password"
                placeholder="Nhập password"
                name="password"
                value={loginValue.password}
                onChange={handleChange}
              />
            </div>
          </div>
          <button
            onClick={handleSubmit}
            type="submit"
            className="btn-create btn-primary btn-block mb-4"
          >
            Login Account
          </button>
        </form>
      </div>
    </>
  );
}
