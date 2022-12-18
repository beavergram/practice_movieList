import { useEffect, useState } from "react";
import Movies from "../component/Movies";

function Home() {
  const [loading, setLoading] = useState(true);
  const [listMovies, setListMovies] = useState([]);
  const getMovies = async () => {
    const response = await fetch(
      "https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year"
    );
    const json = await response.json();
    setListMovies(json.data.movies);
    setLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div>
      <h1>movie</h1>
      {loading ? "loading..." : ""}
      <ul>
        {listMovies.map((item) => {
          return (
            <Movies
              key={item.id}
              id={item.id}
              title={item.title}
              cover={item.medium_cover_image}
              summary={item.summary}
              genres={item.genres}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default Home;
