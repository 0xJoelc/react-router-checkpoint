import { Routes, Route } from "react-router";
import Filter from "./Component/Filter";
import MovieCard from "./Component/MovieCard";
import MovieList from "./Component/MovieList";
import { movieData } from "./data";
import { useState } from "react";
import React from "react";

import ReturnBtn from "./Component/ReturnBtn";
import TrailerPage from "./Component/TrailerPage";
import { Layout } from "antd";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MovieList />} />

        <Route path="/:movieId" element={<TrailerPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
