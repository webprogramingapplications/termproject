import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.header``;

const Nav = styled.nav`
  margin-top: 20px;
  margin-left: 30%;
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
        <NavLink href="/new">신상품</NavLink>
        <NavLink href="/best">베스트</NavLink>
        <NavLink href="/specials">특가/혜택</NavLink>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
