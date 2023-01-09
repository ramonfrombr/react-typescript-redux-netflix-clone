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
        {movies.map(
          (movie) =>
            ((isLargeRow && movie.poster_path) ||
              (!isLargeRow && movie.backdrop_path)) && (
              <img
                className={`mr-3 w-full cursor-pointer object-contain opacity-100 transition-transform duration-500 hover:scale-110 ${
                  isLargeRow
                    ? "max-h-36 sm:max-h-40 md:max-h-48 lg:max-h-56 2xl:max-h-64"
                    : "max-h-14 sm:max-h-16 md:max-h-20 lg:max-h-24 2xl:max-h-28"
                }`}
                key={movie.id}
                src={`${imageBaseUrl}${
                  isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
                alt={movie.name}
              />
            )
        )}
      </div>
    </div>
  );
};

export default Row;
