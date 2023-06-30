import "./App.scss";
import { Routes, Route } from "react-router-dom";
import LazyLoad from "./LazyLoad";
import Navbar from "@components/Navbars/Navbar";

function App() {
  return (
    <div className="App">
      <div className="App-container">
        <Navbar />
        <Routes>
          <Route path="" element={LazyLoad(() => import("@pages/Homes/Home"))()}></Route>
          <Route path="/about" element={LazyLoad(() => import("@pages/Abouts/About"))()}>
            <Route path="my-infor" element={LazyLoad(() => import("@pages/Abouts/MyInfors/MyInfor"))()} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
