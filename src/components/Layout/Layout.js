import { NavLink, Outlet } from 'react-router-dom';
import logo from 'icons/logo.png';
import { Suspense } from 'react';
import { Loading } from 'components/Loading/Loading';
import {
  HeaderStyled,
  ListUlStyled,
  MainStyled,
  NavStyled,
} from './Layout.styled';
const Layout = () => {
  return (
    <>
      <HeaderStyled>
        <NavStyled>
          <NavLink to="/">
            <img src={logo} alt="Logo" width={70} height={70} />
          </NavLink>
          <ListUlStyled>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/movies">Movies</NavLink>
            </li>
          </ListUlStyled>
        </NavStyled>
      </HeaderStyled>
      <MainStyled>
        <Suspense fallback={<Loading />}>
          <Outlet />
        </Suspense>
      </MainStyled>
    </>
  );
};
export default Layout;
