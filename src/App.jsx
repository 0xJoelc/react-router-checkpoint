
import Filter from "./Component/Filter";
import MovieCard from "./Component/MovieCard";
import MovieList from "./Component/MovieList";
import { movieData } from "./data";
import { useState } from "react";



function App() {

  const [display, setDisplay] = useState(movieData);

  const changeTitle = (value) => {
    const filterData = movieData.filter((item) => { return item.title === value});
    setDisplay(filterData);
  };

  const changeRating = (value) => {
    const filterData = movieData.filter((item) => {
      return item.rating === value;
    });
    setDisplay(filterData);
  };
  return (
    <>
     <Filter changeTitle={changeTitle} changeRating={changeRating}/>
      <MovieList movieData={display} />
    </>
  );
}

export default App;
