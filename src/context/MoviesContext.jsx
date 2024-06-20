import axios from "axios";
import React, { createContext, useCallback, useState } from "react";

export const moviesContext = createContext();
export default function MoviesProvider({ children }) {
  const baseUrl = "https://api.themoviedb.org/3";
  const [trendingMovies, setTrendingMovies] = useState(null);
  const [Error, setError] = useState(null);
  const [Lodaing, setLodaing] = useState(false);

  const getTrendingMovies = useCallback(async (time = "day") => {
    try {
      setError("");
      setLodaing(true);
      const { data } = await axios.get(
        `${baseUrl}/trending/movie/${time}?language=en-US`,
        {
          headers: {
            accept: "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNDRkM2FmZGQ4ZjRhNzg1NzAzM2UxN2ZjODk1MTcyYiIsInN1YiI6IjY2NDEzMGFlMTA4ODkyMjE2YTAxNTE4MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.iXTeYdpL0Evcjqpcs4Llbrz91J0G3UuaaneU84AIMY4",
          },
        }
      );
      setTrendingMovies(data);
    } catch (error) {
      setError(error);
    } finally {
      setLodaing(false);
    }
  }, []);
  return (
    <>
      <moviesContext.Provider
        value={{ trendingMovies, getTrendingMovies, Error, Lodaing }}
      >
        {children}
      </moviesContext.Provider>
    </>
  );
}
