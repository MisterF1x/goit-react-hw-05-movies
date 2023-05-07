import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCast } from 'services/api';
import { StyledCastUl, TitleCastStyled } from './Cast.styled';
import { SectionStyled } from 'components/MovieCard/MovieCard.styled';
import { ERROR_MSG } from 'constant/constant';
import { Loading } from 'components/Loading/Loading';

const Cast = () => {
  const { movieId } = useParams();
  const [casts, setCasts] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const getMovieCasts = async id => {
      try {
        setIsLoading(true);
        const { cast } = await fetchMovieCast(id);
        setCasts(cast);
        setIsLoading(false);
      } catch (error) {
        setError(true);
        console.error(error.msg);
      }
    };
    getMovieCasts(movieId);
  }, [movieId]);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : error ? (
        <div>{ERROR_MSG['msg']}</div>
      ) : (
        <SectionStyled>
          <TitleCastStyled>Movie actors</TitleCastStyled>
          <StyledCastUl>
            {casts.length ? (
              casts.map(({ original_name, profile_path, character }, idx) => (
                <li key={idx}>
                  <img
                    src={
                      profile_path
                        ? `https://image.tmdb.org/t/p/w200${profile_path}`
                        : 'https://via.placeholder.com/200x300?text=No+Image'
                    }
                    alt={original_name}
                  />
                  <p>{original_name}</p>
                  <p>{character}</p>
                </li>
              ))
            ) : (
              <div>Actors not found!</div>
            )}
          </StyledCastUl>
        </SectionStyled>
      )}
    </>
  );
};
export default Cast;
