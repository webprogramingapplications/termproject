import React, { useState } from "react";
import styled from "styled-components";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

const BannerContainer = styled.div`
  width: 100%;
  height: 40px;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: space-between;

  text-align: center;
`;

const CouponText = styled.span`
  color: white;
  text-align: center;
  margin-left: 42%;
`;

const StrongText = styled.span`
  font-weight: bold;
`;

const CloseButton = styled.span`
  color: white;
  cursor: pointer;
  margin-right: 13%;
`;

const AuthLinks = styled.div`
  display: flex;
  margin-top: 10px;
  margin-left: 80%;
  color: black;
  text-decoration: none;
`;

const AuthLink = styled.a`
  text-decoration: none;
  color: black;
  margin-left: 10px;
`;

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 30px;
`;

const Logo = styled.img``;

const HeaderTitle = styled.div`
  margin-left: 10%;
`;

const CompanyNameLink = styled(Link)`
  font-weight: 700;
  font-size: larger;
  color: black;
  text-decoration: none;
`;

const SearchContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SearchBar = styled.input`
  width: 400px;
  height: 40px;
  border-width: 0.9px;
  border-radius: 10px;
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 10%;
`;

const Icon = styled.div`
  margin-left: 10px;
`;

const CartLink = styled(Link)`
  text-decoration: none;
  color: black;
  margin-left: 10px;
`;

const Main: React.FC = () => {
  const [isClosed, setIsClosed] = useState(false);

  const handleClose = () => {
    setIsClosed(true);
  };

  return (
    <>
      {!isClosed && (
        <>
          <BannerContainer>
            <CouponText>
              지금 가입하고, <StrongText>1만원 할인 쿠폰</StrongText>{" "}
              받아가세요!
            </CouponText>
            <CloseButton onClick={handleClose}>X</CloseButton>
          </BannerContainer>
          <AuthLinks>
            <AuthLink href="/join">회원가입</AuthLink>
            <AuthLink>|</AuthLink>
            <AuthLink href="/login">로그인</AuthLink>
          </AuthLinks>
        </>
      )}
      <HeaderContainer>
        <HeaderTitle>
          <Logo src="/path/to/logo.png" alt="IT마켓" />
          <CompanyNameLink to="/">잇마켓</CompanyNameLink>
        </HeaderTitle>
        <SearchContainer>
          <SearchBar type="text" placeholder="검색어를 입력해주세요" />
        </SearchContainer>
        <IconContainer>
          <Icon>
            <FaHeart />
          </Icon>
          <CartLink to="/cart">
            <Icon>
              <FaShoppingCart />
            </Icon>
          </CartLink>
        </IconContainer>
      </HeaderContainer>
    </>
  );
};

export default Main;
