import PropTypes from 'prop-types';
import { ERROR_MSG, IconSize, toastErrStyle } from 'constant/constant';
import { Formik } from 'formik';
import { BiSearchAlt } from 'react-icons/bi';
import { StyledBtn, StyledField, StyledForm } from './SearchForm.styled';
import toast from 'react-hot-toast';

export const SearchForm = ({ onSubmit }) => {
  const handleFormSubmit = ({ movie }, { resetForm }) => {
    const trimedQuery = movie.trim();
    if (!trimedQuery) {
      return toast.error(ERROR_MSG['empty'], toastErrStyle);
    }
    resetForm();
    onSubmit(movie);
  };
  return (
    <Formik initialValues={{ movie: '' }} onSubmit={handleFormSubmit}>
      <StyledForm>
        <StyledField
          type="text"
          name="movie"
          autoComplete="on"
          autoFocus
          placeholder="Search movies"
        />
        <StyledBtn type="submit" aria-label="search movie">
          <BiSearchAlt size={IconSize.md} />
        </StyledBtn>
      </StyledForm>
    </Formik>
  );
};
SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
