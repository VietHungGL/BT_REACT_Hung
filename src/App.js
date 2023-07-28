import PlayMusic from "components/musics";
import "./App.css";

import ButtonAccordions from "./components/buttonAccordions";
import ButtonTabs from "./components/buttonTabs";
import CardList from "./components/cardList";
import Layout from "./components/layer";
import Likes from "./components/likes/index";
import SliderImage from "./components/sliders";

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
        {/* <ButtonAccordions />
        <ButtonTabs />
        <SliderImage />
        <Likes /> */}
        <PlayMusic />
      </main>
    </div>
  );
}

export default App;
