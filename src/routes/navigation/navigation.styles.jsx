import styled from 'styled-components';
import {Link} from 'react-router-dom';


export const NavigationContainer = styled.div`
  margin-bottom: 40px;
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 25px;
`

export const NavLinks = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const NavLink = styled(Link)`
  cursor: pointer;
  padding: 10px 15px;
`;
