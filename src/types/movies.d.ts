interface MovieInterface {
  backdrop_path: string;
  first_air_data: string;
  genre_ids: number[];
  id: number;
  name: string;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string | undefined;
  popularity: number;
  poster_path: string;
  vote_average: number;
  vote_count: number;
  title?: string;
}
