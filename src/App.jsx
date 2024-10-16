import "./App.css";
import LineChart from "./assets/component/LineChat/LineChart";
import NavBar from "./assets/component/navbar/NavBar";
import PriceOptions from "./assets/component/PriceOptions/PriceOptions";

function App() {
  return (
    <>
      <div>
        <NavBar></NavBar>
        <PriceOptions></PriceOptions>
        <LineChart></LineChart>
      </div>
    </>
  );
}

export default App;
