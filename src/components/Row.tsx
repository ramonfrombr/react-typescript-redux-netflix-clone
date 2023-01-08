import React, { FC, useEffect, useState } from "react";
import axios from "../axios";

interface RowProps {
  title: string;
  fetchUrl: string;
  isLargeRow?: boolean;
}

const Row: FC<RowProps> = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setMovies] = useState<MovieInterface[]>([]);

  const imageBaseUrl = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(fetchUrl);

      setMovies(request.data.results);

      return request;
    };

    fetchData();
  }, [fetchUrl]);

  return (
    <div className="ml-5 text-white">
      <h2 className="text-2xl">{title}</h2>

      <div className="remove_scrollbar flex overflow-y-hidden overflow-x-scroll p-5">
        {movies.map((movie) => (
          <img
            className={`mr-3  w-full object-contain opacity-100 transition-transform duration-500 hover:scale-110 ${
              isLargeRow ? "max-h-64" : "max-h-28"
            }`}
            key={movie.id}
            src={`${imageBaseUrl}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
    </div>
  );
};

export default Row;
