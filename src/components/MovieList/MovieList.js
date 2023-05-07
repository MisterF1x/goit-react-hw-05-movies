import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import { RiMovie2Line } from 'react-icons/ri';
import { IconSize } from 'constant/constant';
import { MovieListStyledLi, MovieListStyledUl } from './MovieList.styled';

export const MovieList = ({ movies }) => {
  const location = useLocation();
  return (
    <MovieListStyledUl>
      {movies.map(({ id, title }) => (
        <MovieListStyledLi key={id}>
          <RiMovie2Line size={IconSize.sm} />
          <Link to={`/movies/${id}`} state={{ from: location }}>
            {title}
          </Link>
        </MovieListStyledLi>
      ))}
    </MovieListStyledUl>
  );
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
};
