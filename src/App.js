import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./Components/Header";
import Home from "./Pages/Home";
import Movies from "./Pages/Movies";
import Celebrity from "./Pages/Celebrity";
import TV from "./Pages/TV";
import MovieDetail from "./Pages/MovieDetail";

function App() {
  return (
    <div className="root-wrap">
      {/* <BrowserRouter basename="/umc-week5-mission/"> */}
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/tv-programs" element={<TV />} />
          <Route path="/people" element={<Celebrity />} />

          <Route path="/movie/:title" element={<MovieDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
