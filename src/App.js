import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

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
