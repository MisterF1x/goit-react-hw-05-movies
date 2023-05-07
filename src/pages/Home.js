import { Loading } from 'components/Loading/Loading';
import { MovieList } from 'components/MovieList/MovieList';
import { MovieListBtn } from 'components/MoviesListBtn/MoviesListBtn';
import { ERROR_MSG } from 'constant/constant';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchTodayTrendMovies } from 'services/api';

const Home = () => {
  const [trendMovies, setTrendMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const page = Number(searchParams.get('page')) || 1;

  useEffect(() => {
    const getTodayTrendMovies = async page => {
      try {
        setIsLoading(true);
        const { results } = await fetchTodayTrendMovies(page);
        setTrendMovies(results);
      } catch (error) {
        setError(true);
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    getTodayTrendMovies(page);
  }, [page]);
  const incrementPage = () => {
    setSearchParams(params => {
      params.set('page', Math.max(1, page + 1));
      return params;
    });
  };
  const decrementPage = () => {
    setSearchParams(params => {
      params.set('page', Math.max(1, page - 1));
      if (Number(params.get('page')) === 1) {
        searchParams.delete('page');
      }
      return params;
    });
  };
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : error ? (
        <div>{ERROR_MSG['msg']}</div>
      ) : (
        <>
          <h1 style={{ textAlign: 'center' }}>Trending movies</h1>
          <MovieList movies={trendMovies} />
          <MovieListBtn
            onClickIncrement={incrementPage}
            onClickDecrement={decrementPage}
            page={page}
          />
        </>
      )}
    </>
  );
};
export default Home;
