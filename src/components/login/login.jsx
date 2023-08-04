import { useEffect, useState } from "react";

import { axiosClient } from "../../helper/axiosClient";

import "./login.css";
import { useNavigate } from "react-router-dom";
import { DEFAULT, LOCATION } from "constants/index";

export default function Login(props) {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const onChangeUser = (name) => (e) => {
    setUser((prev) => ({
      ...prev,
      [name]: e.target.value,
    }));
  };

  // console.log(user);

  const onLogin = async (e) => {
    // riêng ở đây nếu sử dụng  async/await thì
    e.preventDefault(); // phải thêm async cho nó
    const data = {
      email: "nv03@gmail.com",
      password: "123456",
    };

    const url = "/admin/employees/login";
    // fetch(url, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(data),
    // })
    //   .then((response) => response.json())
    //   .then((json) => {
    //     // Xử lý kết quả JSON ở đây
    //     console.log(json);
    //   })
    //   .catch((error) => {
    //     // Nếu có lỗi
    //     console.error(error);
    //   });
    //   Hàm fetch dùng để sử lý dữ liệu

    //     axios
    //       .post(url, data)
    //       .then((result) => {
    //         console.log(result.data);
    //         console.log("Login thành công");
    //       })
    //       .catch((err) => {
    //         console.error(err);
    //         console.log("Login thất bại");
    //       }); //   Hàm axios dùng để sử lý dữ liệu

    try {
      // Promise là 1 lời hứa
      const response = await axiosClient.post(url, user);
      localStorage.setItem(DEFAULT.TOKEN, response.data.token);
      localStorage.setItem(DEFAULT.REFRESH_TOKEN, response.data.refreshToken);
      console.log(response.data);
      if (response && response.data.token) {
        navigate(LOCATION.HOME);
      }
    } catch (err) {
      console.error(err);
      console.log("Login thất bại");
    } //Hàm try catch cũng dùng sử lý dữ liệu
  };

  const token = localStorage.getItem(DEFAULT.TOKEN);

  useEffect(() => {
    if (token) {
      navigate(LOCATION.HOME);
    }
  }, [navigate, token]);
  return (
    <>
      <h1>Đăng Nhập</h1>
      <form className="form-login">
        <div className="form-outline mb-4">
          <label className="form-label my-3" htmlFor="form2Example1">
            Email address
          </label>
          <input
            type="email"
            id="form2Example1"
            className="form-control"
            value={user.email}
            onChange={onChangeUser("email")}
          />
        </div>

        <div className="form-outline mb-2">
          <label className="form-label my-3" htmlFor="form2Example2">
            Password
          </label>
          <input
            type="password"
            id="form2Example2"
            className="form-control"
            value={user.password}
            onChange={onChangeUser("password")}
          />
        </div>

        <button onClick={onLogin} className="btn btn-primary btn-block mb-4">
          Sign in
        </button>
      </form>
    </>
  );
}
