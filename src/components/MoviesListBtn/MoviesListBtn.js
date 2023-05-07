import PropTypes from 'prop-types';
import { BtnWrapperStyled } from './MoviesListBtn.styled';

export const MovieListBtn = ({ onClickDecrement, onClickIncrement, page }) => {
  const isVisible = page === 1;
  return (
    <BtnWrapperStyled>
      {!isVisible && (
        <button
          type="button"
          aria-label="prev-button"
          onClick={onClickDecrement}
        >
          Prev
        </button>
      )}
      <button type="button" aria-label="next-button" onClick={onClickIncrement}>
        Next
      </button>
    </BtnWrapperStyled>
  );
};

MovieListBtn.propTypes = {
  onClickDecrement: PropTypes.func.isRequired,
  onClickIncrement: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
};
