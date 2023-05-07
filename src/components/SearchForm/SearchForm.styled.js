import styled from '@emotion/styled';
import { Field, Form } from 'formik';

export const StyledForm = styled(Form)`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 400px;
  background-color: #fff;
  border: 1px solid #dedede;
  margin: 0 auto;
  border-radius: 3px;
  overflow: hidden;
`;
export const StyledField = styled(Field)`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 20px;
  border: none;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;
  &::placeholder {
    font: inherit;
    font-size: 18px;
  }
`;
export const StyledBtn = styled.button`
  width: 48px;
  height: 48px;
  border: 0;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  &:hover,
  &:focus {
    opacity: 1;
  }
`;
