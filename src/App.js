import "./App.css";
import ButtonAccordions from "./components/buttonAccordions";

import CardList from "./components/cardList";
import Layout from "./components/layer";

function App() {
  return (
    <div className="App">
      {/* <Layout
        headerTitle="Xin chào, đây là header!"
        footerTitle="Xin chào, đây là footer!"
      >
      </Layout> */}
      <main>
        {/* <CardList title="Nhân viên xuất sắc" />
        <CardList title="Nhân viên ưu tú" /> */}
        <ButtonAccordions />
      </main>
    </div>
  );
}

export default App;
