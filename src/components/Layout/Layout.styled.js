import styled from '@emotion/styled';

export const HeaderStyled = styled.header`
  box-shadow: 0 -6px 10px 5px rgba(0, 0, 0, 0.5);
`;

export const NavStyled = styled.nav`
  max-width: 980px;
  margin: 0 auto;
  display: flex;
  gap: 80px;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
`;

export const ListUlStyled = styled.ul`
  display: flex;
  gap: 15px;
  & a {
    color: ${p => p.theme.colors.accent};
    transition: opacity 350ms linear;
    &:hover,
    &:focus {
      opacity: 0.8;
    }
    &.active {
      color: ${p => p.theme.colors.light};
      padding: 6px;
      background-color: ${p => p.theme.colors.accent};
      border-radius: ${p => p.theme.radii.xs};
    }
  }
`;
export const MainStyled = styled.main`
  padding-top: 40px;
  padding-left: 20px;
  padding-right: 20px;
`;
