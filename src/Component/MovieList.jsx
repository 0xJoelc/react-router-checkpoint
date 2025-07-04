import { movieData } from "../data";
import MovieCard from "./MovieCard";

const MovieList = ({ movieData }) => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 mx-auto  gap-4 px-4 py-16 max-w-[1200px]">
      {movieData.map((item) => {
        return (
          <MovieCard
            key={item.movieID}
            title={item.title}
            description={item.description}
            posterURL={item.posterURL}
            rating={item.rating}
          />
        );
      })}
    </section>
  );
};

export default MovieList;
