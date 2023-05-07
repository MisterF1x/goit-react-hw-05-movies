import { Loading } from 'components/Loading/Loading';
import { MovieList } from 'components/MovieList/MovieList';
import { SearchForm } from 'components/SearchForm/SearchForm';
import { ERROR_MSG } from 'constant/constant';
import { useEffect, useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { useSearchParams } from 'react-router-dom';
import { fetchMovieByQuery } from 'services/api';

const Movies = () => {
  const [searchedMovies, setSearchedMovies] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [searchQuery, setSearchQuery] = useSearchParams();
  const query = searchQuery.get('query') ?? '';
  useEffect(() => {
    const getSearchedMovies = async () => {
      try {
        setIsLoading(true);
        const { results } = await fetchMovieByQuery(query);
        setSearchedMovies(results);
        setIsLoading(false);
      } catch (error) {
        setError(true);
        console.error(error.msg);
      }
    };
    getSearchedMovies();
  }, [query]);
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : error ? (
        <div>{ERROR_MSG['msg']}</div>
      ) : (
        <>
          <SearchForm onSubmit={query => setSearchQuery({ query })} />
          {!!searchedMovies.length && <MovieList movies={searchedMovies} />}
          <Toaster position="top-right" />
        </>
      )}
    </>
  );
};
export default Movies;
