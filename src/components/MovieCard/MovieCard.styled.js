import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const SectionStyled = styled.section`
  padding-top: 30px;
`;
export const WrapperStyled = styled.div`
  display: flex;
  gap: 30px;
  padding-bottom: 30px;
`;
export const GroupBlockStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  & h1 {
    font-size: 28px;
    color: ${p => p.theme.colors.accent};
  }
  & h2 {
    font-size: 22px;
    color: #666;
  }
`;

export const InfoNavStyled = styled.nav`
  padding: 20px 0;
  border-bottom: 1px solid #d2d2d2;
  border-top: 1px solid #d2d2d2;
  & > h3 {
    margin-bottom: 10px;
  }
`;
export const BackLinkStyled = styled(Link)`
  &::before {
    content: '\u2190';
    margin-right: 8px;
  }
`;
export const RatingStyled = styled.span`
  font-weight: 700;
  color: ${({ ratingColor }) => {
    if (ratingColor < 40) return 'orangered';
    if (ratingColor > 40 && ratingColor < 70) return '#F6BA6F';
    if (ratingColor > 70) return 'green';
  }};
`;
