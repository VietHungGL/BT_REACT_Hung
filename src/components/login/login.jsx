import { useState } from "react";
import axios from "axios";

export default function LoginForm(props) {
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

  console.log(user);

  const onLogin = async (e) => {
    // riêng ở đây nếu sử dụng  async/await thì
    e.preventDefault(); // phải thêm async cho nó
    const data = {
      email: "nv03@gmail.com",
      password: "123456",
    };

    const url = "https://batch-293-0-nodejs.onrender.com/admin/employees/login";
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
      const response = await axios.post(url, data);
      console.log(response.data);
    } catch (err) {
      console.error(err);
      console.log("Login thất bại");
    } //Hàm try catch cũng dùng sử lý dữ liệu
  };

  return (
    <form>
      <div className="form-outline mb-2">
        <input
          type="email"
          id="form2Example1"
          className="form-control"
          value={user.email}
          onChange={onChangeUser("email")}
        />
        <label className="form-label my-3" htmlFor="form2Example1">
          Email address
        </label>
      </div>

      <div className="form-outline mb-2">
        <input
          type="password"
          id="form2Example2"
          className="form-control"
          value={user.password}
          onChange={onChangeUser("password")}
        />
        <label className="form-label my-3" htmlFor="form2Example2">
          Password
        </label>
      </div>

      <button onClick={onLogin} className="btn btn-primary btn-block mb-4">
        Sign in
      </button>
    </form>
  );
}
