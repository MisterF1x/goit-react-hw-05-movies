import { SectionStyled } from 'components/MovieCard/MovieCard.styled';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviewById } from 'services/api';
import { ReviewListStyled, ReviewStyled } from './Reviews.styled';
import { TitleCastStyled } from 'components/Cast/Cast.styled';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    const getMovieReviews = async id => {
      try {
        const { results } = await fetchMovieReviewById(id);
        setReviews(results);
      } catch (error) {
        console.error(error);
      }
    };

    getMovieReviews(movieId);
  }, [movieId]);

  return (
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
  );
};
export default Reviews;
