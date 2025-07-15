import { Link } from "react-router";
import { movieData } from "../data";
import MovieCard from "./MovieCard";
import Filter from "./Filter";
import { useState } from "react";


const MovieList = () => {
  const [display, setDisplay] = useState(movieData);

  const changeTitle = (value) => {
    const filterData = movieData.filter((item) => {
      return item.title === value;
    });
    setDisplay(filterData);
  };

  const changeRating = (value) => {
    const filterData = movieData.filter((item) => {
      return item.rating === value;
    });
    setDisplay(filterData);
  };
  return (
    <div>
      <Filter changeTitle={changeTitle} changeRating={changeRating} />
      <section className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 mx-auto  gap-4 px-4 py-16 max-w-[1200px]">
        {display.map((item) => {
          return (
            <MovieCard
              key={item.movieID}
              movieID={item.movieID}
              title={item.title}
              description={item.description}
              posterURL={item.posterURL}
              rating={item.rating}
            />
          );
        })}
      </section>
    </div>
  );
};

export default MovieList;
