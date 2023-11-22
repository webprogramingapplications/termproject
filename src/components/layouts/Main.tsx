import React from "react";
import styled from "styled-components";
import { FaHeart, FaShoppingCart } from "react-icons/fa";

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
  margin-top: 20px;
`;

const Logo = styled.img``;

const CompanyName = styled.span`
  font-weight: 700;
  font-size: larger;
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
`;

const Icon = styled.div`
  margin-left: 10px; /* 아이콘 사이의 간격을 조정 */
`;

const App: React.FC = () => {
  return (
    <>
      <BannerContainer>
        <CouponText>
          지금 가입하고, <StrongText>1만원 할인 쿠폰</StrongText> 받아가세요!
        </CouponText>
        <CloseButton>X</CloseButton>
      </BannerContainer>
      <AuthLinks>
        <AuthLink href="/signup">회원가입</AuthLink>
        <AuthLink href="/login">로그인</AuthLink>
      </AuthLinks>
      <HeaderContainer>
        <div>
          <Logo src="/path/to/logo.png" alt="IT마켓" />
          <CompanyName>잇마켓</CompanyName>
        </div>
        <SearchContainer>
          <SearchBar type="text" placeholder="검색어를 입력해주세요" />
        </SearchContainer>
        <IconContainer>
          <Icon>
            <FaHeart />
          </Icon>
          <Icon>
            <FaShoppingCart />
          </Icon>
        </IconContainer>
      </HeaderContainer>
    </>
  );
};

export default App;
