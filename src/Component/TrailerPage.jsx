import { useParams } from "react-router";

import { useState, useEffect } from "react";
import { movieData } from "../data";
import ReturnBtn from "./ReturnBtn";

const TrailerPage = () => {
  const { movieId } = useParams();
  const [trailer, setTrailer] = useState(null);

  function findById() {
    const singleTrailer = movieData.find(
      (item) => item.movieID === Number(movieId)
    );
    console.log(singleTrailer);

    setTrailer(singleTrailer);
  }
  useEffect(() => {
    findById();
  }, []);
  if (trailer === null || trailer === undefined) {
    return (
      <div className="text-center py-24 px-2">
        <h1>sorry we could not retrieve the post</h1>
      </div>
    );
  }
  return (
    <section>
      <ReturnBtn/>
      <iframe
        width="100%"
        height="500"
        
        allow="accelerometer; autoplay=1; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        className="max-w-full"
        src={trailer.trailerUrl}
      />
      <p className="text-center font-bold mt-10">{trailer.description}</p>
    </section>
  );
};
export default TrailerPage;
