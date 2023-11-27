import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.header`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  width: 100%;
  padding: 20px 0;
`;

const Nav = styled.nav`
  margin-left: 30px;
`;

const NavLink = styled.a`
  color: black;
  font-weight: bold;
  text-decoration: none;
  margin-left: 80px;
  margin-right: 80px;
`;

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <Nav>
        <NavLink href="#">신상품</NavLink>
        <NavLink href="#">베스트</NavLink>
        <NavLink href="#">특가/혜택</NavLink>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
