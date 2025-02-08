import "./App.css";
import Layout from "./components/Layout";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./components/Home";
import About from "./components/About";
import Anime from "./components/Anime";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/detail/:id" element={<Anime />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
