import { Routes, Route, useNavigate, Form } from "react-router-dom";

// import CardList from "./components/cardList";
// import Form from "./components/form/index";
// import Layout from "./components/layer";
// import FormCreate from "./components/login/formCreate";
// import FormLogin from "./components/login/formCreate";
// import Login from "./components/login/login";
// import PlayMusic from "./components/musics";

import CartEmployeePage from "pages/cartEmployee";
import CartManagerPage from "pages/cartManager";
import HomePage from "pages/home";
import ImagePage from "pages/image";
import PlayListPage from "pages/playList";
import ProductPage from "pages/product";
import { LoginPage } from "pages/login";
import { RegisterPage } from "pages/register";

import AuthLayout from "components/layer/auth";
import NonAuthLayout from "components/layer/nonAuth";
import NotFoundPage from "pages/404";

import { DEFAULT, LOCATION } from "constants/index";
import { useEffect } from "react";
import { axiosClient } from "helper/axiosClient";

import "./App.css";
import Button from "components/button";
import FormPage from "pages/form";

function App() {
  const navigate = useNavigate();

  const token = window.localStorage.getItem(DEFAULT.TOKEN);

  useEffect(() => {
    if (token) {
      axiosClient.defaults.headers.Authorization = `Bearer ${token}`;
    } else {
      navigate(LOCATION.LOGIN);
    }
  }, [navigate, token]);
  return (
    <>
      {!token ? (
        <Routes>
          <Route path={LOCATION.HOME} element={<NonAuthLayout />}>
            <Route index path={LOCATION.LOGIN} element={<LoginPage />} />
            <Route path={LOCATION.REGISTER} element={<RegisterPage />} />
          </Route>
        </Routes>
      ) : (
        <Routes>
          <Route path={LOCATION.HOME} element={<AuthLayout />}>
            <Route index element={<HomePage />} />
            <Route path={LOCATION.IMAGE} element={<ImagePage />} />
            <Route path={LOCATION.PRODUCT} element={<ProductPage />} />
            <Route path={LOCATION.PLAY_LIST} element={<PlayListPage />} />
            <Route
              path={LOCATION.CART_EMPLOYEE}
              element={<CartEmployeePage />}
            />
            <Route path={LOCATION.CART_MANAGER} element={<CartManagerPage />} />
            <Route path={LOCATION.BUTTON_ACCORDION} element={<Button />} />
            <Route path={LOCATION.FORM} element={<FormPage />} />
          </Route>

          <Route index path={LOCATION.LOGIN} element={<LoginPage />} />
          <Route path={LOCATION.REGISTER} element={<RegisterPage />} />

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      )}

      {/* <div className="App">
      <AuthLayout headerTitle="Xin chào, đây là header!">
        <main className="container d-flex justify-content-center my-4">
          Đã Đăng nhập
        </main>
      </AuthLayout>

      <NonAuthLayout footerTitle="Xin chào, đây là footer!">
        <main className="container d-flex justify-content-center my-4">
          Chưa Đăng Nhập
        </main>
      </NonAuthLayout>
      </div> */}
    </>
  );
}

export default App;
