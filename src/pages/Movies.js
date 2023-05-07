import { MovieList } from 'components/MovieList/MovieList';
import { SearchForm } from 'components/SearchForm/SearchForm';
import { useEffect, useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { useSearchParams } from 'react-router-dom';
import { fetchMovieByQuery } from 'services/api';

const Movies = () => {
  const [searchedMovies, setSearchedMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useSearchParams();
  const query = searchQuery.get('query') ?? '';
  useEffect(() => {
    const getSearchedMovies = async () => {
      const { results } = await fetchMovieByQuery(query);
      setSearchedMovies(results);
    };
    getSearchedMovies();
  }, [query]);
  return (
    <>
      <SearchForm onSubmit={query => setSearchQuery({ query })} />
      {!!searchedMovies.length && <MovieList movies={searchedMovies} />}
      <Toaster position="top-right" />
    </>
  );
};
export default Movies;
