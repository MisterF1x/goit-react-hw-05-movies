import { Loading } from 'components/Loading/Loading';
import { MovieCard } from 'components/MovieCard/MovieCard';
import { BackLinkStyled } from 'components/MovieCard/MovieCard.styled';
import { ERROR_MSG } from 'constant/constant';
import { Suspense, useEffect, useRef, useState } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { fetchMovieById } from 'services/api';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [selectedMovie, setSelectedMovie] = useState({});
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  const { current } = useRef(location.state?.from ?? '/');
  useEffect(() => {
    const getMovieInfo = async id => {
      try {
        setIsLoading(true);
        const result = await fetchMovieById(id);
        setSelectedMovie(result);
        setIsLoading(false);
      } catch (error) {
        setError(true);
        console.error(error);
      }
    };

    getMovieInfo(movieId);
  }, [movieId]);

  return (
    <>
      {error ? (
        <div>{ERROR_MSG['msg']}</div>
      ) : isLoading ? (
        <Loading />
      ) : (
        <>
          <BackLinkStyled to={current}>Go back</BackLinkStyled>
          <MovieCard movie={selectedMovie} isFetch={isLoading} />
          <Suspense fallback={<Loading />}>
            <Outlet />
          </Suspense>
        </>
      )}
    </>
  );
};
export default MovieDetails;
