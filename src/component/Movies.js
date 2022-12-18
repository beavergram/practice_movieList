import PropTypes from "prop-types";
import { Link } from "react-router-dom";
function Movies({ id, title, cover, genres, summary }) {
  return (
    <div>
      <img src={cover} alt="" />
      <h2>
        <Link to={`/detail/${id}`}>{title}</Link>
      </h2>

      <span>{summary}</span>
      <ul>
        {genres.map((g) => {
          return <li key={g}>{g}</li>;
        })}
      </ul>
      <hr />
    </div>
  );
}
Movies.propTypes = {
  id: PropTypes.number.isRequired,
  cover: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default Movies;
