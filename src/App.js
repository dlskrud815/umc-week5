import React from "react";
import { HashRouter as BrowserRouter, Route, Routes } from "react-router-dom";
//HahRouter as 추가해야 github pages 정상 작동

import Header from "./Components/Header";
import Home from "./Pages/Home";
import Movies from "./Pages/Movies";
import Celebrity from "./Pages/Celebrity";
import TV from "./Pages/TV";
//import NotFound from "./Pages/NotFound";

function App() {
  return (
    <div className="root-wrap">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/tv-programs" element={<TV />} />
          <Route path="/people" element={<Celebrity />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
