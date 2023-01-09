import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import "./scss/index.scss";
import "antd/dist/antd.min.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
