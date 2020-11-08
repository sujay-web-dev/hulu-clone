import React, { useEffect, useState } from "react";
import "./Results.css";
import Videocard from "./Videocard";
import axios from "./axios";
import FlipMove from "react-flip-move";

function Results({ selectedoption }) {
  const [movies, setmovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(selectedoption);
      setmovies(request.data.results);
      return request;
    }
    fetchData();
  }, [selectedoption]);

  return (
    <div className="results">
      <FlipMove>
        {movies.map((movie) => (
          <Videocard key={movie.id} movie={movie} />
        ))}
      </FlipMove>
    </div>
  );
}

export default Results;
