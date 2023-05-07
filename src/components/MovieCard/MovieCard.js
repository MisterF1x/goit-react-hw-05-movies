import { Loading } from 'components/Loading/Loading';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  GroupBlockStyled,
  InfoNavStyled,
  RatingStyled,
  SectionStyled,
  WrapperStyled,
} from './MovieCard.styled';

export const MovieCard = ({ movie, isFetch }) => {
  if (!Object.keys(movie).length) return;
  const {
    poster_path,
    release_date,
    original_title,
    overview,
    genres,
    vote_average,
  } = movie;
  const release = new Date(release_date).getFullYear();
  const rating = Math.ceil(vote_average * 10);
  const url = poster_path
    ? `https://image.tmdb.org/t/p/w400/${poster_path}`
    : 'https://via.placeholder.com/400x600.png?text=Poster+Not+Available';

  return (
    <>
      {isFetch ? (
        <Loading />
      ) : (
        <SectionStyled>
          <WrapperStyled>
            <img src={url} alt={original_title} width={400} height={600} />

            <GroupBlockStyled>
              <div>
                <h1>
                  {original_title}({release})
                </h1>
                <p>
                  User score:{' '}
                  <RatingStyled ratingColor={rating}>{rating}%</RatingStyled>
                </p>
              </div>
              <div>
                <h2>Overview</h2>
                <p>{overview}</p>
              </div>
              <div>
                <h2>Genres</h2>
                <p>{genres.map(({ name }) => name).join(', ')}</p>
              </div>
            </GroupBlockStyled>
          </WrapperStyled>
          <InfoNavStyled>
            <h3>Additional info</h3>
            <ul>
              <li>
                <Link to="cast">Actors</Link>
              </li>
              <li>
                <Link to="reviews">Reviews</Link>
              </li>
            </ul>
          </InfoNavStyled>
        </SectionStyled>
      )}
    </>
  );
};

MovieCard.propType = {
  movie: PropTypes.shape({
    poster_path: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
    original_title: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
    genres: PropTypes.number.isRequired,
    vote_average: PropTypes.string.isRequired,
  }).isRequired,
  isFetch: PropTypes.bool.isRequired,
};
