import React { useEffect, useState } from "react";

import movies from "./components/movies";
import { useEffect, useState } from "react";


const Feature_API = "";
const Image_API = "";
const Search_API = "";



function App() {
  const [movie, setmovie] = useState([]);

  useEffect(() => {
    fetch(Feature_API)
      .then(res) => res.json())
    .then(data) => {
    console.log(data);
    setMovies(data.results);


  });
  const movieA = await movieres.json();

  setMovie(movieA)
}, [])



return <div>
  {movie.length > 0 && movie.map((movie)) =>
  <movies key = {movie.id} {}/>
  ))

  }

</div>


}

export default App;
