import "./App.css";

import CardList from "./components/cardList";
import Form from "./components/form/index";
import Layout from "./components/layer";

function App() {
  return (
    <div className="App">
      {/* <Layout
        headerTitle="Xin chào, đây là header!"
        footerTitle="Xin chào, đây là footer!"
      > */}
      <main className="container">
        {/* <Button
            className="icon--white"
            icon={<i class="fa-brands fa-apple fa-xl" />}
            name="Continue with Apple"
            classes="bg-black"
          />
          <Button
            className="icon--black"
            icon={<i class="fa-brands fa-apple fa-xl" />}
            name="Continue with Apple"
            classes="bg-white"
          /> */}

        {/* <CardList title="Nhân viên xuất sắc" />
          <CardList title="Nhân viên ưu tú" /> */}

        <Form />
      </main>
      {/* </Layout> */}
    </div>
  );
}

export default App;
