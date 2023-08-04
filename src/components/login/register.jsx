import { useState } from "react";

import { axiosClient } from "../../helper/axiosClient";

import "./login.css";

export default function Register(props) {
  const [user, setUser] = useState({
    email: "",
    password: "",
    comfirPassword: "",
  });

  const onChangeUser = (name) => (e) => {
    setUser((prev) => ({
      ...prev,
      [name]: e.target.value,
    }));
  };

  console.log(user);

  const onRegister = async (e) => {
    // riêng ở đây nếu sử dụng  async/await thì
    e.preventDefault(); // phải thêm async cho nó
    const data = {
      email: "nv03@gmail.com",
      password: "123456",
    };

    const url = "/admin/employees";
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
      await axiosClient.post(url, data);
    } catch (err) {
      console.error(err);
      console.log("Login thất bại");
    } //Hàm try catch cũng dùng sử lý dữ liệu
  };

  return (
    <>
      <h1>Đăng Ký</h1>
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

        <div className="form-outline mb-2">
          <label className="form-label my-3" htmlFor="form2Example2">
            ComfirPassword
          </label>
          <input
            type="comfirpassword"
            id="form2Example2"
            className="form-control"
            value={user.comfirPassword}
            onChange={onChangeUser("comfirpassword")}
          />
        </div>

        <button onClick={onRegister} className="btn btn-primary btn-block mb-4">
          Đăng Ký
        </button>
      </form>
    </>
  );
}
