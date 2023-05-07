import { SectionStyled } from 'components/MovieCard/MovieCard.styled';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviewById } from 'services/api';
import { ReviewListStyled, ReviewStyled } from './Reviews.styled';
import { TitleCastStyled } from 'components/Cast/Cast.styled';
import { ERROR_MSG } from 'constant/constant';
import { Loading } from 'components/Loading/Loading';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const getMovieReviews = async id => {
      try {
        setIsLoading(true);
        const { results } = await fetchMovieReviewById(id);
        setReviews(results);
        setIsLoading(false);
      } catch (error) {
        setError(true);
        console.error(error);
      }
    };

    getMovieReviews(movieId);
  }, [movieId]);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : error ? (
        <div>{ERROR_MSG['msg']}</div>
      ) : (
        <>
          <SectionStyled>
            <TitleCastStyled>Movie reviews</TitleCastStyled>
            <ReviewListStyled>
              {!!reviews.length ? (
                reviews.map(({ author, content }) => (
                  <li key={author}>
                    <p>{author}</p>
                    <ReviewStyled>{content}</ReviewStyled>
                  </li>
                ))
              ) : (
                <li>We don't have any review to this movie</li>
              )}
            </ReviewListStyled>
          </SectionStyled>
        </>
      )}
    </>
  );
};
export default Reviews;
