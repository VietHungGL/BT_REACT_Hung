import { Routes, Route } from "react-router-dom";
import "./App.css";

import CardList from "./components/cardList";
import Form from "./components/form/index";
import Layout from "./components/layer";
import FormCreate from "./components/login/formCreate";
import FormLogin from "./components/login/formCreate";
import Login from "./components/login/login";
import ProductList from "./components/product/product";
import { LoginPages } from "./pages/login";

function App() {
  return (
    // <div className="App">
    //   {/* <Layout
    //     headerTitle="Xin chào, đây là header!"
    //     footerTitle="Xin chào, đây là footer!"
    //   > */}
    //   <main className="container">
    //     {/* <Button
    //         className="icon--white"
    //         icon={<i class="fa-brands fa-apple fa-xl" />}
    //         name="Continue with Apple"
    //         classes="bg-black"
    //       />
    //       <Button
    //         className="icon--black"
    //         icon={<i class="fa-brands fa-apple fa-xl" />}
    //         name="Continue with Apple"
    //         classes="bg-white"
    //       /> */}

    //     {/* <CardList title="Nhân viên xuất sắc" />
    //       <CardList title="Nhân viên ưu tú" /> */}

    //     {/* <Form /> */}
    //     {/* <Login /> */}
    //     {/* <ProductList /> */}
    //     {/* <FormCreate /> */}
    //   </main>
    //   {/* </Layout> */}
    // </div>
    <Routes>
      <Route path="/" />
    </Routes>
  );
}

export default App;
