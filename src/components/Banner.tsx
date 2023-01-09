import { FC, useEffect, useState } from "react";
import banner from "../assets/images/banner.jpg";
import axios from "../axios";
import requests from "../Requests";

const Banner: FC = () => {
  const [movie, setMovie] = useState<MovieInterface>();

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
    }

    fetchData();
  }, []);

  const truncate = (string: string | undefined, n: number) => {
    if (string) {
      return string?.length > n ? string.substring(0, n - 1) + "..." : string;
    }

    return "";
  };

  return (
    <header
      className="relative h-[448px] object-contain text-white"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="ml-8 h-48 pt-36">
        <h1 className="pb-1.5 text-5xl font-bold">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="">
          <button className="mr-4 cursor-pointer rounded-sm border-0 bg-black/50 px-8 py-2 font-bold text-white outline-none transition duration-200 hover:bg-gray-100 hover:text-black">
            Play
          </button>
          <button className="mr-4 cursor-pointer rounded-sm border-0 bg-black/50 px-8 py-2 font-bold text-white outline-none transition duration-200 hover:bg-gray-100 hover:text-black">
            My List
          </button>
        </div>
        <h1 className="h-20 w-[45rem] max-w-[360px] pt-4 text-sm leading-5">
          {truncate(movie?.overview, 150)}
        </h1>
      </div>

      <div className="absolute bottom-0 h-28 w-full bg-gradient-to-b from-transparent to-black" />
    </header>
  );
};

export default Banner;
